(function () {
  const data = globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA || {};

  const el = (id) => document.getElementById(id);
  const nodes = {
    generatedAt: el('generatedAt'),
    heroGrid: el('heroGrid'),
    sourcePills: el('sourcePills'),
    regimeGrid: el('regimeGrid'),
    latestObservation: el('latestObservation'),
    indicatorGrid: el('indicatorGrid'),
    historyWindow: el('historyWindow'),
    historyPlot: el('historyPlot'),
    thresholdPolicy: el('thresholdPolicy'),
    notesList: el('notesList'),
  };

  const escapeHtml = (value) => String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

  const statusClass = (status) => `status-${status || 'missing'}`;
  const statusLabel = (status) => ({ ok: 'OK', watch: 'WATCH', alarm: 'ALARM', stale: 'STALE', missing: 'MISSING' }[status] || String(status || 'UNKNOWN').toUpperCase());

  function renderHero() {
    nodes.generatedAt.textContent = `generated ${data.generated_at || 'n/a'}`;
    nodes.heroGrid.innerHTML = (data.hero_cards || []).map((card) => `
      <article class="hero-card ${statusClass(card.status)}">
        <div class="label">${escapeHtml(card.label)}</div>
        <div class="value">${escapeHtml(card.value)}</div>
        <div class="note">${escapeHtml(card.note)}</div>
      </article>
    `).join('');
  }

  function renderSources() {
    nodes.sourcePills.innerHTML = (data.tracked_sources || []).map((item) => {
      const status = data.source_status?.[item.series_id] || 'missing';
      return `<span class="pill ${statusClass(status)}">${escapeHtml(item.series_id)} · ${escapeHtml(item.cadence)}</span>`;
    }).join('');
  }

  function renderRegimes() {
    nodes.regimeGrid.innerHTML = (data.regime_cards || []).map((card) => `
      <article class="regime-card ${statusClass(card.status)}">
        <div class="indicator-top">
          <div>
            <div class="label">${escapeHtml(card.label)}</div>
            <div class="headline">${escapeHtml(card.headline)}</div>
          </div>
          <span class="tag ${statusClass(card.status)}">${escapeHtml(statusLabel(card.status))}</span>
        </div>
        <p><strong>Drivers:</strong> ${escapeHtml(card.drivers)}</p>
        <p class="implication"><strong>Implication:</strong> ${escapeHtml(card.implication)}</p>
      </article>
    `).join('');
  }

  function renderIndicators() {
    nodes.latestObservation.textContent = `latest ${data.summary?.latest_observation || 'n/a'}`;
    nodes.indicatorGrid.innerHTML = (data.indicators || []).map((item) => {
      const componentText = (item.components || []).map((component) => component.series_id).filter(Boolean).join(' · ');
      return `
        <article class="indicator-card ${statusClass(item.status)}">
          <div class="indicator-top">
            <div>
              <div class="label">${escapeHtml(item.label)}</div>
              <div class="indicator-value">${escapeHtml(item.value_label || 'n/a')}</div>
            </div>
            <span class="tag ${statusClass(item.status)}">${escapeHtml(statusLabel(item.status))}</span>
          </div>
          <p>${escapeHtml(item.why || '')}</p>
          <div class="indicator-meta">
            <div><strong>Latest:</strong> ${escapeHtml(item.latest_date || 'n/a')}</div>
            <div><strong>Cadence:</strong> ${escapeHtml(item.cadence || 'n/a')}</div>
            <div><strong>Threshold:</strong> ${escapeHtml(item.thresholds || 'n/a')}</div>
            <div><strong>Source:</strong> ${escapeHtml(componentText || item.source || 'n/a')}</div>
          </div>
          <div class="action-callout"><strong>Alarm action:</strong> ${escapeHtml(item.action || 'No action configured.')}</div>
        </article>
      `;
    }).join('');
  }

  function pathForPoints(points, xForDate, yForValue) {
    return points.map((point, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${command}${xForDate(point.date).toFixed(1)},${yForValue(point.value).toFixed(1)}`;
    }).join(' ');
  }

  function finiteBandValues(bands) {
    return (bands || []).flatMap((band) => [band.from, band.to])
      .filter((value) => value !== null && value !== undefined && Number.isFinite(Number(value)))
      .map(Number);
  }

  function renderHistoryBands(bands, yTop, yBottom, xLeft, xRight, yForValue) {
    return (bands || []).map((band) => {
      const from = band.from === null || band.from === undefined ? null : Number(band.from);
      const to = band.to === null || band.to === undefined ? null : Number(band.to);
      const upperY = to === null ? yTop : yForValue(to);
      const lowerY = from === null ? yBottom : yForValue(from);
      const rectY = Math.min(upperY, lowerY);
      const rectH = Math.abs(lowerY - upperY);
      if (!Number.isFinite(rectY) || !Number.isFinite(rectH) || rectH < 1) return '';
      return `<g>
        <rect x="${xLeft}" y="${rectY.toFixed(1)}" width="${(xRight - xLeft).toFixed(1)}" height="${rectH.toFixed(1)}" class="history-band ${statusClass(band.status)}" />
        <text x="${(xRight - 8).toFixed(1)}" y="${(rectY + 12).toFixed(1)}" text-anchor="end" class="history-band-label">${escapeHtml(band.label)}</text>
      </g>`;
    }).join('');
  }

  function renderHistory() {
    const history = data.history || {};
    const series = history.series || [];
    nodes.historyWindow.textContent = history.start_date && history.end_date ? `${history.start_date} → ${history.end_date}` : 'n/a';
    if (!series.length) {
      nodes.historyPlot.innerHTML = '<div class="stack-item">No history available.</div>';
      return;
    }

    const width = 1180;
    const margin = { left: 156, right: 28, top: 18, bottom: 26 };
    const panelHeight = 104;
    const gap = 22;
    const xMin = margin.left;
    const xMax = width - margin.right;
    const height = margin.top + margin.bottom + (panelHeight * series.length) + (gap * (series.length - 1));

    const panels = series.map((item, index) => {
      const points = (item.points || []).filter((point) => point.value !== null && point.value !== undefined && Number.isFinite(Number(point.value)));
      const pointDates = points.map((point) => new Date(`${point.date}T00:00:00Z`).getTime()).filter(Number.isFinite);
      const minDate = Math.min(...pointDates);
      const maxDate = Math.max(...pointDates);
      const xForDate = (date) => {
        const time = new Date(`${date}T00:00:00Z`).getTime();
        if (!Number.isFinite(time) || !Number.isFinite(minDate) || !Number.isFinite(maxDate) || minDate === maxDate) return xMin;
        return xMin + ((time - minDate) / (maxDate - minDate)) * (xMax - xMin);
      };
      const yTop = margin.top + index * (panelHeight + gap);
      const yBottom = yTop + panelHeight;
      const values = points.map((point) => Number(point.value)).concat(finiteBandValues(item.bands));
      let minValue = Math.min(...values);
      let maxValue = Math.max(...values);
      if (!Number.isFinite(minValue) || !Number.isFinite(maxValue)) {
        minValue = 0;
        maxValue = 1;
      }
      if (minValue === maxValue) {
        minValue -= 0.5;
        maxValue += 0.5;
      }
      const padding = (maxValue - minValue) * 0.12;
      minValue -= padding;
      maxValue += padding;
      const yForValue = (value) => yBottom - ((Number(value) - minValue) / (maxValue - minValue)) * panelHeight;
      const latest = points[points.length - 1];
      return `<g>
        ${renderHistoryBands(item.bands, yTop, yBottom, margin.left, xMax, yForValue)}
        <line x1="${margin.left}" x2="${xMax}" y1="${yBottom.toFixed(1)}" y2="${yBottom.toFixed(1)}" class="history-axis" />
        <line x1="${margin.left}" x2="${xMax}" y1="${(yTop + panelHeight / 2).toFixed(1)}" y2="${(yTop + panelHeight / 2).toFixed(1)}" class="history-gridline" />
        <text x="18" y="${(yTop + 18).toFixed(1)}" class="history-title">${escapeHtml(item.label)}</text>
        <text x="18" y="${(yTop + 40).toFixed(1)}" class="history-latest ${statusClass(latest?.status)}">${escapeHtml(latest ? latest.value.toFixed(item.unit === 'pp' ? 2 : 2) : 'n/a')}${item.unit === 'pp' ? ' pp' : item.unit}</text>
        <text x="18" y="${(yBottom - 8).toFixed(1)}" class="history-range">${escapeHtml(points[0]?.date || '')} → ${escapeHtml(latest?.date || '')}</text>
        <path d="${pathForPoints(points, xForDate, yForValue)}" fill="none" stroke="${escapeHtml(item.color || '#60a5fa')}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        ${latest ? `<circle cx="${xForDate(latest.date).toFixed(1)}" cy="${yForValue(latest.value).toFixed(1)}" r="4" class="history-dot ${statusClass(latest.status)}" />` : ''}
      </g>`;
    }).join('');

    nodes.historyPlot.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="history-svg" aria-hidden="true">
      <rect x="0" y="0" width="${width}" height="${height}" rx="18" class="history-bg" />
      ${panels}
      <text x="${margin.left}" y="${height - 6}" class="history-date">${escapeHtml(history.start_date || '')}</text>
      <text x="${xMax}" y="${height - 6}" text-anchor="end" class="history-date">${escapeHtml(history.end_date || '')}</text>
    </svg>`;
  }

  function renderList(target, items) {
    target.innerHTML = (items || []).map((item) => `<div class="stack-item">${escapeHtml(item)}</div>`).join('');
  }

  renderHero();
  renderSources();
  renderRegimes();
  renderIndicators();
  renderHistory();
  renderList(nodes.thresholdPolicy, data.threshold_policy || []);
  renderList(nodes.notesList, data.notes || []);
})();
