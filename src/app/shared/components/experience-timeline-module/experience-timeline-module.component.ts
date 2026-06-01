import { Component, Input, computed, signal } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface TimelineEvent {
  id: string;
  code: string;
  period: string;
  title: string;
  place: string;
  type: 'education' | 'internship' | 'work' | 'growth' | 'project';
  description: string;
  details: string[];
  stack: string[];
}

interface TimelineStat {
  label: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-experience-timeline-module',
  standalone: true,
  templateUrl: './experience-timeline-module.component.html',
})
export class ExperienceTimelineModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  selectedEventId = signal('uta-software');

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Professional route map',
        title: 'Experience Timeline',
        subtitle:
          'A synchronized path through university, internships, real work, complementary education and technical evolution.',
        description:
          'This module presents my growth as a developer as a route with milestones. Each node shows what I learned, where I applied it and how it connects with my current full stack profile.',
        routeLabel: 'Timeline route',
        selectedLabel: 'Selected milestone',
        detailsLabel: 'Key details',
        stackLabel: 'Related stack',
        statsLabel: 'Growth signals',
        mapStatus: 'route.synchronized = true',
        stats: [
          {
            label: 'Focus',
            value: 'Full Stack',
            description: 'Frontend, backend, database, security and deployment.',
          },
          {
            label: 'Context',
            value: 'Enterprise',
            description: 'Financial, educational and administrative systems.',
          },
          {
            label: 'Direction',
            value: 'Growth',
            description: 'Cleaner architecture, better UI and stronger security criteria.',
          },
        ] as TimelineStat[],
        events: [
          {
            id: 'uta-software',
            code: 'NODE-001',
            period: 'University path',
            title: 'Software Engineering',
            place: 'Universidad Técnica de Ambato',
            type: 'education',
            description:
              'Academic foundation in software engineering, programming, databases, software quality, web development and project documentation.',
            details: [
              'Software Engineering student',
              'Academic projects and technical reports',
              'Requirements, documentation and system design',
              'Continuous growth in frontend and backend development',
            ],
            stack: ['Software Engineering', 'Web Development', 'Databases', 'Documentation'],
          },
          {
            id: 'eeasa-sisgerh',
            code: 'NODE-002',
            period: 'Internship / project experience',
            title: 'SISGERH / Institutional systems',
            place: 'EEASA',
            type: 'internship',
            description:
              'Experience related to internal system processes, activity registration, institutional modules, traceability and technical documentation.',
            details: [
              'Support in analysis and documentation',
              'Understanding of institutional workflows',
              'Traceability-oriented process thinking',
              'Experience with real organizational needs',
            ],
            stack: ['Process Analysis', 'Documentation', 'Internal Systems', 'Traceability'],
          },
          {
            id: 'asematica-fullstack',
            code: 'NODE-003',
            period: 'Current professional experience',
            title: 'Junior Full Stack Developer',
            place: 'Asemática',
            type: 'work',
            description:
              'Development and maintenance of enterprise web applications for financial, educational and administrative environments.',
            details: [
              'Angular interfaces and reusable components',
              'Java/Spring and Jakarta EE backend support',
              'REST API integration',
              'Oracle/PostgreSQL data work',
              'Security, deployment and debugging tasks',
            ],
            stack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Oracle', 'REST APIs'],
          },
          {
            id: 'technical-growth',
            code: 'NODE-004',
            period: 'Technical evolution',
            title: 'Angular + Java + Oracle + Security',
            place: 'Professional stack',
            type: 'growth',
            description:
              'Technical consolidation around enterprise frontend, backend services, database modeling, authentication, security headers and deployment.',
            details: [
              'Frontend with Angular, Signals and TailwindCSS',
              'Backend services and APIs',
              'Database modeling and SQL/PLSQL logic',
              'Security criteria with JWT, CORS and OWASP ZAP',
            ],
            stack: ['Signals', 'TailwindCSS', 'JWT', 'CORS', 'OWASP ZAP', 'Docker', 'Nginx'],
          },
          {
            id: 'portfolio-dev',
            code: 'NODE-005',
            period: 'Personal technical product',
            title: 'Portfolio Bryan Dev',
            place: 'Interactive portfolio',
            type: 'project',
            description:
              'A bilingual interactive portfolio designed as a professional experience, with cinematic intro, technical islands and specialized modules.',
            details: [
              'Language Gate and Intro Chat',
              'System Warning Sequence',
              'Experience Mode with islands',
              'Specialized modules for frontend, backend, data, security and projects',
            ],
            stack: ['Angular', 'TypeScript', 'TailwindCSS', 'GSAP', 'Responsive UI'],
          },
        ] as TimelineEvent[],
      };
    }

    return {
      eyebrow: 'Mapa de ruta profesional',
      title: 'Experience Timeline',
      subtitle:
        'Una ruta sincronizada por universidad, pasantías, trabajo real, formación complementaria y evolución técnica.',
      description:
        'Este módulo presenta mi crecimiento como desarrollador mediante una ruta con hitos. Cada nodo muestra qué aprendí, dónde lo apliqué y cómo se conecta con mi perfil full stack actual.',
      routeLabel: 'Ruta de trayectoria',
      selectedLabel: 'Hito seleccionado',
      detailsLabel: 'Detalles clave',
      stackLabel: 'Stack relacionado',
      statsLabel: 'Señales de crecimiento',
      mapStatus: 'route.synchronized = true',
      stats: [
        {
          label: 'Enfoque',
          value: 'Full Stack',
          description: 'Frontend, backend, base de datos, seguridad y despliegue.',
        },
        {
          label: 'Contexto',
          value: 'Empresarial',
          description: 'Sistemas financieros, educativos y administrativos.',
        },
        {
          label: 'Dirección',
          value: 'Crecimiento',
          description: 'Mejor arquitectura, mejor UI y más criterio de seguridad.',
        },
      ] as TimelineStat[],
      events: [
        {
          id: 'uta-software',
          code: 'NODE-001',
          period: 'Ruta universitaria',
          title: 'Ingeniería en Software',
          place: 'Universidad Técnica de Ambato',
          type: 'education',
          description:
            'Base académica en ingeniería de software, programación, bases de datos, calidad de software, desarrollo web y documentación de proyectos.',
          details: [
            'Estudiante de Ingeniería en Software',
            'Proyectos académicos e informes técnicos',
            'Requisitos, documentación y diseño de sistemas',
            'Crecimiento continuo en frontend y backend',
          ],
          stack: ['Ingeniería de Software', 'Desarrollo Web', 'Bases de Datos', 'Documentación'],
        },
        {
          id: 'eeasa-sisgerh',
          code: 'NODE-002',
          period: 'Pasantía / experiencia de proyecto',
          title: 'SISGERH / Sistemas institucionales',
          place: 'EEASA',
          type: 'internship',
          description:
            'Experiencia relacionada con procesos de sistemas internos, registro de actividades, módulos institucionales, trazabilidad y documentación técnica.',
          details: [
            'Apoyo en análisis y documentación',
            'Comprensión de flujos institucionales',
            'Pensamiento orientado a trazabilidad',
            'Experiencia con necesidades reales de una organización',
          ],
          stack: ['Análisis de Procesos', 'Documentación', 'Sistemas Internos', 'Trazabilidad'],
        },
        {
          id: 'asematica-fullstack',
          code: 'NODE-003',
          period: 'Experiencia profesional actual',
          title: 'Junior Full Stack Developer',
          place: 'Asemática',
          type: 'work',
          description:
            'Desarrollo y mantenimiento de aplicaciones web empresariales para entornos financieros, educativos y administrativos.',
          details: [
            'Interfaces Angular y componentes reutilizables',
            'Apoyo backend con Java/Spring y Jakarta EE',
            'Integración con APIs REST',
            'Trabajo con Oracle/PostgreSQL',
            'Seguridad, despliegue y depuración',
          ],
          stack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Oracle', 'REST APIs'],
        },
        {
          id: 'technical-growth',
          code: 'NODE-004',
          period: 'Evolución técnica',
          title: 'Angular + Java + Oracle + Security',
          place: 'Stack profesional',
          type: 'growth',
          description:
            'Consolidación técnica alrededor de frontend empresarial, servicios backend, modelado de datos, autenticación, headers de seguridad y despliegue.',
          details: [
            'Frontend con Angular, Signals y TailwindCSS',
            'Servicios backend y APIs',
            'Modelado de datos y lógica SQL/PLSQL',
            'Criterio de seguridad con JWT, CORS y OWASP ZAP',
          ],
          stack: ['Signals', 'TailwindCSS', 'JWT', 'CORS', 'OWASP ZAP', 'Docker', 'Nginx'],
        },
        {
          id: 'portfolio-dev',
          code: 'NODE-005',
          period: 'Producto técnico personal',
          title: 'Portfolio Bryan Dev',
          place: 'Portafolio interactivo',
          type: 'project',
          description:
            'Portafolio bilingüe interactivo diseñado como experiencia profesional, con intro cinematográfica, islas técnicas y módulos especializados.',
          details: [
            'Language Gate e Intro Chat',
            'System Warning Sequence',
            'Experience Mode con islas',
            'Módulos especializados de frontend, backend, datos, seguridad y proyectos',
          ],
          stack: ['Angular', 'TypeScript', 'TailwindCSS', 'GSAP', 'Responsive UI'],
        },
      ] as TimelineEvent[],
    };
  });

  selectedEvent = computed(() => {
    return (
      this.content().events.find((event) => event.id === this.selectedEventId()) ??
      this.content().events[0]
    );
  });

  selectEvent(eventId: string): void {
    this.selectedEventId.set(eventId);
  }

  getTypeClass(type: TimelineEvent['type']): string {
    const classes: Record<TimelineEvent['type'], string> = {
      education: 'border-blue-300/25 bg-blue-300/[0.08] text-blue-200',
      internship: 'border-cyan-300/25 bg-cyan-300/[0.08] text-cyan-200',
      work: 'border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-200',
      growth: 'border-violet-300/25 bg-violet-300/[0.08] text-violet-200',
      project: 'border-amber-300/25 bg-amber-300/[0.08] text-amber-200',
    };

    return classes[type];
  }
}
