# Portfolio Bryan Dev

Portafolio interactivo desarrollado con **Angular**, **TypeScript**, **TailwindCSS** y **GSAP**.

Este proyecto presenta mi perfil como desarrollador full stack junior mediante una experiencia visual tipo sistema técnico: selección de idioma, introducción cinematográfica, mapa de módulos, bóveda de proyectos, línea de tiempo profesional, laboratorio de desarrollo, portal de contacto y un easter egg oculto estilo 16-bit.

---

## Objetivo del proyecto

Este portafolio no está diseñado como una landing page tradicional.

La idea principal es mostrar mi perfil profesional de una forma más memorable, técnica y ordenada, manteniendo claridad para reclutadores, empresas y personas interesadas en revisar mi experiencia.

El sistema permite explorar diferentes áreas de mi perfil:

- Perfil técnico.
- Experiencia frontend.
- Experiencia backend.
- Manejo de bases de datos.
- Seguridad web.
- Proyectos reales, internos, universitarios y personales.
- Línea de tiempo profesional.
- Laboratorio de desarrollo.
- Portal de contacto.
- Easter egg oculto en estilo 16-bit.

---

## Características principales

- Experiencia bilingüe: español e inglés.
- Interfaz desarrollada con Angular standalone components.
- Estilos construidos principalmente con TailwindCSS.
- Animaciones con GSAP.
- Módulos visuales con identidad propia.
- Project Vault con casos técnicos reales.
- Soporte para enlaces públicos y capturas de proyectos internos.
- Diseño responsive.
- Easter egg oculto con sprite 16-bit.
- Estructura pensada para escalabilidad y mantenimiento.

---

## Módulos del portafolio

### Core Profile

Presenta mi identidad técnica, enfoque profesional, stack principal y forma de trabajo.

### Frontend Lab

Muestra habilidades relacionadas con Angular, TypeScript, TailwindCSS, diseño responsive, dashboards, formularios y componentes reutilizables.

### Backend Engine

Resume experiencia en Java, Spring Boot/Jakarta EE, APIs REST, servicios, validaciones y arquitectura por capas.

### Database Vault

Presenta conocimientos en Oracle, SQL, PL/SQL, repositorios, modelado de datos e integridad de información.

### Security Gate

Expone criterio de seguridad web: JWT, CORS, OWASP, headers, control de acceso, validación de entradas y pruebas con OWASP ZAP.

### Project Vault

Bóveda interactiva de casos técnicos. Incluye proyectos desplegados, sistemas internos, proyectos en desarrollo, proyectos universitarios y proyecto personal.

Casos principales:

- Botón de Pagos UNIANDES.
- AseTicket.
- Sistema de Pasantías EEASA.
- Sistema Financiero Interno ASEFIN.
- Portal de Cliente ASEFIN.
- Proyectos Universitarios.
- Portafolio Interactivo Bryan Dev.

### Experience Timeline

Línea de tiempo que resume mi evolución académica, práctica y profesional.

### Developer Lab

Mesa de experimentación técnica con componentes, snippets, documentación, prácticas y prototipos.

### Contact Portal

Portal de contacto con acceso a correo, GitHub, LinkedIn, CV y disponibilidad profesional.

### Hidden Companion

Easter egg oculto representado por una huellita. Al activarlo aparece un compañero estilo 16-bit animado.

---

## Tecnologías utilizadas

- Angular
- TypeScript
- TailwindCSS
- GSAP
- HTML5
- CSS3
- Angular Signals
- Responsive Design

---

## Estructura general

```text
src/
  app/
    features/
      experience-mode/
      module-viewer/
    shared/
      components/
        core-profile-module/
        frontend-lab-module/
        backend-engine-module/
        database-vault-module/
        security-gate-module/
        project-vault-module/
        experience-timeline-module/
        developer-lab-module/
        contact-portal-module/
        hidden-companion/
  assets/
public/
  images/
    profile/
    projects/
```

---

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js
- npm
- Angular CLI

Versión base del proyecto:

```bash
Angular CLI 21.2.9
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/SafeBryan/portfolio-bryan-dev.git
```

Entrar al proyecto:

```bash
cd portfolio-bryan-dev
```

Instalar dependencias:

```bash
npm install
```

---

## Servidor de desarrollo

Ejecutar el proyecto en local:

```bash
ng serve
```

Abrir en el navegador:

```text
http://localhost:4200/
```

La aplicación se recargará automáticamente cuando se realicen cambios en los archivos del proyecto.

---

## Build de producción

Generar build optimizado:

```bash
ng build
```

Los archivos generados se guardarán en:

```text
dist/
```

---

## Assets importantes

Las imágenes públicas del proyecto se ubican en:

```text
public/images/
```

Ejemplo de capturas para proyectos internos:

```text
public/images/projects/eeasa-pasantias-01.png
public/images/projects/eeasa-pasantias-02.png
```

Rutas usadas en Angular:

```text
/images/projects/eeasa-pasantias-01.png
/images/projects/eeasa-pasantias-02.png
```

El CV puede ubicarse en:

```text
src/assets/cv/
```

o en:

```text
public/cv/
```

dependiendo de la configuración final del proyecto.

---

## Enlaces del proyecto

- GitHub: https://github.com/SafeBryan/portfolio-bryan-dev
- Botón de Pagos UNIANDES: https://botonpagosuniandes.edu.ec/pagos
- AseTicket: https://asecom.com.ec:9443/login

---

## Autor

**Bryan Javier Pazmiño Córdova**  
Junior Full Stack Developer  
Ambato, Ecuador

Stack principal:

- Angular
- TypeScript
- TailwindCSS
- Java
- Spring Boot / Jakarta EE
- Oracle
- REST APIs
- Seguridad Web

---

## Estado del proyecto

Proyecto en desarrollo y mejora continua.

El objetivo es mantenerlo actualizado con nuevos proyectos, mejoras visuales, optimización de rendimiento y contenido profesional.
