# Infográfico vertical con Remotion

## 1. Descripción del proyecto

Tema por definir. Este repositorio prepara la base técnica y de preproducción para un infográfico motion graphics vertical.

## 2. Formato de salida

La composición `Infografico` se prepara en **1080×1920 px**, relación **9:16**, a **30 fps**. Las plataformas de destino están pendientes de definir.

## 3. Estado actual y próxima iteración

**Estado:** estructura técnica y plantillas de preproducción listas; tema, guion, locución, estilo y animación pendientes.

En la próxima iteración se responderán las preguntas de `docs/` y se desarrollarán las escenas sin reorganizar el proyecto.

## 4. Requisitos

- Node.js LTS indicado en `.nvmrc`
- npm compatible con esa versión de Node.js

## 5. Instalación y comandos

```bash
npm install
npm run dev
npm run render
npm run lint
```

`npm run render` genera el vídeo en `out/Infografico.mp4`.

## 6. Estructura del repositorio

- `docs/`: documentación de preproducción y fuentes.
- `src/scenes/`: una escena por componente.
- `src/components/`: elementos visuales reutilizables.
- `src/data/`: datos separados de la vista.
- `src/styles/`: formato y tokens de diseño.
- `public/`: audio, imágenes y fuentes.
- `out/`: renders locales, no versionados.

## 7. Flujo de producción

Tema → guion → locución → estilo → storyboard → animación → render.

## 8. Documentación de preproducción

- [Tema](docs/01-tema.md)
- [Guion](docs/02-guion.md)
- [Locución](docs/03-locucion.md)
- [Estilo](docs/04-estilo.md)
- [Storyboard](docs/05-storyboard.md)
- [Fuentes](docs/fuentes.md)

## 9. Renders y entregables

Los renders se generan en `out/` y no se suben a Git. El entregable previsto es un MP4 H.264 con audio AAC.

## 10. Créditos, fuentes y licencias de recursos

Registrar cada fuente, recurso y licencia en [docs/fuentes.md](docs/fuentes.md). No se incorporarán recursos cuya licencia no esté clara.