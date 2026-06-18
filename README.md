# Dashboard Sistemas DACHA

Centro de comando para el seguimiento en tiempo real del portafolio tecnológico del Área de TI.
Visualiza avances, demoras, carga de trabajo por responsable, cronograma Gantt interactivo y decisiones pendientes de gerencia.

**Demo en vivo:** [https://rivascode.github.io/Dashboard-Sistemas-DACHA](https://rivascode.github.io/Dashboard-Sistemas-DACHA)

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 + TypeScript strict |
| Estilos | Tailwind CSS v4 (`@theme` directive) |
| Animaciones | Framer Motion |
| Gráficas | Recharts (donut/pie chart) |
| Íconos | Lucide React |
| Excel parser | SheetJS (xlsx) |
| Runtime | Node.js 20+ |

**Tema:** Glassmorphism oscuro con estética neon/aurora — fondo animado CSS grid, tarjetas con backdrop-blur y acentos de color por estado.

---

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

---

## Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/rivascode/Dashboard-Sistemas-DACHA.git
cd Dashboard-Sistemas-DACHA

# 2. Instalar dependencias
npm install

# 3. Levantar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción con API routes |
| `npm start` | Servidor de producción |
| `npm run export` | Build estático para GitHub Pages (sin API) |
| `npm run lint` | Linting con ESLint |

---

## Carga de datos vía Excel

El dashboard permite reemplazar toda la data subiendo un archivo `.xlsx` o `.xls` desde el botón **"Cargar Excel"** en el encabezado.

### Columnas reconocidas

El parser es tolerante a tildes, mayúsculas/minúsculas y variantes ortográficas.

| Columna en Excel | Campo interno | Requerido |
|---|---|---|
| Tarea / Nombre / Título | `title` | ✅ |
| Área / Area | `area` | ✅ |
| Responsable / Owner | `owner` | ✅ |
| Estado / Status | `status` | ✅ |
| Inicio / Fecha Inicio | `startDate` | ✅ |
| Fin / Fecha Fin / Vencimiento | `endDate` | ✅ |
| Prioridad / Priority | `priority` | — |
| Progreso / Avance / % | `manualProgress` | — |
| Categoría / Categoria | `category` | — |
| Notas / Comentarios | `notes` | — |

### Valores válidos para Estado

`Completado` · `En Proceso` · `Demorado` · `Pendiente` · `Cancelado`

### Persistencia de datos

Los datos cargados se guardan en `data/state.json` y **sobreviven reinicios del servidor**.
Al volver a levantar el proyecto, el último Excel subido se restaura automáticamente.
Si no existe ningún archivo previo, se cargan los datos semilla de `src/lib/data.ts`.

---

## Estructura del proyecto

```
src/
├── app/
│   ├── page.tsx                  # Página principal (SSR / SSG condicional)
│   ├── globals.css               # Tema global, clases utilitarias glass/neon
│   └── api/
│       ├── tasks/route.ts        # GET  /api/tasks  → payload completo
│       └── upload/route.ts       # POST /api/upload → parsea Excel y reemplaza data
├── components/
│   ├── dashboard/
│   │   ├── dashboard.tsx         # Orquestador principal, todos los useMemo derivados
│   │   ├── kpi-grid.tsx          # 6 KPIs con AnimatedNumber
│   │   ├── timeline.tsx          # Cronograma Gantt con sticky header de meses
│   │   ├── task-table.tsx        # Tabla completa filtrable y ordenable con scroll
│   │   ├── status-chart.tsx      # Donut chart de estados (Recharts)
│   │   ├── bar-list.tsx          # Barras de ranking / área / "Otro"
│   │   ├── comparison.tsx        # Evolución vs corte anterior
│   │   ├── outlook.tsx           # Resumen ejecutivo 4 indicadores
│   │   ├── management.tsx        # Decisiones pendientes de gerencia
│   │   ├── priority-chart.tsx    # Distribución de prioridad
│   │   └── upload-button.tsx     # Botón carga Excel (oculto en build estático)
│   └── ui/
│       ├── section.tsx           # Tarjeta glass con kicker, título y prop clip
│       └── animated-number.tsx   # Contador animado con Framer Motion
└── lib/
    ├── types.ts                  # Interfaces: RawTask, EnrichedTask, DashboardPayload…
    ├── data.ts                   # Datos semilla (38 tareas, fechas, portafolio previo)
    ├── enrich.ts                 # Calcula progress, delayDays, daysToDue por tarea
    ├── parse-excel.ts            # SheetJS: mapeo tolerante de columnas en español
    ├── store.ts                  # Singleton globalThis + lectura/escritura en disco
    ├── derive.ts                 # Agregaciones: KPIs, rankings, alertas, outlook
    ├── theme.ts                  # STATUS_COLORS y ACCENTS
    └── utils.ts                  # Helpers de fecha, formato y matemática

data/
└── state.json                    # Estado persistido por uploads (no versionado en git)

.github/
└── workflows/
    └── deploy.yml                # CI/CD → GitHub Pages (build estático)
```

---

## Despliegue en GitHub Pages

El sitio se publica automáticamente en cada push a `main` via GitHub Actions.

**URL pública:** [https://rivascode.github.io/Dashboard-Sistemas-DACHA](https://rivascode.github.io/Dashboard-Sistemas-DACHA)

Para activar GitHub Pages por primera vez:
1. Ve a **Settings → Pages** en el repositorio
2. En *Source* selecciona **GitHub Actions**
3. Haz push a `main` — el workflow construye el export estático y lo publica

> **Nota:** La versión publicada en GitHub Pages muestra los datos de demostración fijos.
> La carga de Excel solo funciona en la versión local con servidor Node.js activo (`npm run dev` o `npm start`).

---

## Variables de entorno

| Variable | Descripción |
|---|---|
| `STATIC_EXPORT=true` | Activa `output: export` y `basePath` para GH Pages |
| `NEXT_PUBLIC_STATIC_EXPORT=true` | Oculta el botón de carga en el build estático |

---

## Impresión / PDF

El botón **PDF** en el encabezado abre el diálogo de impresión del navegador.

Configuración recomendada:
- Papel: A4 horizontal
- Escala: ajustar a página
- Gráficos de fondo: **activado** (para conservar colores)

---

## Licencia

MIT — Área de Sistemas · DACHA
