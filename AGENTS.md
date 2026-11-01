# Guía del repositorio

## Alcance

Este repositorio contiene un infográfico motion graphics vertical hecho con Remotion. El README es la fuente de verdad del estado del proyecto.

## Formato

La composición es vertical, de 1080×1920 a 30 fps. Todo el contenido importante debe quedar dentro de las zonas seguras definidas en `src/styles/`.

## Orden de trabajo

No animar una escena sin tener definidos su guion, locución y estilo en `docs/`. Si falta información, preguntar o dejar una nota en el pull request; no inventarla.

## Convenciones de código

Cada escena va en un archivo de `src/scenes/`; los datos, en `src/data/`. No fijar colores, medidas ni tiempos en el código: usar `src/styles/`. Calcular las duraciones en frames a partir de segundos × fps.

## Recursos y validación

Guardar recursos en `public/`, registrar su fuente y licencia en `docs/fuentes.md`, no usar recursos sin licencia clara ni generadores de imágenes y ejecutar `npm run lint` antes de dar un cambio por terminado.

## Renders y sincronía

Los renders van en `out/` y no se suben a Git. Mantener sincronizados `docs/`, el código y el README cuando algo cambie.
