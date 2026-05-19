(function () {
  const data = globalThis.SOVEREIGN_YIELD_DASHBOARD_DATA || {};

  const el = (id) => document.getElementById(id);
  const nodes = {
    generatedAt: el('generatedAt'),
    heroGrid: el('heroGrid'),
    compositeBand: el('compositeBand'),
    compositeMeter: el('compositeMeter'),
    scenarioGrid: el('scenarioGrid'),
    compositeDrivers: el('compositeDrivers'),
    compositeInterpretation: el('compositeInterpretation'),
    compositeExpectation: el('compositeExpectation'),
    compositeBias: el('compositeBias'),
    compositeWarning: el('compositeWarning'),
    compositeDisclaimer: el('compositeDisclaimer'),
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
  const historyStrokeForStatus = (status, fallbackColor) => ({
    ok: '#22c55e',
    watch: '#f59e0b',
    alarm: '#ef4444',
    stale: '#94a3b8',
    missing: '#94a3b8',
  }[status] || fallbackColor || '#60a5fa');

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

  function polarPoint(cx, cy, radius, degrees) {
    const radians = (degrees - 90) * (Math.PI / 180);
    return {
      x: cx + (Math.cos(radians) * radius),
      y: cy + (Math.sin(radians) * radius),
    };
  }

  function describeArc(cx, cy, radius, startAngle, endAngle) {
    const start = polarPoint(cx, cy, radius, endAngle);
    const end = polarPoint(cx, cy, radius, startAngle);
    const largeArcFlag = Math.abs(endAngle - startAngle) <= 180 ? '0' : '1';
    return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
  }

  function valueToAngle(value) {
    const clamped = Math.max(1, Math.min(100, Number(value) || 1));
    return -120 + (((clamped - 1) / 99) * 240);
  }

  function renderComposite() {
    const composite = data.composite_regime || {};
    const score = Math.max(1, Math.min(100, Number(composite.score || 1)));
    const status = composite.status || 'missing';
    const gaugeAngle = valueToAngle(score);
    const needleStart = polarPoint(160, 160, 24, gaugeAngle);
    const needle = polarPoint(160, 160, 92, gaugeAngle);
    const bandColor = historyStrokeForStatus(status, '#60a5fa');
    const scenarios = composite.scenario_odds || [];
    const biasItems = composite.investment_bias || [];
    const bandSegments = [
      { start: 1, end: 24, className: 'meter-band-safe' },
      { start: 25, end: 44, className: 'meter-band-building' },
      { start: 45, end: 64, className: 'meter-band-nonbenign' },
      { start: 65, end: 84, className: 'meter-band-stress' },
      { start: 85, end: 100, className: 'meter-band-bigprint' },
    ];
    const tickValues = [1, 25, 45, 65, 85, 100];

    const segmentPaths = bandSegments.map((segment) => {
      const startAngle = valueToAngle(segment.start);
      const endAngle = valueToAngle(segment.end);
      return `<path d="${describeArc(160, 160, 112, startAngle, endAngle)}" class="meter-arc ${segment.className}" />`;
    }).join('');

    const tickMarks = tickValues.map((value) => {
      const angle = valueToAngle(value);
      const outer = polarPoint(160, 160, 126, angle);
      const inner = polarPoint(160, 160, 114, angle);
      const textPoint = polarPoint(160, 160, value === 1 || value === 100 ? 136 : 138, angle);
      const anchor = value === 1 ? 'start' : value === 100 ? 'end' : 'middle';
      return `
        <line x1="${outer.x.toFixed(1)}" y1="${outer.y.toFixed(1)}" x2="${inner.x.toFixed(1)}" y2="${inner.y.toFixed(1)}" class="meter-tick-line" />
        <text x="${textPoint.x.toFixed(1)}" y="${(textPoint.y + 4).toFixed(1)}" text-anchor="${anchor}">${value}</text>
      `;
    }).join('');

    const scoreMarker = polarPoint(160, 160, 112, gaugeAngle);

    nodes.compositeBand.textContent = `${composite.band_label || 'n/a'} · ${score}/100`;
    nodes.compositeBand.className = `badge mono ${statusClass(status)}`;
    nodes.compositeMeter.innerHTML = `
      <svg viewBox="0 0 320 220" class="composite-meter-svg" aria-hidden="true">
        <path d="${describeArc(160, 160, 86, -120, 120)}" class="meter-arc meter-track" />
        ${segmentPaths}
        <g class="meter-ticks">${tickMarks}</g>
        <circle cx="${scoreMarker.x.toFixed(1)}" cy="${scoreMarker.y.toFixed(1)}" r="7" class="meter-score-marker" style="fill:${escapeHtml(bandColor)}" />
        <line x1="${needleStart.x.toFixed(1)}" y1="${needleStart.y.toFixed(1)}" x2="${needle.x.toFixed(1)}" y2="${needle.y.toFixed(1)}" class="meter-needle" style="stroke:${escapeHtml(bandColor)}" />
        <circle cx="160" cy="160" r="10" class="meter-hub" />
        <rect x="118" y="136" width="84" height="40" rx="20" class="meter-score-chip" style="stroke:${escapeHtml(bandColor)}" />
        <text x="160" y="163" text-anchor="middle" class="meter-score">${score}</text>
      </svg>`;

    nodes.scenarioGrid.innerHTML = scenarios.map((item) => `
      <article class="scenario-card">
        <div class="label">${escapeHtml(item.label)}</div>
        <div class="scenario-value">${escapeHtml(item.value)}%</div>
      </article>
    `).join('');
    nodes.compositeDrivers.innerHTML = (composite.drivers || []).map((item) => `<div class="stack-item compact">${escapeHtml(item)}</div>`).join('');
    nodes.compositeInterpretation.textContent = composite.interpretation || 'n/a';
    nodes.compositeExpectation.textContent = composite.expectation || 'n/a';
    nodes.compositeBias.innerHTML = `<ul class="bias-list">${biasItems.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
    nodes.compositeWarning.textContent = composite.warning || '';
    nodes.compositeDisclaimer.textContent = composite.disclaimer || 'Composite dashboard inference only.';
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
      const lineColor = historyStrokeForStatus(latest?.status || item.latest_status, item.color);
      return `<g>
        ${renderHistoryBands(item.bands, yTop, yBottom, margin.left, xMax, yForValue)}
        <line x1="${margin.left}" x2="${xMax}" y1="${yBottom.toFixed(1)}" y2="${yBottom.toFixed(1)}" class="history-axis" />
        <line x1="${margin.left}" x2="${xMax}" y1="${(yTop + panelHeight / 2).toFixed(1)}" y2="${(yTop + panelHeight / 2).toFixed(1)}" class="history-gridline" />
        <text x="18" y="${(yTop + 18).toFixed(1)}" class="history-title">${escapeHtml(item.label)}</text>
        <text x="18" y="${(yTop + 40).toFixed(1)}" class="history-latest ${statusClass(latest?.status)}">${escapeHtml(latest ? latest.value.toFixed(item.unit === 'pp' ? 2 : 2) : 'n/a')}${item.unit === 'pp' ? ' pp' : item.unit}</text>
        <text x="18" y="${(yBottom - 8).toFixed(1)}" class="history-range">${escapeHtml(points[0]?.date || '')} → ${escapeHtml(latest?.date || '')}</text>
        <path d="${pathForPoints(points, xForDate, yForValue)}" fill="none" stroke="${escapeHtml(lineColor)}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
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
  renderComposite();
  renderSources();
  renderRegimes();
  renderIndicators();
  renderHistory();
  renderList(nodes.thresholdPolicy, data.threshold_policy || []);
  renderList(nodes.notesList, data.notes || []);
})();
