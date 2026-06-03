const TODAY = new Date("2026-06-02T00:00:00");

const tasks = [
  { id: "IT-001", title: "MEJORAS DE MODULO CLIENTE", area: "Operaciones", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-01-15", end: "2026-02-15", actual: "2026-04-01", notes: "FALTA PUBLICAR A LOS CLIENTES" },
  { id: "IT-002", title: "PROVICION DOCUMENTO NO DOMICILADOS", area: "Contabilidad", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Media", status: "Completado", start: "2026-02-09", end: "2026-04-15", actual: "2026-04-15", notes: "PENDIENTE DE REU CON CONTABILIDAD" },
  { id: "IT-003", title: "MODULO NOTAS CONTABLES", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-02-15", end: "2026-03-30", actual: "2026-06-01", notes: "" },
  { id: "IT-004", title: "BOT CONCILACIONES", area: "Contabilidad", owner: "FATIMA VILLAJULCA", category: "Automatizacion", priority: "Media", status: "Demorado", start: "2026-03-02", end: "2026-04-30", actual: "", notes: "PENDIENTE REU CON SERGIO" },
  { id: "IT-005", title: "IMPLEMENTACION DE WHATSAPP - VUCE", area: "SMARTBOTS", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Alta", status: "Completado", start: "2026-03-09", end: "2026-04-27", actual: "2026-04-24", notes: "" },
  { id: "IT-006", title: "AUTOMATIZACION DE IE", area: "Operaciones", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-03-19", end: "2026-08-31", actual: "", notes: "" },
  { id: "IT-007", title: "AUTOMATIZACION DE ORDEN DE DESPACHO", area: "Operaciones", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-03-19", end: "2026-08-31", actual: "", notes: "" },
  { id: "IT-008", title: "BOT FACTURACION VENTAS CALLAO", area: "Contabilidad", owner: "FATIMA VILLAJULCA", category: "Automatizacion", priority: "Media", status: "En Proceso", start: "2026-04-01", end: "2026-06-15", actual: "", notes: "" },
  { id: "IT-009", title: "MIGRACION DE SERVIDOR - PAWA", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "Demorado", start: "2026-04-01", end: "2026-04-30", actual: "", notes: "" },
  { id: "IT-010", title: "DOCUMENTACION GESTOR DOCUMENTAL", area: "SMARTBOTS", owner: "GABRIEL ESCARATE", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-04-20", end: "2026-06-15", actual: "", notes: "" },
  { id: "IT-011", title: "AUTOMATIZACION DE CUMPLEANOS DEL MES", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-05-04", end: "2026-06-02", actual: "2026-06-02", notes: "" },
  { id: "IT-012", title: "MODULO DE GENERACION DE CONTRATO", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-05-11", end: "2026-06-27", actual: "", notes: "" },
  { id: "IT-013", title: "DASHBOARD KPI REGULARIZACION", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Media", status: "Completado", start: "2026-05-18", end: "2026-05-28", actual: "2026-06-02", notes: "" },
  { id: "IT-014", title: "IMPLEMENTACION DE VPN", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-05-23", end: "2026-06-13", actual: "", notes: "" },
  { id: "IT-015", title: "ADAPTAR RRHH A MULTIEMPRESAS", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Media", status: "En Proceso", start: "2026-05-25", end: "2026-07-31", actual: "", notes: "" },
  { id: "IT-016", title: "REGISTRO DE MULTA PENDIENTE DE RESPONSABLES", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-05-25", end: "2026-07-31", actual: "", notes: "" },
  { id: "IT-017", title: "CORRECCION TARIFARIO ITURRI APP", area: "Finanzas", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Baja", status: "En Proceso", start: "2026-06-01", end: "2026-06-30", actual: "", notes: "" },
  { id: "IT-018", title: "REGISTRO DE CORRECCION BL POST EMBARQUE", area: "Matricez", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-01", end: "2026-06-12", actual: "", notes: "" },
  { id: "IT-019", title: "RENOVACION DE STATUS DOCUMENTARIO", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Baja", status: "En Proceso", start: "2026-06-01", end: "2026-06-30", actual: "", notes: "PENDIENTE DE FORMATO POR C.A" },
  { id: "IT-020", title: "MODIFICACION DE TEXTO CORREO REGULARIZACION", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-01", end: "2026-06-03", actual: "", notes: "" },
  { id: "IT-021", title: "REPORTE DE ORDENES PROCESADAS", area: "SMARTBOTS", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-01", end: "2026-06-08", actual: "", notes: "" },
  { id: "IT-022", title: "ACTUALIZACION DOCUMENTACION VUCE", area: "SMARTBOTS", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Media", status: "En Proceso", start: "2026-06-02", end: "2026-06-08", actual: "", notes: "" },
  { id: "IT-023", title: "MODO DE SOLICITUD DE PAGOS", area: "Importacion", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-02", end: "2026-09-15", actual: "", notes: "" },
  { id: "IT-024", title: "CREAR KPI DE IMPORTACIONES", area: "Importacion", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Baja", status: "En Proceso", start: "2026-06-02", end: "2026-09-15", actual: "", notes: "" },
  { id: "IT-025", title: "MODIFICACION DE PROCEDIMIENTO SISTEMAS - SIG", area: "SIG", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-06-02", end: "2026-06-12", actual: "", notes: "" },
  { id: "IT-026", title: "UPGRADE SERVIDORES - CLARO/PAWA", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-06-02", end: "2026-06-08", actual: "", notes: "" }
];

const colors = {
  "Completado": "#2f9e44",
  "En Proceso": "#0f8b8d",
  "Demorado": "#d1495b",
  "Alta": "#d1495b",
  "Media": "#f0a202",
  "Baja": "#0f8b8d"
};

let sortState = { key: "delayDays", direction: "desc" };

const parseDate = (value) => value ? new Date(`${value}T00:00:00`) : null;
const dayMs = 24 * 60 * 60 * 1000;
const diffDays = (a, b) => Math.round((a - b) / dayMs);
const fmtDate = (value) => value ? parseDate(value).toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" }) : "-";
const pct = (value) => `${Math.round(value)}%`;

function enrich(task) {
  const start = parseDate(task.start);
  const end = parseDate(task.end);
  const actual = parseDate(task.actual);
  const duration = Math.max(1, diffDays(end, start));
  const elapsed = Math.max(0, diffDays(TODAY, start));
  const scheduleProgress = Math.min(95, Math.max(5, (elapsed / duration) * 100));
  const progress = task.status === "Completado" ? 100 : scheduleProgress;
  const delayDays = task.status === "Completado"
    ? Math.max(0, diffDays(actual, end))
    : Math.max(0, diffDays(TODAY, end));
  const daysToDue = diffDays(end, TODAY);
  const risk = task.status === "Demorado" || delayDays > 0 ? "Alto" : daysToDue <= 7 ? "Medio" : "Normal";
  const active = task.status !== "Completado";

  return { ...task, startDate: start, endDate: end, actualDate: actual, duration, progress, delayDays, daysToDue, risk, active };
}

const dataset = tasks.map(enrich);

function countBy(items, key) {
  return items.reduce((acc, item) => {
    const value = typeof key === "function" ? key(item) : item[key];
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function sum(items, fn) {
  return items.reduce((total, item) => total + fn(item), 0);
}

function uniqueValues(key) {
  return [...new Set(dataset.map((item) => item[key]))].sort((a, b) => a.localeCompare(b));
}

function initDashboard() {
  document.querySelectorAll("th[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      sortState = {
        key,
        direction: sortState.key === key && sortState.direction === "asc" ? "desc" : "asc"
      };
      render();
    });
  });
}

function getFiltered() {
  return dataset;
}

function render() {
  const filtered = getFiltered();
  renderKpis(filtered);
  renderSummary(filtered);
  renderDonut(filtered);
  renderBars("ownerChart", countBy(filtered.filter((t) => t.active), "owner"), filtered.filter((t) => t.active).length, true);
  renderBars("areaChart", countBy(filtered, "area"), filtered.length, false);
  renderPriority(filtered);
  renderTimeline(filtered);
  renderTable(filtered);
}

function renderKpis(items) {
  const active = items.filter((t) => t.active);
  const completed = items.filter((t) => t.status === "Completado");
  const delayed = items.filter((t) => t.delayDays > 0 && t.status !== "Completado");
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7);
  const highPriority = active.filter((t) => t.priority === "Alta");
  const avgProgress = items.length ? sum(items, (t) => t.progress) / items.length : 0;
  const completionRate = items.length ? (completed.length / items.length) * 100 : 0;

  const cards = [
    { label: "Tareas activas", value: active.length, note: `${items.length} tareas reales en cartera`, accent: "#0f8b8d", primary: true },
    { label: "Completadas", value: completed.length, note: `${pct(completionRate)} de cierre`, accent: "#2f9e44" },
    { label: "En demora", value: delayed.length, note: `${sum(delayed, (t) => t.delayDays)} dias acumulados`, accent: "#d1495b" },
    { label: "Vencen <= 7 dias", value: dueSoon.length, note: "Requieren seguimiento", accent: "#f0a202" },
    { label: "Alta prioridad activa", value: highPriority.length, note: "Foco de gerencia", accent: "#b5654d" },
    { label: "Avance estimado", value: pct(avgProgress), note: "Derivado por estado y fechas", accent: "#6c5ce7" }
  ];

  document.getElementById("kpiGrid").innerHTML = cards.map((card) => `
    <article class="kpi-card ${card.primary ? "kpi-primary" : ""}" style="--accent:${card.accent}">
      <div class="kpi-label">${card.label}</div>
      <div class="kpi-value">${card.value}</div>
      <div class="kpi-note">${card.note}</div>
    </article>
  `).join("");
}

function renderSummary(items) {
  const active = items.filter((t) => t.active);
  const delayed = active.filter((t) => t.delayDays > 0).sort((a, b) => b.delayDays - a.delayDays);
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7).sort((a, b) => a.daysToDue - b.daysToDue);
  const ownerLoad = Object.entries(countBy(active, "owner")).sort((a, b) => b[1] - a[1]);
  const topOwner = ownerLoad[0] || ["Sin responsable", 0];
  const completed = items.filter((t) => t.status === "Completado");
  const closureRate = items.length ? (completed.length / items.length) * 100 : 0;
  const avgDelay = delayed.length ? sum(delayed, (t) => t.delayDays) / delayed.length : 0;

  document.getElementById("summaryHighlights").innerHTML = [
    { value: active.length, label: "tareas activas", accent: colors["En Proceso"] },
    { value: delayed.length, label: `fuera de plazo (${Math.round(avgDelay)} dias prom.)`, accent: colors.Demorado },
    { value: pct(closureRate), label: "avance de cierre", accent: colors.Completado }
  ].map((item) => `
    <div class="summary-chip" style="--accent:${item.accent}">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join("");

  document.getElementById("summaryInsight").textContent =
    `Prioridad gerencial: destrabar ${delayed.length} tareas demoradas y asegurar las ${dueSoon.length} entregas con vencimiento cercano. ` +
    `La mayor carga se concentra en ${topOwner[0]} (${topOwner[1]} tareas activas), por lo que conviene revisar capacidad y reasignaciones antes de sumar nuevos requerimientos.`;

  const alerts = [
    ...delayed.slice(0, 3).map((task) => ({ task, label: `${task.delayDays} dias`, accent: colors.Demorado })),
    ...dueSoon.slice(0, 3).map((task) => ({ task, label: task.daysToDue === 0 ? "vence hoy" : `${task.daysToDue} dias`, accent: colors.Media }))
  ].slice(0, 5);

  document.getElementById("alertsList").innerHTML = alerts.length ? alerts.map(({ task, label, accent }) => `
    <div class="alert" style="--accent:${accent}">
      <div>
        <strong>${task.title}</strong>
        <span>${task.owner} · ${task.area}</span>
      </div>
      <b>${label}</b>
    </div>
  `).join("") : `<div class="empty-state">No hay tareas atrasadas ni proximas a vencer.</div>`;
}

function renderDonut(items) {
  const counts = countBy(items, "status");
  const total = Math.max(1, items.length);
  let cursor = 0;
  const segments = Object.entries(counts).map(([status, value]) => {
    const start = cursor;
    cursor += (value / total) * 100;
    return `${colors[status] || "#6f6b64"} ${start}% ${cursor}%`;
  });

  document.getElementById("statusDonut").style.background = `conic-gradient(${segments.join(", ") || "#ece7de 0 100%"})`;
  document.getElementById("statusLegend").innerHTML = Object.entries(counts).map(([status, value]) => `
    <div class="legend-item">
      <div class="legend-line"><span><i class="dot" style="--accent:${colors[status]}"></i>${status}</span><strong>${value}</strong></div>
      <div class="track"><div class="fill" style="--accent:${colors[status]}; width:${(value / total) * 100}%"></div></div>
    </div>
  `).join("");
}

function renderBars(targetId, counts, total, weighted) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...entries.map(([, value]) => value));

  document.getElementById(targetId).innerHTML = entries.length ? entries.map(([label, value], index) => {
    const accent = ["#0f8b8d", "#d1495b", "#f0a202", "#6c5ce7", "#b5654d"][index % 5];
    const share = total ? (value / total) * 100 : 0;
    return `
      <div class="bar-row">
        <div class="bar-line"><span>${label}</span><strong>${value}${weighted ? " activas" : ""}</strong></div>
        <div class="track"><div class="fill" style="--accent:${accent}; width:${(value / max) * 100}%"></div></div>
        <span class="muted">${pct(share)} ${weighted ? "del total activo" : "del total"}</span>
      </div>
    `;
  }).join("") : `<div class="empty-state">Sin datos para mostrar.</div>`;
}

function renderPriority(items) {
  const counts = countBy(items.filter((t) => t.active), "priority");
  const total = Math.max(1, sum(Object.values(counts), (value) => value));
  const order = ["Alta", "Media", "Baja"];

  document.getElementById("priorityChart").innerHTML = `
    <div class="stacked-bar">
      ${order.map((priority) => `<div class="stacked-segment" style="--accent:${colors[priority]}; width:${((counts[priority] || 0) / total) * 100}%"></div>`).join("")}
    </div>
  `;

  document.getElementById("priorityList").innerHTML = order.map((priority) => {
    const value = counts[priority] || 0;
    return `
      <div class="compact-row">
        <div class="compact-line"><span><i class="dot" style="--accent:${colors[priority]}"></i>${priority}</span><strong>${value}</strong></div>
        <div class="track"><div class="fill" style="--accent:${colors[priority]}; width:${(value / total) * 100}%"></div></div>
      </div>
    `;
  }).join("");
}

function renderTimeline(items) {
  const sorted = [...items].sort((a, b) => a.endDate - b.endDate);
  const minStart = new Date(Math.min(...dataset.map((t) => t.startDate.getTime())));
  const maxEnd = new Date(Math.max(...dataset.map((t) => t.endDate.getTime())));
  const range = Math.max(1, diffDays(maxEnd, minStart));
  document.getElementById("timelineRange").textContent = `${fmtDate(minStart.toISOString().slice(0, 10))} - ${fmtDate(maxEnd.toISOString().slice(0, 10))}`;
  const months = getMonths(minStart, maxEnd);

  const axis = `
    <div class="timeline-axis">
      <span class="muted">Tarea / responsable</span>
      <div class="month-scale" style="grid-template-columns:${months.map((m) => `${m.width}fr`).join(" ")}">
        ${months.map((m) => `<span class="month-label">${m.label}</span>`).join("")}
      </div>
      <span class="muted">Riesgo</span>
    </div>
  `;

  const rows = sorted.length ? sorted.map((task) => {
    const left = Math.max(0, (diffDays(task.startDate, minStart) / range) * 100);
    const width = Math.max(2, (task.duration / range) * 100);
    const accent = task.delayDays > 0 && task.active ? colors.Demorado : colors[task.status];
    return `
      <div class="timeline-row">
        <div class="timeline-label">
          <strong title="${task.title}">${task.title}</strong>
          <span>${task.owner} · ${fmtDate(task.end)}</span>
        </div>
        <div class="timeline-track">
          <div class="timeline-bar" style="--accent:${accent}; left:${left}%; width:${width}%">
            <div class="timeline-progress" style="width:${task.progress}%"></div>
          </div>
        </div>
        <span class="status-pill" style="--accent:${accent}">${task.risk}</span>
      </div>
    `;
  }).join("") : `<div class="empty-state">Sin tareas en la seleccion actual.</div>`;

  document.getElementById("timeline").innerHTML = axis + rows;
}

function getMonths(minStart, maxEnd) {
  const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  const months = [];
  const cursor = new Date(minStart.getFullYear(), minStart.getMonth(), 1);

  while (cursor <= maxEnd) {
    const next = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1);
    const segmentStart = cursor < minStart ? minStart : cursor;
    const segmentEnd = next > maxEnd ? maxEnd : next;
    months.push({
      label: labels[cursor.getMonth()],
      width: Math.max(1, diffDays(segmentEnd, segmentStart))
    });
    cursor.setMonth(cursor.getMonth() + 1);
  }

  return months;
}

function renderTable(items) {
  const sorted = [...items].sort((a, b) => {
    const key = sortState.key;
    const av = a[key] instanceof Date ? a[key].getTime() : a[key];
    const bv = b[key] instanceof Date ? b[key].getTime() : b[key];
    const result = typeof av === "number" && typeof bv === "number"
      ? av - bv
      : String(av).localeCompare(String(bv));
    return sortState.direction === "asc" ? result : -result;
  });

  document.getElementById("tableCount").textContent = `${sorted.length} registros`;
  document.getElementById("taskTable").innerHTML = sorted.length ? sorted.map((task) => {
    const accent = task.delayDays > 0 && task.active ? colors.Demorado : colors[task.status];
    return `
      <tr>
        <td class="task-title">${task.title}<br><span class="muted">${task.category}${task.notes ? ` · ${task.notes}` : ""}</span></td>
        <td>${task.area}</td>
        <td>${task.owner}</td>
        <td><span class="status-pill" style="--accent:${accent}">${task.status}</span></td>
        <td>${task.priority}</td>
        <td>${fmtDate(task.end)}</td>
        <td><strong>${task.delayDays}</strong></td>
        <td>
          <div class="mini-progress">
            <div class="track"><div class="fill" style="--accent:${accent}; width:${task.progress}%"></div></div>
            <span>${pct(task.progress)}</span>
          </div>
        </td>
      </tr>
    `;
  }).join("") : `<tr><td colspan="8" class="empty-state">No hay registros para mostrar.</td></tr>`;
}

initDashboard();
render();

document.getElementById("printButton")?.addEventListener("click", () => {
  window.print();
});
