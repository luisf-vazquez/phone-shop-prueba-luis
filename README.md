# phone-shop-prueba-luis

## Identificación

Author: Luis Fernando Vázquez Caracas [luisf-vazquez at Git](https://github.com/luisf-vazquez).
Repository: [https://github.com/luisf-vazquez/phone-shop-prueba-luis](https://github.com/luisf-vazquez/phone-shop-prueba-luis).

## Introducción

Esta es una pequeña aplicación de ejemplo en React que simula una tienda de teléfonos móviles.

Las principales características técnicas del proyecto son:

- Monorepo creado con [Vite](https://vitejs.dev/).
- El monorepo contiene una SPA implementada en React.
- Se emplean componentes funcionales de React (con Hooks), implementados con JSX.
- Se accede a un API dada para la prueba técnica (alojada en https://itx-frontend-test.onrender.com/).
- Para la estilización se emplea una arquitectura Sass.
- Para la construcción del proyecto se ha empleado Vite en lugar de Webpack, con lo que se consiguen mejoras en los tiempos de desarrollo en local, construcción y CI.
- La carga de páginas se realiza en modo Lazy, pero en lugar de usar React.lazy y React.Suspense, se emplea la biblioteca ['@loadable/component'](https://github.com/gregberge/loadable-components).
  ...

## Para ejecutar este proyecto en local

---

- Se prefiere el uso de yarn frente a npm.
- En primer lugar se deben instalar las dependencias: `yarn`.
- Y luego, se debe ejecutar `yarn dev` y abrir una ventana del navegador en [http://localhost:X/](http://localhost:X/) Siendo 'X' el puerto dado por el sistema cuando se sirve el repo.

### Leyenda

| Simbolo | Significado      |
| ------- | ---------------- |
| [x]     | Tarea completada |
| **WIP** | Tarea en proceso |
| [ ]     | Tarea pendiente  |

### Tareas

- [x] Creación de la arquitectura del monorepo con React y JS.
- [x] Configuración del entorno para asegurar buenas prácticas (ESlint y Prettier).
- [x] Conexión con API y cacheo de respuesta para evitar llamadas innecesarias.
- [ ] Inclusión del Lazy Loading.
- **WIP** Maquetación del listado de dispositivos.
- [ ] Maquetación del detalle de dispositivos.
- [ ] Maquetación de la cabecera de la aplicación.
- [ ] Configuración de assets de la aplicación.
- [ ] Maquetación de campos del buscador de dispositivos e implementación de su lógica.
- [ ] Sistema de persistencia de datos en el frontend.
- [ ] Vista del detalle de un dispositivo (queda ajustar maquetación y navegación al carrito).
- [ ] Icono del carrito de la compra (muestra número de productos en la cesta).
- [ ] Implementar testing.
