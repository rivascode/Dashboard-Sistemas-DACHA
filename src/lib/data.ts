import type { ManagementTask, PortfolioSnapshot, RawTask } from "./types";

/** Date of the current cut — kept fixed to match the source Excel snapshot. */
export const TODAY = "2026-06-16";
export const CUT_LABEL = "2026-06-16";

/**
 * Authoritative seed dataset (ported from the original GANTT SISTEMAS cut).
 * The Excel-upload API can replace this at runtime.
 */
export const SEED_TASKS: RawTask[] = [
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
  { id: "IT-038", featured: true, title: "GASTOS REEMBOLSABLES", area: "Contabilidad", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-05-27", end: "2026-06-27", actual: "", progressOverride: 80, notes: "" },
];

export const MANAGEMENT_TASKS: ManagementTask[] = [
  { id: 1, text: "Revisar y validar los CV de candidatos practicantes para Smartbots.", priority: "Urgente" },
  { id: 2, text: "Coordinar con Diego la entrega de credenciales de RRSS para continuar con la gestion comercial de Smartbots.", priority: "Urgente" },
  { id: 3, text: "Definir el flujo de compra de servicios que requieren pago con tarjeta de credito.", priority: "Urgente" },
  { id: 4, text: "Evaluar bono para el equipo de desarrollo por el seguimiento y soporte de bots.", priority: "Media" },
];

export const PREVIOUS_PORTFOLIO: PortfolioSnapshot = {
  cut: "2026-06-02",
  total: 27,
  active: 21,
  completed: 6,
  delayed: 2,
  dueSoon: 4,
  progress: 47,
};
