# ColorEase: Web de Accesibilidad de Colores

## Descripción del Proyecto

**ColorEase** es una herramienta diseñada para ayudar a desarrolladores y diseñadores a garantizar la accesibilidad visual en sus proyectos mediante la comprobación del contraste de colores. La web permite a los usuarios verificar paletas de colores personalizadas y comprobar si cumplen con los estándares de accesibilidad de la **WCAG (Web Content Accessibility Guidelines)**, asegurando que los contenidos sean legibles para personas con discapacidades visuales o daltonismo.

## Principales Funcionalidades

- **Selector de Colores:** Permite seleccionar y combinar colores, verificando automáticamente el nivel de contraste.
- **Creación de Paletas:** Permite generar una combinación de colores cumpliendo los estándares de la **WCAG**.
- **Verificación de Accesibilidad:** Asegura que las combinaciones de colores cumplan con los estándares de accesibilidad.
- **Modo Oscuro/Claro:** Opción para cambiar el tema de la web, ajustando la experiencia visual.

## Flujo de Trabajo en Ramas

El proyecto sigue una estructura de ramas bien organizada para mantener el código limpio, estable y fácil de gestionar. A continuación, se describe el propósito de cada rama:

### `main`
- **Propósito:** Esta es la rama principal del proyecto. Contiene el código estable y listo para producción. Los cambios en `main` deben ser cuidadosamente revisados y probados antes de ser fusionados.
- **Restricciones:** No se debe desarrollar directamente en `main`. Todos los cambios deben venir de Pull Requests desde otras ramas.

### `feature/`
- **Propósito:** Las ramas `feature/` se utilizan para desarrollar nuevas funcionalidades o características. Cada nueva funcionalidad debe desarrollarse en una rama separada.
- **Ejemplo de nombre:** `feature/color-picker`, `feature/user-authentication`
- **Flujo:** Una vez que la funcionalidad esté completa y testeada, se creará un **Pull Request** para fusionar la rama `feature/` en `main` o `test`, dependiendo del flujo de integración.

### `test/`
- **Propósito:** Ramas dedicadas a pruebas. Esta rama se utiliza para probar nuevas funcionalidades o integraciones antes de fusionarlas en `main`.
- **Flujo:** Los cambios en `test` deben ser probados exhaustivamente antes de ser fusionados en `main`.

### `bugfix/`
- **Propósito:** Las ramas `bugfix/` se utilizan para corregir errores en la aplicación. Esto puede incluir errores detectados en producción o durante el desarrollo.
- **Ejemplo de nombre:** `bugfix/fix-button`, `bugfix/fix-contrast-calculation`
- **Flujo:** Una vez que el error se haya corregido y probado, se crea un **Pull Request** para fusionar la rama en `main` o `test`.

### `refactor/`
- **Propósito:** Las ramas `refactor/` se utilizan cuando el código existente necesita mejoras sin añadir nuevas funcionalidades. Esto incluye la reorganización del código para hacerlo más eficiente o más legible.
- **Ejemplo de nombre:** `refactor/optimize-color-checker`, `refactor/clean-up-css`
- **Flujo:** Después de los cambios, se prueba y se fusiona en `main` o `test` según sea necesario.
