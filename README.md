# Avances del Area de TI

Dashboard ejecutivo para presentar a gerencia el avance de tareas del area de TI, construido a partir del archivo `GANTT SISTEMAS.xlsx`.

## Vista publicada

GitHub Pages:

https://rivascode.github.io/Dashboard-Sistemas-DACHA/

## Objetivo

El tablero resume el estado del portafolio de tareas TI con foco en:

- tareas activas, completadas, demoradas y proximas a vencer;
- carga de trabajo por responsable;
- asignacion por area solicitante;
- distribucion por prioridad;
- cronograma tipo Gantt por meses;
- detalle operativo de tareas, fechas, responsable, estado, demora y avance estimado.

## Estructura del dashboard

1. **Resumen General**
   - Indicadores principales del portafolio.
   - Tareas atrasadas y por vencer.
   - Leyenda de alertas:
     - Rojo: tareas vencidas.
     - Amarillo: tareas por vencer el plazo.

2. **Cronograma**
   - Linea de tiempo por meses.
   - Barras por tarea.
   - Riesgo visual por tarea.
   - Ocupa todo el ancho para facilitar lectura en presentacion e impresion.

3. **Metricas de gestion**
   - Estado.
   - Responsables.
   - Areas.
   - Prioridad.

4. **Detalle**
   - Tabla completa de tareas y seguimiento.
   - Ordenable al hacer clic en los encabezados.

## Impresion y PDF

La pagina incluye un boton **Imprimir PDF** que abre el dialogo de impresion del navegador.

Configuracion recomendada:

- Papel: A4.
- Orientacion: horizontal.
- Escala: predeterminada o ajustar a pagina.
- Graficos de fondo: activados, para conservar colores.

La hoja impresa esta preparada para:

- resumen general en una hoja;
- cronograma/Gantt en una hoja completa;
- tarjetas de metricas en una hoja;
- detalle en una hoja completa.

## Responsividad

El dashboard esta adaptado para escritorio, tablet y celular. En pantallas pequenas las tarjetas se apilan, el cronograma mantiene lectura vertical y la tabla queda desplazable horizontalmente.

## Archivos principales

- `index.html`: estructura de la pagina.
- `styles.css`: estilos visuales, responsive e impresion A4.
- `script.js`: datos, metricas, graficos y comportamiento del boton de impresion.
- `.nojekyll`: permite publicar el sitio estatico directamente en GitHub Pages.

## Notas de datos

La columna `Progreso (%)` del archivo fuente estaba vacia. Por eso, el avance mostrado se calcula de forma estimada a partir del estado y las fechas:

- tareas completadas: 100%;
- tareas activas: avance estimado segun fecha de inicio, fecha fin y fecha de corte;
- tareas demoradas: marcadas con riesgo alto cuando superan la fecha fin estimada.

Fecha de corte usada en el dashboard: **02/06/2026**.
