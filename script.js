const TODAY = new Date("2026-06-16T00:00:00");

const tasks = [
  { id: "IT-001", featured: false, title: "MEJORAS DE MODULO CLIENTE", area: "Operaciones", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-01-15", end: "2026-02-15", actual: "2026-04-01", notes: "FALTA PUBLICAR A LOS CLIENTES" },
  { id: "IT-002", featured: true, title: "PROVICION DOCUMENTO NO DOMICILADOS", area: "Contabilidad", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Media", status: "Completado", start: "2026-02-09", end: "2026-04-15", actual: "2026-04-15", notes: "PENDIENTE DE REU CON CONTABILIDAD" },
  { id: "IT-003", featured: true, title: "MODULO NOTAS CONTABLES", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-02-15", end: "2026-03-30", actual: "2026-06-01", notes: "" },
  { id: "IT-004", featured: false, title: "BOT CONCILACIONES", area: "Contabilidad", owner: "FATIMA VILLAJULCA", category: "Automatizacion", priority: "Media", status: "Cancelado", start: "2026-03-02", end: "2026-04-30", actual: "", progressOverride: 10, notes: "PENDIENTE REU CON SERGIO" },
  { id: "IT-005", featured: false, title: "IMPLEMENTACION DE WHATSAPP - VUCE", area: "SMARTBOTS", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Alta", status: "Completado", start: "2026-03-09", end: "2026-04-27", actual: "2026-04-24", notes: "" },
  { id: "IT-006", featured: true, title: "AUTOMATIZACION DE IE", area: "Operaciones", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-03-19", end: "2026-08-31", actual: "", progressOverride: 15, notes: "CREANDO ANALISIS DE CORREOS" },
  { id: "IT-007", featured: false, title: "AUTOMATIZACION DE ORDEN DE DESPACHO", area: "Operaciones", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "Pendiente", start: "2026-03-19", end: "2026-08-31", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-008", featured: true, title: "BOT FACTURACION VENTAS CALLAO", area: "Contabilidad", owner: "FATIMA VILLAJULCA", category: "Automatizacion", priority: "Media", status: "Completado", start: "2026-04-01", end: "2026-06-15", actual: "2026-06-09", notes: "" },
  { id: "IT-009", featured: true, title: "MIGRACION DE SERVIDOR - PAWA", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-07-18", end: "2026-07-15", actual: "", progressOverride: 25, notes: "" },
  { id: "IT-010", featured: true, title: "DOCUMENTACION GESTOR DOCUMENTAL", area: "SMARTBOTS", owner: "GABRIEL ESCARATE", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-04-20", end: "2026-06-30", actual: "", progressOverride: 50, notes: "" },
  { id: "IT-011", featured: false, title: "AUTOMATIZACION DE CUMPLEANOS DEL MES", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-05-04", end: "2026-06-02", actual: "2026-06-02", notes: "" },
  { id: "IT-012", featured: false, title: "MODULO DE GENERACION DE CONTRATO", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-05-11", end: "2026-06-27", actual: "2026-06-19", progressOverride: 100, notes: "" },
  { id: "IT-013", featured: true, title: "DASHBOARD KPI REGULARIZACION", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Media", status: "Completado", start: "2026-05-18", end: "2026-05-28", actual: "2026-06-02", notes: "" },
  { id: "IT-014", featured: true, title: "IMPLEMENTACION DE VPN", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "Completado", start: "2026-05-23", end: "2026-06-19", actual: "2026-06-15", progressOverride: 100, notes: "" },
  { id: "IT-015", featured: false, title: "ADAPTAR RRHH A MULTIEMPRESAS", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Media", status: "Completado", start: "2026-05-25", end: "2026-07-31", actual: "2026-07-06", progressOverride: 100, notes: "" },
  { id: "IT-016", featured: true, title: "REGISTRO DE MULTA PENDIENTE DE RESPONSABLES", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-05-25", end: "2026-07-31", actual: "", progressOverride: 50, notes: "" },
  { id: "IT-017", featured: false, title: "CORRECCION TARIFARIO ITURRI APP", area: "Finanzas", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Baja", status: "En Proceso", start: "2026-06-01", end: "2026-06-30", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-018", featured: true, title: "REGISTRO DE CORRECCION BL POST EMBARQUE", area: "Matricez", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-06-01", end: "2026-06-12", actual: "2026-06-11", progressOverride: 100, notes: "" },
  { id: "IT-019", featured: false, title: "RENOVACION DE STATUS DOCUMENTARIO", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Baja", status: "En Proceso", start: "2026-06-01", end: "2026-06-30", actual: "", progressOverride: 40, notes: "" },
  { id: "IT-020", featured: false, title: "MODIFICACION DE TEXTO CORREO REGULARIZACION", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-06-01", end: "2026-06-03", actual: "2026-06-03", progressOverride: 100, notes: "" },
  { id: "IT-021", featured: false, title: "REPORTE DE ORDENES PROCESADAS", area: "SMARTBOTS", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-06-01", end: "2026-06-08", actual: "2026-06-12", progressOverride: 100, notes: "" },
  { id: "IT-022", featured: true, title: "NUMERACIONES MARITIMAS", area: "Liquidacion Pre", owner: "GABRIEL ESCARATE", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-06-01", end: "2026-09-30", actual: "", progressOverride: 15, notes: "" },
  { id: "IT-023", featured: false, title: "ACTUALIZACION DOCUMENTACION VUCE", area: "SMARTBOTS", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Media", status: "Completado", start: "2026-06-02", end: "2026-06-08", actual: "2026-06-10", progressOverride: 100, notes: "" },
  { id: "IT-024", featured: false, title: "MODO DE SOLICITUD DE PAGOS", area: "Importacion", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-02", end: "2026-09-15", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-025", featured: false, title: "CREAR KPI DE IMPORTACIONES", area: "Importacion", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Baja", status: "En Proceso", start: "2026-06-02", end: "2026-09-15", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-026", featured: true, title: "MODIFICACION DE PROCEDIMIENTO SISTEMAS - SIG", area: "SIG", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "Completado", start: "2026-06-02", end: "2026-06-12", actual: "2026-06-16", progressOverride: 100, notes: "" },
  { id: "IT-027", featured: true, title: "UPGRADE SERVIDORES. - CLARO/PAWA", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "Completado", start: "2026-06-02", end: "2026-06-08", actual: "2026-06-09", progressOverride: 100, notes: "" },
  { id: "IT-028", featured: false, title: "MODIFICACION DE CORREO DAM REGULARIZADA", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Media", status: "Completado", start: "2026-06-12", end: "2026-06-15", actual: "2026-06-02", progressOverride: 100, notes: "" },
  { id: "IT-029", featured: false, title: "ANADIR TARJETA DE DESPACHOS AEREOS VISOR", area: "Clientes", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Baja", status: "Completado", start: "2026-06-11", end: "2026-06-17", actual: "2026-06-12", progressOverride: 100, notes: "" },
  { id: "IT-030", featured: true, title: "MEJORAS DE REGISTRO DE CLIENTES", area: "Clientes", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Media", status: "En Proceso", start: "2026-06-12", end: "2026-06-19", actual: "", progressOverride: 30, notes: "" },
  { id: "IT-031", featured: true, title: "MODULO DE SOLICITUDES DE PERMISOS", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Media", status: "En Proceso", start: "2026-06-18", end: "2026-06-26", actual: "", progressOverride: 80, notes: "" },
  { id: "IT-032", featured: true, title: "CREACION DE CORREO DE ONBOARDING TRABJADOR NUEVO", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-12", end: "2026-06-19", actual: "", progressOverride: 30, notes: "" },
  { id: "IT-033", featured: false, title: "CORREO DE VENCIMIENTO DE CONTRATOS", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Media", status: "Completado", start: "2026-06-12", end: "2026-06-19", actual: "2026-06-15", progressOverride: 100, notes: "" },
  { id: "IT-034", featured: true, title: "ALERTA DE CONTENEDORES VS MANIFIESTO", area: "Operaciones", owner: "FATIMA VILLAJULCA", category: "Automatizacion", priority: "Media", status: "En Proceso", start: "2026-06-11", end: "2026-06-30", actual: "", progressOverride: 20, notes: "" },
  { id: "IT-035", featured: false, title: "MODIFICACION DE TRACKIN DE DAM", area: "Clientes", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Media", status: "En Proceso", start: "2026-06-12", end: "2026-06-30", actual: "", progressOverride: 40, notes: "" },
  { id: "IT-036", featured: true, title: "PRACTICANTE SMARBOTS", area: "SMARTBOTS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Media", status: "En Proceso", start: "2026-05-01", end: "2026-06-30", actual: "", progressOverride: 50, notes: "" },
  { id: "IT-037", featured: true, title: "WEB RRSS SMARTBOT", area: "SMARTBOTS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Media", status: "En Proceso", start: "2026-05-01", end: "2026-06-30", actual: "", progressOverride: 90, notes: "" },
  { id: "IT-038", featured: true, title: "GASTOS REEMBOLSABLES", area: "Contabilidad", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-05-27", end: "2026-06-27", actual: "", progressOverride: 80, notes: "" }
];

const managementTasks = [
  { id: 1, text: "Revisar y validar los CV de candidatos practicantes para Smartbots.", priority: "Urgente" },
  { id: 2, text: "Coordinar con Diego la entrega de credenciales de RRSS para continuar con la gestion comercial de Smartbots.", priority: "Urgente" },
  { id: 3, text: "Definir el flujo de compra de servicios que requieren pago con tarjeta de credito.", priority: "Urgente" },
  { id: 4, text: "Evaluar bono para el equipo de desarrollo por el seguimiento y soporte de bots.", priority: "Media" }
];

const colors = {
  "Completado": "#159f72",
  "En Proceso": "#0093d6",
  "Demorado": "#d1495b",
  "Pendiente": "#f0a202",
  "Cancelado": "#687482",
  "Alta": "#d1495b",
  "Media": "#f0a202",
  "Baja": "#005ca9"
};

const previousPortfolio = {
  cut: "2026-06-02",
  total: 27,
  active: 21,
  completed: 6,
  delayed: 2,
  dueSoon: 4,
  progress: 47
};

let sortState = { key: "delayDays", direction: "desc" };

const parseDate = (value) => value ? new Date(`${value}T00:00:00`) : null;
const dayMs = 24 * 60 * 60 * 1000;
const diffDays = (a, b) => Math.round((a - b) / dayMs);
const fmtDate = (value) => value ? parseDate(value).toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit", year: "numeric" }) : "-";
const fmtShortDate = (value) => value ? parseDate(value).toLocaleDateString("es-PE", { day: "2-digit", month: "2-digit" }) : "-";
const pct = (value) => `${Math.round(value)}%`;

function enrich(task) {
  const start = parseDate(task.start);
  const end = parseDate(task.end);
  const actual = parseDate(task.actual);
  const duration = Math.max(1, diffDays(end, start));
  const elapsed = Math.max(0, diffDays(TODAY, start));
  const scheduleProgress = Math.min(95, Math.max(5, (elapsed / duration) * 100));
  const inactive = task.status === "Completado" || task.status === "Cancelado";
  const hasProgressOverride = typeof task.progressOverride === "number";
  const progress = task.status === "Completado" ? 100 : hasProgressOverride ? task.progressOverride : scheduleProgress;
  const delayDays = inactive
    ? Math.max(0, diffDays(actual, end))
    : Math.max(0, diffDays(TODAY, end));
  const daysToDue = diffDays(end, TODAY);
  const risk = task.status === "Cancelado" ? "Cerrado" : task.status === "Demorado" || delayDays > 0 ? "Alto" : daysToDue <= 7 ? "Medio" : "Normal";
  const active = !inactive;

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
  renderComparison(filtered);
  renderDonut(filtered);
  renderOwnerRanking(filtered);
  renderAreaChart(filtered);
  renderPriority(filtered);
  renderTimeline(filtered);
  renderTable(filtered);
  renderManagement();
}

function renderKpis(items) {
  const active = items.filter((t) => t.active);
  const completed = items.filter((t) => t.status === "Completado");
  const delayed = items.filter((t) => t.delayDays > 0 && t.status !== "Completado");
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7);
  const highPriority = active.filter((t) => t.priority === "Alta");
  const avgProgress = items.length ? sum(items, (t) => t.progress) / items.length : 0;
  const completionRate = items.length ? (completed.length / items.length) * 100 : 0;
  const categoryCounts = countBy(items, "category");
  const categoryOrder = ["Automatizacion", "Desarrollo", "Infraestructura"];
  const categoryMix = categoryOrder.map((category, index) => ({
    category,
    value: categoryCounts[category] || 0,
    share: items.length ? ((categoryCounts[category] || 0) / items.length) * 100 : 0,
    accent: ["#0093d6", "#005ca9", "#232323"][index]
  }));

  const cards = [
    { label: "Tareas activas", value: active.length, note: `${items.length} tareas reales en cartera`, accent: "#005ca9", icon: "▦", primary: true },
    { label: "Completadas", value: completed.length, note: `${pct(completionRate)} de cierre`, accent: "#159f72", icon: "✓" },
    { label: "En demora", value: delayed.length, note: `${sum(delayed, (t) => t.delayDays)} dias acumulados`, accent: "#d1495b", icon: "!" },
    { label: "Vencen <= 7 dias", value: dueSoon.length, note: "Requieren seguimiento", accent: "#f0a202", icon: "◷" },
    { label: "Alta prioridad activa", value: highPriority.length, note: "Foco de gerencia", accent: "#232323", icon: "↑" },
    { label: "Avance estimado", value: pct(avgProgress), note: "Derivado por estado y fechas", accent: "#21cde7", icon: "%" },
    {
      label: "Mix por categoria",
      value: "100%",
      accent: "#232323",
      icon: "≡",
      wide: true,
      custom: `
        <div class="category-mix">
          ${categoryMix.map((item) => `
            <div class="category-mix-row">
              <div><span>${item.category}</span><strong>${pct(item.share)}</strong></div>
              <small>${item.value} tareas</small>
              <div class="track"><div class="fill" style="--accent:${item.accent}; width:${item.share}%"></div></div>
            </div>
          `).join("")}
        </div>
      `
    }
  ];

  document.getElementById("kpiGrid").innerHTML = cards.map((card) => `
    <article class="kpi-card ${card.primary ? "kpi-primary" : ""} ${card.wide ? "kpi-wide" : ""}" style="--accent:${card.accent}" data-icon="${card.icon || ""}">
      <div class="kpi-label">${card.label}</div>
      ${card.custom || `<div class="kpi-value">${card.value}</div><div class="kpi-note">${card.note}</div>`}
    </article>
  `).join("");
}

function renderComparison(items) {
  const active = items.filter((t) => t.active);
  const completed = items.filter((t) => t.status === "Completado");
  const delayed = active.filter((t) => t.delayDays > 0);
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7);
  const avgProgress = items.length ? sum(items, (t) => t.progress) / items.length : 0;
  const current = {
    total: items.length,
    active: active.length,
    completed: completed.length,
    delayed: delayed.length,
    dueSoon: dueSoon.length,
    progress: Math.round(avgProgress)
  };
  const stats = [
    { label: "Avance estimado", previous: previousPortfolio.progress, current: current.progress, suffix: "%", positive: "up", accent: colors.Completado },
    { label: "Completadas", previous: previousPortfolio.completed, current: current.completed, suffix: "", positive: "up", accent: colors.Completado },
    { label: "Demoradas", previous: previousPortfolio.delayed, current: current.delayed, suffix: "", positive: "down", accent: current.delayed ? colors.Demorado : colors.Completado },
    { label: "Vencen <= 7 dias", previous: previousPortfolio.dueSoon, current: current.dueSoon, suffix: "", positive: "down", accent: colors.Media },
    { label: "Tareas activas", previous: previousPortfolio.active, current: current.active, suffix: "", positive: "down", accent: colors["En Proceso"] },
    { label: "Cartera total", previous: previousPortfolio.total, current: current.total, suffix: "", positive: "neutral", accent: "#232323" }
  ];

  document.getElementById("comparisonStats").innerHTML = stats.map((item) => {
    const delta = item.current - item.previous;
    const improved = item.positive === "neutral" ? delta !== 0 : item.positive === "up" ? delta >= 0 : delta <= 0;
    const max = Math.max(item.previous, item.current, 1);
    return `
      <article class="comparison-card" style="--accent:${item.accent}">
        <div class="comparison-head">
          <span>${item.label}</span>
          <strong class="${improved ? "is-good" : "is-watch"}">${delta >= 0 ? "+" : ""}${delta}${item.suffix}</strong>
        </div>
        <div class="comparison-values">
          <span>Antes <b>${item.previous}${item.suffix}</b></span>
          <span>Ahora <b>${item.current}${item.suffix}</b></span>
        </div>
        <div class="comparison-bars">
          <div class="comparison-bar is-previous" style="width:${(item.previous / max) * 100}%"></div>
          <div class="comparison-bar is-current" style="width:${(item.current / max) * 100}%"></div>
        </div>
      </article>
    `;
  }).join("");
}

function renderSummary(items) {
  const active = items.filter((t) => t.active);
  const delayed = active.filter((t) => t.delayDays > 0).sort((a, b) => b.delayDays - a.delayDays);
  const dueSoon = active.filter((t) => t.daysToDue >= 0 && t.daysToDue <= 7).sort((a, b) => a.daysToDue - b.daysToDue);
  const completed = items.filter((t) => t.status === "Completado");
  const closureRate = items.length ? (completed.length / items.length) * 100 : 0;
  const avgDelay = delayed.length ? sum(delayed, (t) => t.delayDays) / delayed.length : 0;
  const featured = items.filter((t) => t.featured).sort((a, b) => {
    if (a.active !== b.active) return a.active ? -1 : 1;
    return a.endDate - b.endDate;
  });
  const featuredInProcess = featured.filter((t) => t.status === "En Proceso");
  const featuredInProcessDueSoon = featuredInProcess
    .sort((a, b) => a.endDate - b.endDate)
    .slice(0, 4);

  document.getElementById("summaryHighlights").innerHTML = [
    { value: active.length, label: "tareas activas", accent: colors["En Proceso"] },
    { value: delayed.length, label: `fuera de plazo (${Math.round(avgDelay)} dias prom.)`, accent: colors.Demorado },
    { value: pct(closureRate), label: "avance de cierre", accent: colors.Completado },
    { value: featuredInProcess.length, label: "destacadas en proceso", accent: "#005ca9" }
  ].map((item) => `
    <div class="summary-chip" style="--accent:${item.accent}">
      <strong>${item.value}</strong>
      <span>${item.label}</span>
    </div>
  `).join("");

  renderProgressOutlook(items, { active, delayed, dueSoon, completed });

  document.getElementById("featuredTasks").innerHTML = `
    ${featuredInProcessDueSoon.map((task) => `
      <div class="featured-card">
        <strong>${task.title}</strong>
        <span>${task.category} · ${task.owner} · vence ${fmtDate(task.end)}</span>
      </div>
    `).join("") || `<div class="empty-state">No hay tareas destacadas en proceso.</div>`}
  `;

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

function renderProgressOutlook(items, summary) {
  const previousCut = parseDate(previousPortfolio.cut);
  const avgProgress = items.length ? sum(items, (t) => t.progress) / items.length : 0;
  const progressDelta = Math.round(avgProgress - previousPortfolio.progress);
  const completedDelta = summary.completed.length - previousPortfolio.completed;
  const delayedDelta = summary.delayed.length - previousPortfolio.delayed;
  const completedSinceCut = items.filter((task) =>
    task.status === "Completado" &&
    task.actualDate &&
    task.actualDate > previousCut &&
    task.actualDate <= TODAY
  );
  const improvedAreas = Object.entries(countBy(completedSinceCut, "area"))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([area, value]) => `${area} (${value})`)
    .join(", ") || "Sin cierres registrados dentro del corte";

  const outlook = [
    {
      label: "Avance del portafolio",
      value: `${pct(avgProgress)}`,
      before: `${previousPortfolio.progress}%`,
      after: `${pct(avgProgress)}`,
      result: `${progressDelta >= 0 ? "Subio" : "Bajo"} ${Math.abs(progressDelta)} puntos porcentuales desde el corte anterior.`,
      accent: progressDelta >= 0 ? colors.Completado : colors.Demorado
    },
    {
      label: "Tareas completadas",
      value: summary.completed.length,
      before: previousPortfolio.completed,
      after: summary.completed.length,
      result: `${Math.max(0, completedDelta)} cierres adicionales. Areas que avanzaron: ${improvedAreas}.`,
      accent: colors.Completado
    },
    {
      label: "Tareas con demora",
      value: summary.delayed.length,
      before: previousPortfolio.delayed,
      after: summary.delayed.length,
      result: delayedDelta < 0 ? `Mejoro: hay ${Math.abs(delayedDelta)} demora(s) menos.` : delayedDelta === 0 ? "Sin cambio frente al corte anterior." : `Atencion: hay ${delayedDelta} demora(s) mas.`,
      accent: summary.delayed.length ? colors.Demorado : colors.Completado
    },
    {
      label: "Vencen esta semana",
      value: summary.dueSoon.length,
      before: previousPortfolio.dueSoon,
      after: summary.dueSoon.length,
      result: "Tareas activas que vencen dentro de los proximos 7 dias.",
      accent: colors.Media
    }
  ];

  document.getElementById("progressOutlook").innerHTML = outlook.map((item) => `
    <article class="outlook-card" style="--accent:${item.accent}">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <div class="outlook-values">
        <small>Antes <b>${item.before}</b></small>
        <small>Ahora <b>${item.after}</b></small>
      </div>
      <p>${item.result}</p>
    </article>
  `).join("");
}

function renderDonut(items) {
  const counts = countBy(items, "status");
  const total = Math.max(1, items.length);
  const order = ["En Proceso", "Completado", "Pendiente", "Cancelado", "Demorado"];
  let cursor = 0;
  const segments = order.filter((status) => counts[status]).map((status) => {
    const value = counts[status];
    const start = cursor;
    cursor += (value / total) * 100;
    return `${colors[status] || "#687482"} ${start}% ${cursor}%`;
  });

  document.getElementById("statusDonut").style.background = `conic-gradient(${segments.join(", ") || "#e4edf5 0 100%"})`;
  document.getElementById("statusLegend").innerHTML = order.filter((status) => counts[status]).map((status) => {
    const value = counts[status];
    return `
    <div class="legend-item">
      <div class="legend-line"><span><i class="dot" style="--accent:${colors[status]}"></i>${status}</span><strong>${value}</strong></div>
      <div class="track"><div class="fill" style="--accent:${colors[status]}; width:${(value / total) * 100}%"></div></div>
    </div>
  `;
  }).join("");
}

function renderBars(targetId, counts, total, weighted) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...entries.map(([, value]) => value));

  document.getElementById(targetId).innerHTML = entries.length ? entries.map(([label, value], index) => {
    const accent = ["#005ca9", "#0093d6", "#232323", "#21cde7", "#159f72", "#e31fc5", "#5b7288"][index % 7];
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

function renderAreaChart(items) {
  const counts = Object.entries(countBy(items, "area")).sort((a, b) => b[1] - a[1]);
  const top = counts.slice(0, 5);
  const rest = counts.slice(5);
  const total = Math.max(1, items.length);
  const max = Math.max(1, ...counts.map(([, value]) => value));
  const entries = rest.length
    ? [...top, ["OTROS", sum(rest, ([, value]) => value), rest]]
    : top;

  document.getElementById("areaChart").innerHTML = entries.map(([label, value, children], index) => {
    const accent = ["#005ca9", "#0093d6", "#232323", "#21cde7", "#159f72", "#5b7288"][index % 6];
    const share = (value / total) * 100;
    const detail = Array.isArray(children)
      ? `<div class="other-areas">${children.map(([area, count]) => `<span>${area} ${count}</span>`).join("")}</div>`
      : "";
    return `
      <div class="bar-row ${Array.isArray(children) ? "is-other-area" : ""}">
        <div class="bar-line"><span>${label}</span><strong>${value}</strong></div>
        <div class="track"><div class="fill" style="--accent:${accent}; width:${(value / max) * 100}%"></div></div>
        <span class="muted">${pct(share)} del total</span>
        ${detail}
      </div>
    `;
  }).join("");
}

function renderManagement() {
  document.getElementById("managementList").innerHTML = managementTasks.map((task) => {
    const urgent = task.priority.toLowerCase() === "urgente";
    return `
      <article class="management-item ${urgent ? "is-risk" : ""}">
        <span class="management-number">${task.id}</span>
        <div>
          <p>${task.text}</p>
          <small>${task.priority}</small>
        </div>
      </article>
    `;
  }).join("");
}

function renderOwnerRanking(items) {
  const active = items.filter((t) => t.active);
  const counts = Object.entries(countBy(active, "owner")).sort((a, b) => b[1] - a[1]);
  const max = Math.max(1, ...counts.map(([, value]) => value));
  const total = Math.max(1, active.length);

  document.getElementById("ownerChart").innerHTML = counts.map(([owner, value], index) => {
    const accent = ["#005ca9", "#0093d6", "#232323", "#21cde7", "#159f72", "#e31fc5"][index % 6];
    return `
      <div class="owner-row" style="--accent:${accent}">
        <span class="owner-rank">${index + 1}</span>
        <div class="bar-row">
          <div class="owner-rank-line"><span>${owner}</span><strong>${value} activas</strong></div>
          <div class="track"><div class="fill" style="--accent:${accent}; width:${(value / max) * 100}%"></div></div>
          <span class="muted">${pct((value / total) * 100)} del total activo</span>
        </div>
      </div>
    `;
  }).join("");
}

function renderPriority(items) {
  const counts = countBy(items.filter((t) => t.active), "priority");
  const total = Math.max(1, sum(Object.values(counts), (value) => value));
  const order = ["Alta", "Media", "Baja"];

  document.getElementById("priorityChart").innerHTML = order.map((priority) => {
    const value = counts[priority] || 0;
    const share = (value / total) * 100;
    return `
      <div class="priority-row">
        <span class="priority-label"><i class="dot" style="--accent:${colors[priority]}"></i>${priority}</span>
        <div class="track"><div class="fill" style="--accent:${colors[priority]}; width:${share}%"></div></div>
        <strong class="priority-value">${value}</strong>
      </div>
    `;
  }).join("");

  document.getElementById("priorityList").innerHTML = `<span class="muted">${order.map((priority) => `${priority}: ${pct(((counts[priority] || 0) / total) * 100)}`).join(" · ")}</span>`;
}

function renderTimeline(items) {
  const visibleItems = items.filter((task) => task.featured);
  const sorted = [...visibleItems].sort((a, b) => {
    const aCompleted = a.status === "Completado";
    const bCompleted = b.status === "Completado";
    if (aCompleted !== bCompleted) return aCompleted ? 1 : -1;
    return a.endDate - b.endDate;
  });
  const rangeItems = visibleItems.length ? visibleItems : items;
  const minStart = new Date(Math.min(...rangeItems.map((t) => t.startDate.getTime())));
  const maxEnd = new Date(Math.max(...rangeItems.map((t) => t.endDate.getTime())));
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

  let completedDividerShown = false;
  const rows = sorted.length ? sorted.map((task) => {
    const left = Math.max(0, (diffDays(task.startDate, minStart) / range) * 100);
    const width = Math.max(2, (task.duration / range) * 100);
    const accent = task.delayDays > 0 && task.active ? colors.Demorado : colors[task.status];
    const completedFeatured = task.featured && task.status === "Completado";
    const featuredTag = completedFeatured ? "Completada" : "Destacada";
    const riskLabel = completedFeatured ? "Completada" : task.risk;
    const divider = completedFeatured && !completedDividerShown
      ? `<div class="timeline-section-divider"><span>Completadas</span></div>`
      : "";
    if (completedFeatured) completedDividerShown = true;
    return `
      ${divider}
      <div class="timeline-row ${task.featured ? "is-featured" : ""} ${completedFeatured ? "is-completed-featured" : ""}">
        <div class="timeline-label">
          <strong title="${task.title}">${task.title}${task.featured ? `<span class="timeline-featured-tag">${featuredTag}</span>` : ""}</strong>
          <span>${task.owner} · Inicio ${fmtShortDate(task.start)} · Fin aprox. ${fmtShortDate(task.end)}</span>
        </div>
        <div class="timeline-track">
          <div class="timeline-bar" style="--accent:${accent}; left:${left}%; width:${width}%">
            <div class="timeline-progress" style="width:${task.progress}%"></div>
          </div>
        </div>
        <span class="status-pill" style="--accent:${accent}">${riskLabel}</span>
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
      <tr class="${task.featured ? "is-featured" : ""}">
        <td class="task-title">${task.title}${task.featured ? `<span class="featured-tag">Destacada</span>` : ""}<br><span class="muted">${task.category}${task.notes ? ` · ${task.notes}` : ""}</span></td>
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
