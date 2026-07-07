import type { ManagementTask, PortfolioSnapshot, Quotation, RawTask } from "./types";

/** Date of the current cut — synced from Notion GANTT SISTEMAS. */
export const TODAY = "2026-07-06";
export const CUT_LABEL = "2026-07-06";

/**
 * Authoritative seed dataset (synced from Notion — corte 06/07/2026).
 * Las tareas completadas del corte anterior (16/06/2026) fueron retiradas;
 * solo se conservan las completadas entre ambos cortes.
 * The Excel-upload API can replace this at runtime.
 */
export const SEED_TASKS: RawTask[] = [
  { id: "IT-004", featured: false, title: "BOT CONCILACIONES", area: "Contabilidad", owner: "FATIMA VILLAJULCA", category: "Automatizacion", priority: "Media", status: "Cancelado", start: "2026-03-02", end: "2026-04-30", actual: "", progressOverride: 10, notes: "PENDIENTE REU CON SERGIO" },
  { id: "IT-006", featured: true, title: "AUTOMATIZACION DE IE", area: "Operaciones", owner: "LEONARDO RIVAS", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-03-19", end: "2026-08-31", actual: "", progressOverride: 15, notes: "CREANDO ANALISIS DE CORREOS" },
  { id: "IT-007", featured: false, title: "AUTOMATIZACION DE ORDEN DE DESPACHO", area: "Operaciones", owner: "LEONARDO RIVAS", category: "Automatizacion", priority: "Alta", status: "Pendiente", start: "2026-03-19", end: "2026-08-31", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-009", featured: true, title: "MIGRACION DE SERVIDOR - PAWA", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Alta", status: "En Proceso", start: "2026-07-18", end: "2026-07-15", actual: "", progressOverride: 25, notes: "" },
  { id: "IT-010", featured: true, title: "DOCUMENTACION GESTOR DOCUMENTAL", area: "SMARTBOTS", owner: "GABRIEL ESCARATE", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-04-20", end: "2026-06-30", actual: "", progressOverride: 50, notes: "" },
  { id: "IT-012", featured: false, title: "MODULO DE GENERACION DE CONTRATO", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "Completado", start: "2026-05-11", end: "2026-06-27", actual: "2026-06-19", progressOverride: 100, notes: "" },
  { id: "IT-015", featured: false, title: "ADAPTAR RRHH A MULTIEMPRESAS", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Media", status: "Completado", start: "2026-05-25", end: "2026-07-31", actual: "2026-07-06", progressOverride: 100, notes: "" },
  { id: "IT-016", featured: true, title: "REGISTRO DE MULTA PENDIENTE DE RESPONSABLES", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-05-25", end: "2026-07-31", actual: "", progressOverride: 50, notes: "" },
  { id: "IT-017", featured: true, title: "MODULO DE TARIFAS ITURRI APP", area: "Finanzas", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Baja", status: "Pendiente", start: "2026-05-21", end: "2026-07-31", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-019", featured: false, title: "RENOVACION DE STATUS DOCUMENTARIO", area: "Documentacion", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Baja", status: "En Proceso", start: "2026-06-01", end: "2026-06-30", actual: "", progressOverride: 40, notes: "" },
  { id: "IT-022", featured: true, title: "NUMERACIONES MARITIMAS", area: "Liquidacion Pre", owner: "GABRIEL ESCARATE", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-06-01", end: "2026-09-30", actual: "", progressOverride: 15, notes: "" },
  { id: "IT-030", featured: true, title: "MEJORAS DE REGISTRO DE CLIENTES", area: "Clientes", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Media", status: "En Proceso", start: "2026-06-12", end: "2026-06-19", actual: "", progressOverride: 30, notes: "" },
  { id: "IT-031", featured: true, title: "MODULO DE SOLICITUDES DE PERMISOS", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Media", status: "En Proceso", start: "2026-06-18", end: "2026-06-26", actual: "", progressOverride: 80, notes: "" },
  { id: "IT-032", featured: true, title: "CREACION DE CORREO DE ONBOARDING TRABJADOR NUEVO", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-12", end: "2026-06-19", actual: "", progressOverride: 30, notes: "Demorado por modificaciones de proceso multiempresa" },
  { id: "IT-034", featured: true, title: "ALERTA DE CONTENEDORES VS MANIFIESTO", area: "Operaciones", owner: "FATIMA VILLAJULCA", category: "Automatizacion", priority: "Media", status: "En Proceso", start: "2026-06-11", end: "2026-06-30", actual: "", progressOverride: 20, notes: "" },
  { id: "IT-035", featured: false, title: "MODIFICACION DE TRACKIN DE DAM", area: "Clientes", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Media", status: "En Proceso", start: "2026-06-12", end: "2026-06-30", actual: "", progressOverride: 40, notes: "" },
  { id: "IT-036", featured: true, title: "PRACTICANTE SMARBOTS", area: "SMARTBOTS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Media", status: "En Proceso", start: "2026-05-01", end: "2026-06-30", actual: "", progressOverride: 50, notes: "Por revision con Mauricio" },
  { id: "IT-037", featured: true, title: "WEB RRSS SMARTBOT", area: "SMARTBOTS", owner: "LEONARDO RIVAS", category: "Infraestructura", priority: "Media", status: "En Proceso", start: "2026-05-01", end: "2026-06-30", actual: "", progressOverride: 90, notes: "Por revision y confirmacion con Mauricio" },
  { id: "IT-038", featured: true, title: "GASTOS REEMBOLSABLES", area: "Contabilidad", owner: "WILLIAM FLORES", category: "Automatizacion", priority: "Alta", status: "En Proceso", start: "2026-05-27", end: "2026-06-27", actual: "", progressOverride: 80, notes: "En produccion" },
  { id: "IT-041", featured: true, title: "REPORTE DE LLENADOS", area: "Operaciones", owner: "REYSON FARFAN", category: "Desarrollo", priority: "Alta", status: "Pendiente", start: "2026-07-06", end: "2026-07-10", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-042", featured: true, title: "CREACION DE PORTAL DEL TRABAJADOR", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Media", status: "Pendiente", start: "2026-07-06", end: "2026-07-24", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-045", featured: true, title: "SISTEMA RRHH - MULTIEMPRESA", area: "Recursos Humanos", owner: "HERNAN CALLE", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-22", end: "2026-07-25", actual: "", progressOverride: 90, notes: "" },
  { id: "IT-046", featured: true, title: "RENOVACION WEB GRUPO ITURRI", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-23", end: "2026-07-31", actual: "", progressOverride: 50, notes: "" },
  { id: "IT-047", featured: true, title: "RENOVACION DE BRANDING DACHA", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Desarrollo", priority: "Alta", status: "Pendiente", start: "2026-06-23", end: "2026-07-31", actual: "", progressOverride: 0, notes: "" },
  { id: "IT-048", featured: true, title: "RENOVACION PAGINA WEB DACHA", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Desarrollo", priority: "Alta", status: "En Proceso", start: "2026-06-23", end: "2026-07-31", actual: "", progressOverride: 10, notes: "" },
  { id: "IT-050", featured: true, title: "CREACION DE PAGINA ITURRI AP", area: "SISTEMAS", owner: "LEONARDO RIVAS", category: "Desarrollo", priority: "Alta", status: "Pendiente", start: "2026-07-20", end: "2026-08-30", actual: "", progressOverride: 0, notes: "" },
];

/** Pendientes a revisar con gerencia — synced from Notion. */
export const MANAGEMENT_TASKS: ManagementTask[] = [
  { id: 1, text: "Por un corto electrico en el edificio el DVR quemo el disco duro.", subject: "COMPRA DE HDD PARA CAMARAS DE SEGURIDAD - PAITA", priority: "Urgente" },
  { id: 2, text: "Compra de repuesto de fotocopiadora.", subject: "REPARACION URGENTE DE FOTOCOPIADORA 5055 RUPTURA DE FILM", priority: "Urgente" },
  { id: 3, text: "Disco duro de varios usuarios de la sede Salaverry presentan falla y requieren cambio.", subject: "REQUERIMIENTO DE DISCOS SSD PARA LAPTOP - SALAVERRY", priority: "Urgente" },
  { id: 4, text: "Revisar cotizacion de fotocopiadora nueva.", subject: "REQUERIMIENTO DE COMPRA PARA PAITA", priority: "Alta" },
];

/** Status de cotizaciones Smartbot — synced from Notion. */
export const QUOTATIONS: Quotation[] = [
  { id: 1, client: "Unimar", project: "Sistema Unimar - Operador Logístico", status: "POR HACER", owner: "LEONARDO RIVAS", sentDate: "2026-07-01", followUp: "2026-07-06", notes: "Pendiente revisar documentacion de Unimar" },
  { id: 2, client: "Hanseatica", project: "Bot Conciliación de Comprobantes", status: "Negociación", owner: "LEONARDO RIVAS", sentDate: "2026-07-02", followUp: "2026-07-08", notes: "En espera de que Hanseatica apruebe" },
  { id: 3, client: "HASS PERU S.A", project: "Bot Vuce / NDA", status: "En seguimiento", owner: "LEONARDO RIVAS", sentDate: "2026-06-22", followUp: "2026-07-08", notes: "Cotización / NDA - Bot Vuce - BERRY HARVEST S.A" },
  { id: 4, client: "APM", project: "Chat Bot Whatsapp", status: "Negociación", owner: "LEONARDO RIVAS", sentDate: "2026-05-19", followUp: "2026-07-08", notes: "En espera de aprobacion de APM" },
];

/** Snapshot del corte anterior (16/06/2026) para la comparación. */
export const PREVIOUS_PORTFOLIO: PortfolioSnapshot = {
  cut: "2026-06-16",
  total: 38,
  active: 18,
  completed: 19,
  delayed: 1,
  dueSoon: 2,
  progress: 66,
};
