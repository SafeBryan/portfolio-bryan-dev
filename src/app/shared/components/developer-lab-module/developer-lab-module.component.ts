import { Component, Input, computed, signal } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface LabExperiment {
  id: string;
  code: string;
  title: string;
  category: string;
  type: 'component' | 'snippet' | 'security' | 'documentation' | 'architecture' | 'animation';
  status: 'stable' | 'testing' | 'prototype' | 'documented';
  description: string;
  outcome: string;
  stack: string[];
  notes: string[];
  preview: {
    label: string;
    lines: string[];
  };
}

interface LabMetric {
  label: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-developer-lab-module',
  standalone: true,
  templateUrl: './developer-lab-module.component.html',
})
export class DeveloperLabModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  selectedExperimentId = signal('angular-shells');

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Technical experimentation desk',
        title: 'Developer Lab',
        subtitle:
          'A professional lab for reusable components, snippets, UI experiments, security tests, architecture notes and technical documentation.',
        description:
          'This module shows the work that usually lives behind final projects: small experiments, reusable patterns, technical notes and prototypes that help me improve how I build software.',
        deskLabel: 'Experiment desk',
        selectedLabel: 'Selected experiment',
        outcomeLabel: 'Outcome',
        notesLabel: 'Lab notes',
        stackLabel: 'Tools used',
        previewLabel: 'Technical preview',
        metricsLabel: 'Lab signals',
        metrics: [
          {
            label: 'Reusable',
            value: 'Patterns',
            description: 'Components and structures designed to be reused across features.',
          },
          {
            label: 'Documented',
            value: 'Notes',
            description: 'Technical decisions written to preserve context and reasoning.',
          },
          {
            label: 'Experimental',
            value: 'Safe',
            description: 'Ideas tested in isolation before becoming part of real modules.',
          },
        ] as LabMetric[],
        experiments: [
          {
            id: 'angular-shells',
            code: 'EXP-001',
            title: 'Angular Feature Shells',
            category: 'Reusable UI structure',
            type: 'component',
            status: 'stable',
            description:
              'Layout shells for complex screens with header, status messages, steps, actions and content slots.',
            outcome:
              'Improves consistency across large Angular features and prevents repeated layout code.',
            stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Standalone Components'],
            notes: [
              'Useful for create/edit flows',
              'Keeps large pages easier to read',
              'Allows shared loading and error states',
              'Improves visual consistency',
            ],
            preview: {
              label: 'component.structure',
              lines: [
                '<app-feature-shell>',
                '  <header>Title + actions</header>',
                '  <section>Status messages</section>',
                '  <ng-content />',
                '</app-feature-shell>',
              ],
            },
          },
          {
            id: 'responsive-tables',
            code: 'EXP-002',
            title: 'Responsive Enterprise Tables',
            category: 'Data presentation',
            type: 'component',
            status: 'stable',
            description:
              'Table patterns that become readable mobile cards when the available width is limited.',
            outcome:
              'Keeps business data usable on desktop and mobile without hiding important information.',
            stack: ['Angular', 'TailwindCSS', 'Responsive UI', 'CSS Grid'],
            notes: [
              'Desktop uses compact table rows',
              'Mobile converts records into cards',
              'Important labels remain visible',
              'Actions stay reachable',
            ],
            preview: {
              label: 'responsive.rule',
              lines: [
                'desktop: table-layout',
                'tablet: compact rows',
                'mobile: card records',
                'actions: always visible',
              ],
            },
          },
          {
            id: 'backend-snippets',
            code: 'EXP-003',
            title: 'Backend Endpoint Snippets',
            category: 'API patterns',
            type: 'snippet',
            status: 'documented',
            description:
              'Small backend patterns for controllers, services, DTO mapping, validations and repository calls.',
            outcome:
              'Helps standardize how backend flows are explained, implemented and documented.',
            stack: ['Java', 'Spring Boot', 'REST APIs', 'DTOs', 'Validation'],
            notes: [
              'Separate controller from service logic',
              'Validate input before business rules',
              'Return clear DTOs',
              'Avoid leaking internal details',
            ],
            preview: {
              label: 'api.pattern',
              lines: [
                'Controller receives request',
                'Service executes use case',
                'Repository reads persistence',
                'DTO returns clean response',
              ],
            },
          },
          {
            id: 'security-checks',
            code: 'EXP-004',
            title: 'Security Testing Notes',
            category: 'Security practice',
            type: 'security',
            status: 'testing',
            description:
              'Security notes from OWASP-style testing, access control checks, headers and error handling observations.',
            outcome: 'Improves security awareness when building and reviewing web applications.',
            stack: ['OWASP ZAP', 'HTTP', 'Headers', 'JWT', 'CORS'],
            notes: [
              'Check protected routes',
              'Review response headers',
              'Avoid verbose errors',
              'Validate authorization logic',
            ],
            preview: {
              label: 'security.checklist',
              lines: [
                '[AUTH] protected route',
                '[CORS] allowed origin',
                '[HEADER] no sniff',
                '[ERROR] no stack trace',
              ],
            },
          },
          {
            id: 'ui-animation',
            code: 'EXP-005',
            title: 'Controlled UI Animations',
            category: 'Interaction design',
            type: 'animation',
            status: 'prototype',
            description:
              'Small animation patterns for transitions, floating cards, module entry effects and cinematic moments.',
            outcome:
              'Adds personality without hurting clarity, performance or professional presentation.',
            stack: ['GSAP', 'CSS Transform', 'Opacity', 'TailwindCSS'],
            notes: [
              'Animate transform and opacity',
              'Avoid heavy filters',
              'Respect reduced motion',
              'Use animation only where it adds meaning',
            ],
            preview: {
              label: 'motion.rules',
              lines: [
                'opacity: safe',
                'transform: preferred',
                'blur: limited',
                'duration: controlled',
              ],
            },
          },
          {
            id: 'technical-docs',
            code: 'EXP-006',
            title: 'Technical Documentation Blocks',
            category: 'Documentation system',
            type: 'documentation',
            status: 'documented',
            description:
              'Reusable documentation structure for decisions, pending tasks, modules, commits and implementation notes.',
            outcome:
              'Prevents project context from getting lost and keeps development easier to continue.',
            stack: ['Markdown', 'LaTeX', 'README', 'Technical Writing'],
            notes: [
              'Document what was done',
              'Explain why decisions were made',
              'List what remains pending',
              'Keep commit messages clear',
            ],
            preview: {
              label: 'docs.block',
              lines: [
                'What was built?',
                'Why was it built this way?',
                'What changed?',
                'What remains pending?',
              ],
            },
          },
        ] as LabExperiment[],
      };
    }

    return {
      eyebrow: 'Mesa de experimentación técnica',
      title: 'Developer Lab',
      subtitle:
        'Un laboratorio profesional para componentes reutilizables, snippets, experimentos UI, pruebas de seguridad, notas de arquitectura y documentación técnica.',
      description:
        'Este módulo muestra el trabajo que normalmente vive detrás de los proyectos finales: pequeños experimentos, patrones reutilizables, notas técnicas y prototipos que me ayudan a mejorar la forma en que construyo software.',
      deskLabel: 'Mesa de experimentos',
      selectedLabel: 'Experimento seleccionado',
      outcomeLabel: 'Resultado',
      notesLabel: 'Notas de laboratorio',
      stackLabel: 'Herramientas usadas',
      previewLabel: 'Vista técnica',
      metricsLabel: 'Señales del laboratorio',
      metrics: [
        {
          label: 'Reutilizable',
          value: 'Patrones',
          description:
            'Componentes y estructuras pensadas para reutilizarse entre funcionalidades.',
        },
        {
          label: 'Documentado',
          value: 'Notas',
          description: 'Decisiones técnicas escritas para conservar contexto y razonamiento.',
        },
        {
          label: 'Experimental',
          value: 'Seguro',
          description: 'Ideas probadas de forma aislada antes de pasar a módulos reales.',
        },
      ] as LabMetric[],
      experiments: [
        {
          id: 'angular-shells',
          code: 'EXP-001',
          title: 'Angular Feature Shells',
          category: 'Estructura UI reutilizable',
          type: 'component',
          status: 'stable',
          description:
            'Shells de layout para pantallas complejas con encabezado, mensajes de estado, pasos, acciones y slots de contenido.',
          outcome:
            'Mejora la consistencia entre funcionalidades grandes de Angular y evita repetir estructura visual.',
          stack: ['Angular', 'TypeScript', 'TailwindCSS', 'Standalone Components'],
          notes: [
            'Útil para flujos de creación y edición',
            'Mantiene páginas grandes más legibles',
            'Permite estados de carga y error compartidos',
            'Mejora la consistencia visual',
          ],
          preview: {
            label: 'component.structure',
            lines: [
              '<app-feature-shell>',
              '  <header>Título + acciones</header>',
              '  <section>Mensajes de estado</section>',
              '  <ng-content />',
              '</app-feature-shell>',
            ],
          },
        },
        {
          id: 'responsive-tables',
          code: 'EXP-002',
          title: 'Tablas empresariales responsivas',
          category: 'Presentación de datos',
          type: 'component',
          status: 'stable',
          description:
            'Patrones de tabla que se convierten en cards legibles para móvil cuando el ancho disponible es limitado.',
          outcome:
            'Mantiene los datos empresariales usables en escritorio y celular sin ocultar información importante.',
          stack: ['Angular', 'TailwindCSS', 'Responsive UI', 'CSS Grid'],
          notes: [
            'En escritorio usa filas compactas',
            'En móvil convierte registros en cards',
            'Las etiquetas importantes siguen visibles',
            'Las acciones quedan accesibles',
          ],
          preview: {
            label: 'responsive.rule',
            lines: [
              'desktop: table-layout',
              'tablet: compact rows',
              'mobile: card records',
              'actions: always visible',
            ],
          },
        },
        {
          id: 'backend-snippets',
          code: 'EXP-003',
          title: 'Snippets de endpoints backend',
          category: 'Patrones API',
          type: 'snippet',
          status: 'documented',
          description:
            'Pequeños patrones backend para controladores, servicios, mapeo DTO, validaciones y llamadas a repositorios.',
          outcome:
            'Ayuda a estandarizar cómo se explican, implementan y documentan los flujos backend.',
          stack: ['Java', 'Spring Boot', 'REST APIs', 'DTOs', 'Validación'],
          notes: [
            'Separar controller de lógica de servicio',
            'Validar entrada antes de reglas de negocio',
            'Retornar DTOs claros',
            'Evitar filtrar detalles internos',
          ],
          preview: {
            label: 'api.pattern',
            lines: [
              'Controller recibe request',
              'Service ejecuta caso de uso',
              'Repository lee persistencia',
              'DTO retorna respuesta limpia',
            ],
          },
        },
        {
          id: 'security-checks',
          code: 'EXP-004',
          title: 'Notas de pruebas de seguridad',
          category: 'Práctica de seguridad',
          type: 'security',
          status: 'testing',
          description:
            'Notas de seguridad basadas en pruebas tipo OWASP, control de acceso, headers y observaciones de manejo de errores.',
          outcome: 'Mejora el criterio de seguridad al construir y revisar aplicaciones web.',
          stack: ['OWASP ZAP', 'HTTP', 'Headers', 'JWT', 'CORS'],
          notes: [
            'Revisar rutas protegidas',
            'Verificar headers de respuesta',
            'Evitar errores demasiado verbosos',
            'Validar lógica de autorización',
          ],
          preview: {
            label: 'security.checklist',
            lines: [
              '[AUTH] protected route',
              '[CORS] allowed origin',
              '[HEADER] no sniff',
              '[ERROR] no stack trace',
            ],
          },
        },
        {
          id: 'ui-animation',
          code: 'EXP-005',
          title: 'Animaciones UI controladas',
          category: 'Diseño de interacción',
          type: 'animation',
          status: 'prototype',
          description:
            'Pequeños patrones de animación para transiciones, cards flotantes, entrada de módulos y momentos cinematográficos.',
          outcome:
            'Agrega personalidad sin afectar claridad, rendimiento ni presentación profesional.',
          stack: ['GSAP', 'CSS Transform', 'Opacity', 'TailwindCSS'],
          notes: [
            'Animar transform y opacity',
            'Evitar filtros pesados',
            'Respetar reduced motion',
            'Usar animación solo cuando aporta significado',
          ],
          preview: {
            label: 'motion.rules',
            lines: [
              'opacity: safe',
              'transform: preferred',
              'blur: limited',
              'duration: controlled',
            ],
          },
        },
        {
          id: 'technical-docs',
          code: 'EXP-006',
          title: 'Bloques de documentación técnica',
          category: 'Sistema documental',
          type: 'documentation',
          status: 'documented',
          description:
            'Estructura reutilizable de documentación para decisiones, pendientes, módulos, commits y notas de implementación.',
          outcome:
            'Evita que el contexto del proyecto se pierda y facilita continuar el desarrollo.',
          stack: ['Markdown', 'LaTeX', 'README', 'Redacción técnica'],
          notes: [
            'Documentar qué se hizo',
            'Explicar por qué se decidió así',
            'Listar qué queda pendiente',
            'Mantener commits claros',
          ],
          preview: {
            label: 'docs.block',
            lines: [
              '¿Qué se construyó?',
              '¿Por qué se hizo así?',
              '¿Qué cambió?',
              '¿Qué queda pendiente?',
            ],
          },
        },
      ] as LabExperiment[],
    };
  });

  selectedExperiment = computed(() => {
    return (
      this.content().experiments.find(
        (experiment) => experiment.id === this.selectedExperimentId(),
      ) ?? this.content().experiments[0]
    );
  });

  selectExperiment(experimentId: string): void {
    this.selectedExperimentId.set(experimentId);
  }

  getTypeClass(type: LabExperiment['type']): string {
    const classes: Record<LabExperiment['type'], string> = {
      component: 'border-teal-300/25 bg-teal-300/[0.08] text-teal-200',
      snippet: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200',
      security: 'border-rose-300/25 bg-rose-300/[0.08] text-rose-200',
      documentation: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-200',
      architecture: 'border-violet-300/25 bg-violet-300/[0.08] text-violet-200',
      animation: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
    };

    return classes[type];
  }

  getStatusClass(status: LabExperiment['status']): string {
    const classes: Record<LabExperiment['status'], string> = {
      stable: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200',
      testing: 'border-sky-300/25 bg-sky-300/[0.08] text-sky-200',
      prototype: 'border-violet-300/25 bg-violet-300/[0.08] text-violet-200',
      documented: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-200',
    };

    return classes[status];
  }
}
