import { Component, Input, computed, signal } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface ProjectLink {
  label: string;
  href: string;
  type: 'live' | 'repo' | 'demo' | 'docs';
}

interface ProjectImage {
  src: string;
  alt: string;
}

interface ProjectCase {
  id: string;
  code: string;
  title: string;
  category: string;
  status: 'production' | 'intranet' | 'development' | 'academic' | 'portfolio';
  problem: string;
  solution: string;
  role: string;
  impact: string;
  stack: string[];
  highlights: string[];
  links: ProjectLink[];
  images: ProjectImage[];
}

@Component({
  selector: 'app-project-vault-module',
  standalone: true,
  templateUrl: './project-vault-module.component.html',
})
export class ProjectVaultModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  vaultUnlocked = signal(false);
  selectedProjectId = signal('uniandes-payment-button');

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Technical case vault',
        title: 'Project Vault',
        subtitle:
          'A digital vault of real, internal, academic and personal projects presented as technical case files.',
        description:
          'Each case file explains the context, my contribution, the solution, the stack used and the impact. Public systems include links; intranet systems are shown with screenshots only.',
        lockedLabel: 'Vault locked',
        unlockButton: 'Unlock project vault',
        unlockedLabel: 'Access granted',
        caseFilesLabel: 'Case files loaded',
        selectedLabel: 'Selected case',
        problemLabel: 'Context / Problem',
        solutionLabel: 'Solution',
        roleLabel: 'My role',
        impactLabel: 'Impact',
        stackLabel: 'Stack',
        highlightsLabel: 'Technical highlights',
        linksLabel: 'Project links',
        imagesLabel: 'Project screenshots',
        emptyState: 'Unlock the vault to inspect the technical case files.',
        caseIndexTitle: 'Case index',
        filesLabel: 'files',
        vaultWaiting: 'vault.waiting',
        vaultCenterLabel: 'Project',
        vaultOpen: 'OPEN',
        vaultLock: 'LOCK',
        vaultAccessGranted: 'access granted',
        vaultClickToUnlock: 'click to unlock',
        linkAvailable: 'link.available = true',
        intranetNote: 'intranet.preview = screenshots only',
        projects: this.getProjectsEn(),
      };
    }

    return {
      eyebrow: 'Bóveda de casos técnicos',
      title: 'Project Vault',
      subtitle:
        'Una bóveda digital de proyectos reales, internos, universitarios y personales presentados como expedientes técnicos.',
      description:
        'Cada expediente explica el contexto, mi aporte, la solución implementada, el stack utilizado y el impacto. Los sistemas públicos incluyen enlace; los sistemas de intranet se muestran solo con capturas.',
      lockedLabel: 'Bóveda bloqueada',
      unlockButton: 'Desbloquear bóveda',
      unlockedLabel: 'Acceso concedido',
      caseFilesLabel: 'Expedientes cargados',
      selectedLabel: 'Caso seleccionado',
      problemLabel: 'Contexto / Problema',
      solutionLabel: 'Solución',
      roleLabel: 'Mi rol',
      impactLabel: 'Impacto',
      stackLabel: 'Stack',
      highlightsLabel: 'Puntos técnicos',
      linksLabel: 'Enlaces del proyecto',
      imagesLabel: 'Capturas del proyecto',
      emptyState: 'Desbloquea la bóveda para inspeccionar los expedientes técnicos.',
      caseIndexTitle: 'Índice de casos',
      filesLabel: 'archivos',
      vaultWaiting: 'vault.waiting',
      vaultCenterLabel: 'Proyecto',
      vaultOpen: 'ABIERTO',
      vaultLock: 'LOCK',
      vaultAccessGranted: 'acceso concedido',
      vaultClickToUnlock: 'clic para abrir',
      linkAvailable: 'link.available = true',
      intranetNote: 'intranet.preview = solo capturas',
      projects: this.getProjectsEs(),
    };
  });

  selectedProject = computed(() => {
    return (
      this.content().projects.find((project) => project.id === this.selectedProjectId()) ??
      this.content().projects[0]
    );
  });

  unlockVault(): void {
    this.vaultUnlocked.set(true);
  }

  selectProject(projectId: string): void {
    this.selectedProjectId.set(projectId);
  }

  getStatusClass(status: ProjectCase['status']): string {
    const classes: Record<ProjectCase['status'], string> = {
      production: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200',
      intranet: 'border-violet-300/25 bg-violet-300/[0.08] text-violet-200',
      development: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
      academic: 'border-sky-300/25 bg-sky-300/[0.08] text-sky-200',
      portfolio: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-200',
    };

    return classes[status];
  }

  getLinkClass(type: ProjectLink['type']): string {
    const classes: Record<ProjectLink['type'], string> = {
      live: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-100 hover:border-emerald-300/60 hover:bg-emerald-300/[0.12]',
      repo: 'border-sky-300/25 bg-sky-300/[0.08] text-sky-100 hover:border-sky-300/60 hover:bg-sky-300/[0.12]',
      demo: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-100 hover:border-amber-300/60 hover:bg-amber-300/[0.12]',
      docs: 'border-violet-300/25 bg-violet-300/[0.08] text-violet-100 hover:border-violet-300/60 hover:bg-violet-300/[0.12]',
    };

    return classes[type];
  }

  private getProjectsEs(): ProjectCase[] {
    return [
      {
        id: 'uniandes-payment-button',
        code: 'CASE-001',
        title: 'Botón de Pagos UNIANDES',
        category: 'Sistema académico desplegado',
        status: 'production',
        problem:
          'Los estudiantes necesitaban una plataforma clara para consultar valores pendientes, seleccionar conceptos de pago y continuar el proceso de transacción académica en línea.',
        solution:
          'Participación en la mejora del portal de pagos, integrando flujos de consulta, selección de documentos, validaciones, medios de pago, confirmación y visualización de resultados.',
        role: 'Desarrollo frontend con Angular, integración con servicios backend, manejo de estados, validaciones visuales, mejoras responsive y soporte en el flujo de pasarela.',
        impact:
          'Mejora de la experiencia del estudiante, mayor claridad en la selección de pagos y soporte a un proceso institucional crítico.',
        stack: [
          'Angular',
          'TypeScript',
          'TailwindCSS',
          'Java/Jakarta EE',
          'Oracle',
          'REST APIs',
          'Nuvei/Paymentez',
        ],
        highlights: [
          'Consulta de deudas académicas',
          'Selección de documentos de pago',
          'Integración con pasarela',
          'Confirmación de transacciones',
          'Pantallas de resultado',
          'Validaciones de flujo',
        ],
        links: [
          {
            label: 'Abrir portal',
            href: 'https://botonpagosuniandes.edu.ec/pagos',
            type: 'live',
          },
        ],
        images: [],
      },
      {
        id: 'aseticket',
        code: 'CASE-002',
        title: 'AseTicket',
        category: 'Sistema de tickets desplegado',
        status: 'production',
        problem:
          'La gestión de soporte necesitaba una forma ordenada de registrar solicitudes, dar seguimiento a tickets, controlar estados y facilitar la atención a usuarios o clientes.',
        solution:
          'Desarrollo y mejora de funcionalidades orientadas al registro, consulta y seguimiento de tickets, con una interfaz clara para operar solicitudes de soporte.',
        role: 'Apoyo full stack en vistas, consumo de servicios, validaciones de formularios, ajustes de interfaz y mejoras de experiencia de usuario.',
        impact:
          'Mayor trazabilidad de solicitudes, organización del soporte y mejor visibilidad del estado de atención.',
        stack: [
          'Angular',
          'TypeScript',
          'TailwindCSS',
          'Java',
          'Jakarta EE',
          'Oracle',
          'REST APIs',
        ],
        highlights: [
          'Registro de tickets',
          'Seguimiento de solicitudes',
          'Estados del proceso',
          'Interfaz operativa',
          'Validaciones de formularios',
          'Trazabilidad de atención',
        ],
        links: [
          {
            label: 'Abrir sistema',
            href: 'https://asecom.com.ec:9443/login',
            type: 'live',
          },
        ],
        images: [],
      },
      {
        id: 'eeasa-pasantias',
        code: 'CASE-003',
        title: 'Sistema de Pasantías EEASA',
        category: 'Sistema institucional de intranet',
        status: 'intranet',
        problem:
          'El proceso de pasantías necesitaba seguimiento, monitoreo y mejoras continuas para mantener un flujo más ordenado de actividades, validaciones y comunicación entre actores internos.',
        solution:
          'Monitoreo, revisión y mejora progresiva del módulo de pasantías, apoyando en ajustes de flujo, validación de estados, organización de información y documentación técnica.',
        role: 'Monitoreo del sistema, revisión de funcionamiento, apoyo en mejoras, análisis de incidencias, documentación y seguimiento de procesos internos.',
        impact:
          'Mayor control del flujo de pasantías, mejor seguimiento de actividades y soporte a procesos institucionales internos.',
        stack: ['Java', 'PL/SQL', 'Oracle', 'HTML/CSS', 'Sistema institucional', 'Intranet'],
        highlights: [
          'Monitoreo de actividades',
          'Seguimiento de estados',
          'Validación de procesos internos',
          'Mejoras sobre módulo existente',
          'Documentación técnica',
          'Soporte a flujo institucional',
        ],
        links: [],
        images: [
          {
            src: '/images/projects/eeasa-pasantias-01.png',
            alt: 'Captura del sistema de pasantías EEASA',
          },
          {
            src: '/images/projects/eeasa-pasantias-02.png',
            alt: 'Vista interna del módulo de pasantías EEASA',
          },
        ],
      },
      {
        id: 'asefin-internal-system',
        code: 'CASE-004',
        title: 'Sistema Financiero Interno ASEFIN',
        category: 'Sistema financiero interno en desarrollo',
        status: 'development',
        problem:
          'La cooperativa requiere mejorar y modernizar módulos internos relacionados con procesos financieros, administración de clientes y operaciones internas.',
        solution:
          'Desarrollo progresivo de funcionalidades internas con Angular, Java y Oracle, priorizando estructura clara, pantallas mantenibles e integración con servicios existentes.',
        role: 'Apoyo full stack en construcción de pantallas, consumo de endpoints, validaciones, servicios Java, consultas Oracle y documentación técnica.',
        impact:
          'Mejora progresiva de mantenibilidad, trazabilidad y consistencia visual dentro de módulos financieros internos.',
        stack: [
          'Angular',
          'TypeScript',
          'TailwindCSS',
          'Java',
          'Spring Boot',
          'Oracle',
          'REST APIs',
        ],
        highlights: [
          'Módulos internos',
          'Pantallas administrativas',
          'Consumo de servicios',
          'Validaciones de datos',
          'Consultas Oracle',
          'Diseño empresarial',
        ],
        links: [],
        images: [],
      },
      {
        id: 'asefin-client-portal',
        code: 'CASE-005',
        title: 'Portal de Cliente ASEFIN',
        category: 'Portal de cliente en desarrollo',
        status: 'development',
        problem:
          'Los clientes necesitan un portal más claro para consultar información, acceder a servicios digitales y realizar operaciones de forma guiada.',
        solution:
          'Desarrollo pendiente y progresivo de un portal orientado al cliente, con enfoque en experiencia de usuario, seguridad, consulta de información e integración con servicios financieros.',
        role: 'Apoyo en diseño de interfaz, estructura de componentes, integración frontend/backend y definición de flujos para el portal.',
        impact:
          'Proyecto en desarrollo con potencial de mejorar el acceso digital del cliente y reducir fricción en procesos de consulta y autogestión.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Java', 'Spring Boot', 'JWT', 'Oracle'],
        highlights: [
          'Portal orientado al cliente',
          'Diseño responsive',
          'Flujos de consulta',
          'Integración con backend',
          'Seguridad con JWT',
          'Componentes reutilizables',
        ],
        links: [],
        images: [],
      },
      {
        id: 'university-projects',
        code: 'CASE-006',
        title: 'Proyectos Universitarios',
        category: 'Proyectos académicos',
        status: 'academic',
        problem:
          'Durante la carrera se desarrollaron proyectos académicos para aplicar conceptos de programación, bases de datos, ingeniería de software, seguridad y documentación técnica.',
        solution:
          'Construcción de ejercicios, prototipos, informes y prácticas orientadas a reforzar habilidades técnicas y metodológicas.',
        role: 'Desarrollo, análisis, documentación, pruebas y presentación de proyectos en el contexto universitario.',
        impact:
          'Fortalecimiento de bases técnicas, criterio de documentación y práctica en construcción de soluciones de software.',
        stack: ['Java', 'Angular', 'SQL', 'Bases de datos', 'Documentación', 'OWASP ZAP'],
        highlights: [
          'Prototipos académicos',
          'Prácticas de seguridad',
          'Documentación técnica',
          'Modelado de datos',
          'Programación web',
          'Informes universitarios',
        ],
        links: [],
        images: [],
      },
      {
        id: 'portfolio-bryan-dev',
        code: 'CASE-007',
        title: 'Portafolio Interactivo Bryan Dev',
        category: 'Proyecto personal profesional',
        status: 'portfolio',
        problem:
          'Un portafolio tradicional no comunicaba correctamente habilidad técnica, creatividad y experiencia real en proyectos.',
        solution:
          'Diseño de una experiencia bilingüe interactiva con chat inicial, warnings, transición glitch, islas técnicas, módulos especializados y easter egg.',
        role: 'Concepto de producto, diseño UI, implementación Angular, estilos con Tailwind, planificación de animaciones y documentación.',
        impact:
          'Presentación profesional memorable sin perder claridad técnica ni facilidad para reclutadores.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'GSAP', 'Signals', 'Responsive UI'],
        highlights: [
          'Intro cinematográfica',
          'Experience Mode',
          'Islas técnicas',
          'Project Vault',
          'Easter egg 16-bit',
          'Diseño bilingüe',
        ],
        links: [
          {
            label: 'Ver GitHub',
            href: 'https://github.com/SafeBryan/portfolio-bryan-dev',
            type: 'repo',
          },
        ],
        images: [],
      },
    ];
  }

  private getProjectsEn(): ProjectCase[] {
    return [
      {
        id: 'uniandes-payment-button',
        code: 'CASE-001',
        title: 'UNIANDES Payment Button',
        category: 'Deployed academic system',
        status: 'production',
        problem:
          'Students needed a clear platform to review pending amounts, select payment concepts and continue the online academic transaction process.',
        solution:
          'Contributed to improving the payment portal by integrating debt consultation, document selection, validations, payment methods, confirmation and result views.',
        role: 'Frontend development with Angular, backend service integration, payment state handling, visual validations, responsive improvements and payment gateway support.',
        impact:
          'Improved student experience, clearer payment selection and support for a critical institutional process.',
        stack: [
          'Angular',
          'TypeScript',
          'TailwindCSS',
          'Java/Jakarta EE',
          'Oracle',
          'REST APIs',
          'Nuvei/Paymentez',
        ],
        highlights: [
          'Academic debt consultation',
          'Payment document selection',
          'Payment gateway integration',
          'Transaction confirmation',
          'Result screens',
          'Flow validations',
        ],
        links: [
          {
            label: 'Open portal',
            href: 'https://botonpagosuniandes.edu.ec/pagos',
            type: 'live',
          },
        ],
        images: [],
      },
      {
        id: 'aseticket',
        code: 'CASE-002',
        title: 'AseTicket',
        category: 'Deployed ticketing system',
        status: 'production',
        problem:
          'Support management needed an organized way to register requests, track tickets, control states and assist users or clients.',
        solution:
          'Developed and improved features for ticket registration, consultation and tracking, with a clear interface for support operations.',
        role: 'Full stack support in screens, service consumption, form validations, interface adjustments and user experience improvements.',
        impact:
          'Improved request traceability, support organization and visibility of ticket status.',
        stack: [
          'Angular',
          'TypeScript',
          'TailwindCSS',
          'Java',
          'Jakarta EE',
          'Oracle',
          'REST APIs',
        ],
        highlights: [
          'Ticket registration',
          'Request tracking',
          'Process states',
          'Operational interface',
          'Form validations',
          'Support traceability',
        ],
        links: [
          {
            label: 'Open system',
            href: 'https://asecom.com.ec:9443/login',
            type: 'live',
          },
        ],
        images: [],
      },
      {
        id: 'eeasa-pasantias',
        code: 'CASE-003',
        title: 'EEASA Internship System',
        category: 'Institutional intranet system',
        status: 'intranet',
        problem:
          'The internship process required monitoring and continuous improvements to keep a more organized flow of activities, validations and internal communication.',
        solution:
          'Monitored, reviewed and progressively improved the internship module, supporting flow adjustments, state validation, information organization and technical documentation.',
        role: 'System monitoring, functionality review, improvement support, incident analysis, documentation and internal process tracking.',
        impact:
          'Improved control of the internship flow, better activity tracking and support for internal institutional processes.',
        stack: ['Java', 'PL/SQL', 'Oracle', 'HTML/CSS', 'Institutional system', 'Intranet'],
        highlights: [
          'Activity monitoring',
          'State tracking',
          'Internal process validation',
          'Improvements on existing module',
          'Technical documentation',
          'Institutional flow support',
        ],
        links: [],
        images: [
          {
            src: '/images/projects/eeasa-pasantias-01.png',
            alt: 'Screenshot of the EEASA internship system',
          },
          {
            src: '/images/projects/eeasa-pasantias-02.png',
            alt: 'Internal view of the EEASA internship module',
          },
        ],
      },
      {
        id: 'asefin-internal-system',
        code: 'CASE-004',
        title: 'ASEFIN Internal Financial System',
        category: 'Internal financial system in development',
        status: 'development',
        problem:
          'The cooperative requires improvements and modernization of internal modules related to financial processes, client administration and internal operations.',
        solution:
          'Progressive development of internal features with Angular, Java and Oracle, prioritizing clear structure, maintainable screens and integration with existing services.',
        role: 'Full stack support in screen development, endpoint consumption, validations, Java services, Oracle queries and technical documentation.',
        impact:
          'Progressive improvement of maintainability, traceability and visual consistency within internal financial modules.',
        stack: [
          'Angular',
          'TypeScript',
          'TailwindCSS',
          'Java',
          'Spring Boot',
          'Oracle',
          'REST APIs',
        ],
        highlights: [
          'Internal modules',
          'Administrative screens',
          'Service consumption',
          'Data validations',
          'Oracle queries',
          'Enterprise design',
        ],
        links: [],
        images: [],
      },
      {
        id: 'asefin-client-portal',
        code: 'CASE-005',
        title: 'ASEFIN Client Portal',
        category: 'Client portal in development',
        status: 'development',
        problem:
          'Clients need a clearer portal to consult information, access digital services and complete guided operations.',
        solution:
          'Ongoing development of a client-oriented portal focused on user experience, security, information consultation and integration with financial services.',
        role: 'Support in UI design, component structure, frontend/backend integration and flow definition for the portal.',
        impact:
          'Ongoing project with potential to improve client digital access and reduce friction in consultation and self-service processes.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Java', 'Spring Boot', 'JWT', 'Oracle'],
        highlights: [
          'Client-oriented portal',
          'Responsive design',
          'Consultation flows',
          'Backend integration',
          'JWT security',
          'Reusable components',
        ],
        links: [],
        images: [],
      },
      {
        id: 'university-projects',
        code: 'CASE-006',
        title: 'University Projects',
        category: 'Academic projects',
        status: 'academic',
        problem:
          'During my degree, academic projects were developed to apply concepts of programming, databases, software engineering, security and technical documentation.',
        solution:
          'Built exercises, prototypes, reports and practices focused on strengthening technical and methodological skills.',
        role: 'Development, analysis, documentation, testing and presentation of projects in the university context.',
        impact:
          'Strengthened technical foundations, documentation criteria and practice in building software solutions.',
        stack: ['Java', 'Angular', 'SQL', 'Databases', 'Documentation', 'OWASP ZAP'],
        highlights: [
          'Academic prototypes',
          'Security practices',
          'Technical documentation',
          'Data modeling',
          'Web programming',
          'University reports',
        ],
        links: [],
        images: [],
      },
      {
        id: 'portfolio-bryan-dev',
        code: 'CASE-007',
        title: 'Interactive Portfolio Bryan Dev',
        category: 'Personal professional project',
        status: 'portfolio',
        problem:
          'A traditional portfolio would not properly communicate technical skill, creativity and real project experience.',
        solution:
          'Designed an interactive bilingual experience with chat intro, warning sequence, glitch transition, technical islands, specialized modules and an easter egg.',
        role: 'Product concept, UI design, Angular implementation, Tailwind styling, animation planning and documentation.',
        impact:
          'Creates a memorable professional presentation while keeping the content clear, technical and recruiter-friendly.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'GSAP', 'Signals', 'Responsive UI'],
        highlights: [
          'Cinematic intro',
          'Experience Mode',
          'Technical islands',
          'Project Vault',
          '16-bit easter egg',
          'Bilingual design',
        ],
        links: [
          {
            label: 'View GitHub',
            href: 'https://github.com/SafeBryan/portfolio-bryan-dev',
            type: 'repo',
          },
        ],
        images: [],
      },
    ];
  }
}
