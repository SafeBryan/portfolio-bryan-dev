import { Component, Input, computed, signal } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface ProjectCase {
  id: string;
  code: string;
  title: string;
  category: string;
  status: 'production' | 'academic' | 'security' | 'portfolio' | 'internal';
  problem: string;
  solution: string;
  role: string;
  impact: string;
  stack: string[];
  highlights: string[];
}

@Component({
  selector: 'app-project-vault-module',
  standalone: true,
  templateUrl: './project-vault-module.component.html',
})
export class ProjectVaultModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  vaultUnlocked = signal(false);
  selectedProjectId = signal('uniandes-payments');

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Technical case vault',
        title: 'Project Vault',
        subtitle:
          'A digital vault of real and representative projects presented as technical case files.',
        description:
          'Each case file explains the problem, my contribution, the solution, the stack used and the impact of the work. The goal is to show not only what I built, but how I think as a developer.',
        lockedLabel: 'Vault locked',
        unlockButton: 'Unlock project vault',
        unlockedLabel: 'Access granted',
        caseFilesLabel: 'Case files loaded',
        selectedLabel: 'Selected case',
        problemLabel: 'Problem',
        solutionLabel: 'Solution',
        roleLabel: 'My role',
        impactLabel: 'Impact',
        stackLabel: 'Stack',
        highlightsLabel: 'Technical highlights',
        emptyState: 'Unlock the vault to inspect the technical case files.',
        projects: this.getProjectsEn(),
      };
    }

    return {
      eyebrow: 'Bóveda de casos técnicos',
      title: 'Project Vault',
      subtitle:
        'Una bóveda digital de proyectos reales y representativos presentados como expedientes técnicos.',
      description:
        'Cada expediente explica el problema, mi aporte, la solución implementada, el stack utilizado y el impacto del trabajo. La idea es mostrar no solo qué construí, sino cómo pienso como desarrollador.',
      lockedLabel: 'Bóveda bloqueada',
      unlockButton: 'Desbloquear bóveda',
      unlockedLabel: 'Acceso concedido',
      caseFilesLabel: 'Expedientes cargados',
      selectedLabel: 'Caso seleccionado',
      problemLabel: 'Problema',
      solutionLabel: 'Solución',
      roleLabel: 'Mi rol',
      impactLabel: 'Impacto',
      stackLabel: 'Stack',
      highlightsLabel: 'Puntos técnicos',
      emptyState: 'Desbloquea la bóveda para inspeccionar los expedientes técnicos.',
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
      academic: 'border-sky-300/25 bg-sky-300/[0.08] text-sky-200',
      security: 'border-rose-300/25 bg-rose-300/[0.08] text-rose-200',
      portfolio: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-200',
      internal: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
    };

    return classes[status];
  }

  private getProjectsEs(): ProjectCase[] {
    return [
      {
        id: 'uniandes-payments',
        code: 'CASE-001',
        title: 'Sistema de Pagos Académicos / Uniandes',
        category: 'Flujo de pagos empresarial',
        status: 'production',
        problem:
          'Los estudiantes necesitaban una forma más clara y segura de revisar deudas, seleccionar documentos y continuar el proceso de pago.',
        solution:
          'Construcción y mejora de flujos frontend conectados a servicios backend, con manejo de estado, validaciones, agrupación de deudas y selección de medios de pago.',
        role: 'Desarrollo frontend, integración con APIs, manejo de estados de interfaz, mejoras visuales y validación del flujo.',
        impact:
          'Mayor claridad en el proceso de pago, reducción de fricción para el usuario y mejor trazabilidad de documentos seleccionados.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Java/Jakarta EE', 'Oracle', 'REST APIs'],
        highlights: [
          'Visualización de deudas agrupadas',
          'Selección de documentos de pago',
          'Dashboard responsivo de estudiante',
          'Manejo de estado conectado a APIs',
        ],
      },
      {
        id: 'asefin-client-portal',
        code: 'CASE-002',
        title: 'Portal Financiero / ASEFIN',
        category: 'Sistema web financiero',
        status: 'production',
        problem:
          'Los módulos financieros requerían una gestión más clara de clientes, pantallas estructuradas e integración frontend/backend mantenible.',
        solution:
          'Implementación de vistas de clientes, formularios, pantallas de detalle e integraciones con servicios siguiendo una estructura orientada a procesos de negocio.',
        role: 'Apoyo full stack con pantallas Angular, servicios Java, acceso a datos Oracle y documentación técnica.',
        impact:
          'Mejor mantenibilidad, claridad para el usuario y consistencia entre módulos administrativos financieros.',
        stack: ['Angular', 'Java', 'Spring Boot', 'Oracle', 'JWT', 'REST APIs'],
        highlights: [
          'Módulo de detalle de cliente',
          'Formularios estructurados',
          'Secciones UI reutilizables',
          'Integración backend',
        ],
      },
      {
        id: 'client-relations-documents',
        code: 'CASE-003',
        title: 'Clientes, Relaciones y Documentos',
        category: 'Módulo de proceso empresarial',
        status: 'internal',
        problem:
          'Las relaciones de clientes y el manejo documental necesitaban separarse de estructuras legacy y representarse en un flujo más limpio.',
        solution:
          'Trabajo en pantallas y lógica de servicios para relaciones, garantías y documentos digitalizados mediante flujos empresariales validados.',
        role: 'Implementación frontend, consumo de endpoints backend, alineación de payloads y consistencia visual.',
        impact:
          'Mejor separación de responsabilidades, gestión más clara del proceso y mayor trazabilidad de datos.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Java', 'Oracle', 'JDBC'],
        highlights: [
          'Flujo de creación de relaciones',
          'Gestión documental UI',
          'Feedback de validaciones',
          'Diseño empresarial consistente',
        ],
      },
      {
        id: 'payment-orders-dashboard',
        code: 'CASE-004',
        title: 'Dashboard de Órdenes de Pago',
        category: 'Dashboard y analítica',
        status: 'internal',
        problem:
          'Las órdenes de pago requerían un dashboard compacto con KPIs, resumen de estados, ingresos mensuales y registros recientes.',
        solution:
          'Diseño de secciones de dashboard con gráficos, filtros, tablas responsivas y tarjetas visuales compactas.',
        role: 'Arquitectura frontend, UI de dashboard, consumo de servicios y diseño responsive.',
        impact:
          'Mejor visibilidad del estado de órdenes, resúmenes financieros y actividad reciente.',
        stack: ['Angular', 'Signals', 'ng2-charts', 'TypeScript', 'TailwindCSS', 'REST APIs'],
        highlights: [
          'Cards KPI',
          'Gráficos y resúmenes',
          'Tabla de órdenes recientes',
          'Filtros por fecha',
        ],
      },
      {
        id: 'owasp-zap-audit',
        code: 'CASE-005',
        title: 'Auditoría OWASP ZAP / Juice Shop',
        category: 'Práctica de seguridad',
        status: 'security',
        problem:
          'Una aplicación vulnerable debía analizarse mediante DAST, pruebas manuales y razonamiento basado en OWASP.',
        solution:
          'Ejecución de escaneos ZAP, revisión de alertas, validación de control de acceso y documentación de hallazgos con evidencias.',
        role: 'Pruebas de seguridad, recolección de evidencias, análisis de hallazgos y documentación orientada a remediación.',
        impact:
          'Fortalecimiento del criterio sobre riesgos web, control de acceso, headers, errores y validación.',
        stack: ['OWASP ZAP', 'Docker', 'Juice Shop', 'HTTP', 'Security Headers', 'Testing manual'],
        highlights: [
          'Baseline y full scan',
          'Pruebas de control de acceso',
          'Reporte con evidencias',
          'Análisis OWASP Top 10',
        ],
      },
      {
        id: 'portfolio-bryan-dev',
        code: 'CASE-006',
        title: 'Portafolio Interactivo Bryan Dev',
        category: 'Producto técnico personal',
        status: 'portfolio',
        problem:
          'Un portafolio tradicional no comunicaba correctamente habilidad técnica, creatividad y experiencia real en proyectos.',
        solution:
          'Diseño de una experiencia bilingüe interactiva con chat inicial, warnings, transición glitch, islas técnicas y módulos especializados.',
        role: 'Concepto de producto, diseño UI, implementación Angular, estilos con Tailwind, planificación de animaciones y documentación.',
        impact:
          'Presentación profesional memorable sin perder claridad técnica ni facilidad para reclutadores.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'GSAP', 'Signals', 'Responsive UI'],
        highlights: [
          'Intro cinematográfica',
          'Experience Mode',
          'Islas técnicas',
          'Sistema Project Vault',
        ],
      },
    ];
  }

  private getProjectsEn(): ProjectCase[] {
    return [
      {
        id: 'uniandes-payments',
        code: 'CASE-001',
        title: 'Academic Payment System / Uniandes',
        category: 'Enterprise payment flow',
        status: 'production',
        problem:
          'Students needed a clearer and safer way to review debts, select documents and continue through the payment process.',
        solution:
          'Built and improved frontend flows connected to backend services, with state handling, validation, debt grouping and payment method selection.',
        role: 'Frontend development, API integration, UI state handling, visual improvements and flow validation.',
        impact:
          'Improved clarity, reduced friction in the payment process and strengthened traceability of selected documents.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Java/Jakarta EE', 'Oracle', 'REST APIs'],
        highlights: [
          'Grouped debt visualization',
          'Payment document selection',
          'Responsive student dashboard',
          'API-driven state handling',
        ],
      },
      {
        id: 'asefin-client-portal',
        code: 'CASE-002',
        title: 'Financial Client Portal / ASEFIN',
        category: 'Financial web system',
        status: 'production',
        problem:
          'Financial modules required cleaner client management, structured data screens and maintainable frontend/backend integration.',
        solution:
          'Implemented client views, forms, detail screens and service integrations following a business-oriented structure.',
        role: 'Full stack support with Angular screens, Java services, Oracle data access and technical documentation.',
        impact:
          'Improved maintainability, user clarity and consistency across financial administration modules.',
        stack: ['Angular', 'Java', 'Spring Boot', 'Oracle', 'JWT', 'REST APIs'],
        highlights: [
          'Client detail module',
          'Structured forms',
          'Reusable UI sections',
          'Backend integration',
        ],
      },
      {
        id: 'client-relations-documents',
        code: 'CASE-003',
        title: 'Clients, Relations and Documents',
        category: 'Business process module',
        status: 'internal',
        problem:
          'Client relationships and document handling needed to be separated from legacy structures and represented in a cleaner workflow.',
        solution:
          'Worked on screens and service logic for relationships, guarantees and digitalized documents using validated business flows.',
        role: 'Frontend implementation, backend endpoint consumption, payload alignment and UI consistency.',
        impact:
          'Better separation of responsibilities, clearer process management and improved data traceability.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Java', 'Oracle', 'JDBC'],
        highlights: [
          'Relationship creation flow',
          'Document management UI',
          'Validation feedback',
          'Consistent enterprise design',
        ],
      },
      {
        id: 'payment-orders-dashboard',
        code: 'CASE-004',
        title: 'Payment Orders Dashboard',
        category: 'Dashboard and analytics',
        status: 'internal',
        problem:
          'Payment orders required a compact dashboard with KPIs, status summaries, monthly income and recent records.',
        solution:
          'Designed dashboard sections with charts, filters, responsive tables and compact visual cards.',
        role: 'Frontend architecture, dashboard UI, service consumption and responsive layout design.',
        impact:
          'Improved visibility of payment order status, financial summaries and recent activity.',
        stack: ['Angular', 'Signals', 'ng2-charts', 'TypeScript', 'TailwindCSS', 'REST APIs'],
        highlights: ['KPI cards', 'Charts and summaries', 'Recent orders table', 'Date filters'],
      },
      {
        id: 'owasp-zap-audit',
        code: 'CASE-005',
        title: 'OWASP ZAP Security Audit',
        category: 'Security practice',
        status: 'security',
        problem:
          'A vulnerable web application needed to be analyzed using DAST, manual testing and OWASP-based reasoning.',
        solution:
          'Executed ZAP scans, reviewed alerts, validated access control behavior and documented findings with evidence.',
        role: 'Security testing, evidence collection, analysis of findings and remediation-oriented documentation.',
        impact:
          'Strengthened understanding of web security risks, access control, headers, errors and validation.',
        stack: ['OWASP ZAP', 'Docker', 'Juice Shop', 'HTTP', 'Security Headers', 'Manual Testing'],
        highlights: [
          'Baseline and full scan',
          'Access control testing',
          'Evidence-based report',
          'OWASP Top 10 reasoning',
        ],
      },
      {
        id: 'portfolio-bryan-dev',
        code: 'CASE-006',
        title: 'Interactive Portfolio Bryan Dev',
        category: 'Personal technical product',
        status: 'portfolio',
        problem:
          'A traditional portfolio would not properly communicate technical skill, creativity and real project experience.',
        solution:
          'Designed an interactive bilingual experience with chat intro, warning sequence, glitch transition, technical islands and specialized modules.',
        role: 'Product concept, UI design, Angular implementation, Tailwind styling, animation planning and documentation.',
        impact:
          'Creates a memorable professional presentation while keeping the content clear, technical and recruiter-friendly.',
        stack: ['Angular', 'TypeScript', 'TailwindCSS', 'GSAP', 'Signals', 'Responsive UI'],
        highlights: [
          'Cinematic intro',
          'Experience Mode',
          'Technical islands',
          'Project Vault system',
        ],
      },
    ];
  }
}
