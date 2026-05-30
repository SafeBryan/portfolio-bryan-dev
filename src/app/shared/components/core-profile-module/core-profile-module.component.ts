import { Component, Input, computed } from '@angular/core';

type PortfolioLanguage = 'ES' | 'EN';

interface HighlightItem {
  label: string;
  value: string;
}

interface StackGroup {
  title: string;
  items: string[];
}

interface ExperienceItem {
  company: string;
  role: string;
  description: string;
}

@Component({
  selector: 'app-core-profile-module',
  standalone: true,
  templateUrl: './core-profile-module.component.html',
})
export class CoreProfileModuleComponent {
  @Input({ required: true }) language!: PortfolioLanguage;

  profileImage = 'images/profile/bryan-profile.jpg';

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Professional Digital Identity',
        name: 'Bryan Pazmiño',
        fullName: 'Bryan Javier Pazmiño Córdova',
        role: 'Junior Full Stack Developer',
        location: 'Ambato, Ecuador',
        availability: 'Available for internships, junior roles and professional opportunities',
        headline:
          'I build enterprise web applications focused on clean interfaces, secure APIs, traceable processes and real user needs.',
        summary:
          'Software Engineering student at Universidad Técnica de Ambato with practical experience in full stack development for financial, educational and administrative systems. My profile combines Angular frontend development, Java backend services, database work with Oracle/PostgreSQL and a growing focus on security, deployment and software quality.',
        imageAlt: 'Professional photo of Bryan Pazmiño',
        quickLabel: 'Quick profile',
        stackLabel: 'Main stack',
        experienceLabel: 'Real experience',
        focusLabel: 'Professional focus',
        actions: {
          cv: 'Download CV',
          github: 'GitHub',
          linkedin: 'LinkedIn',
          contact: 'Contact',
        },
        highlights: [
          { label: 'Role', value: 'Junior Full Stack Developer' },
          { label: 'University', value: 'Software Engineering · UTA' },
          { label: 'Location', value: 'Ambato, Ecuador' },
          { label: 'Focus', value: 'Enterprise web systems' },
        ] as HighlightItem[],
        stack: [
          {
            title: 'Frontend',
            items: ['Angular', 'TypeScript', 'TailwindCSS', 'Signals', 'Responsive UI'],
          },
          {
            title: 'Backend',
            items: ['Java', 'Spring Boot', 'Jakarta EE', 'REST APIs', 'JWT'],
          },
          {
            title: 'Database',
            items: ['Oracle', 'PostgreSQL', 'SQL', 'PL/SQL', 'Data Modeling'],
          },
          {
            title: 'Security & Deploy',
            items: ['OWASP', 'CORS', 'Nginx', 'Docker', 'Linux'],
          },
        ] as StackGroup[],
        experience: [
          {
            company: 'Asemática',
            role: 'Junior Full Stack Developer',
            description:
              'Development and maintenance of web modules for financial, educational and administrative environments.',
          },
          {
            company: 'EEASA / SISGERH',
            role: 'Development Intern / Project Experience',
            description:
              'Support in analysis, development and documentation of internal systems focused on process management and traceability.',
          },
          {
            company: 'Universidad Técnica de Ambato',
            role: 'Software Engineering Student',
            description:
              'Academic training focused on software development, systems analysis, databases and web applications.',
          },
        ] as ExperienceItem[],
        focus: [
          'Clean and responsive enterprise interfaces',
          'Secure REST APIs and authentication flows',
          'Traceable business processes',
          'Database-driven applications',
          'Documentation and maintainable structure',
        ],
      };
    }

    return {
      eyebrow: 'Identidad Digital Profesional',
      name: 'Bryan Pazmiño',
      fullName: 'Bryan Javier Pazmiño Córdova',
      role: 'Junior Full Stack Developer',
      location: 'Ambato, Ecuador',
      availability: 'Disponible para pasantías, roles junior y oportunidades profesionales',
      headline:
        'Construyo aplicaciones web empresariales con enfoque en interfaces limpias, APIs seguras, procesos trazables y necesidades reales de usuario.',
      summary:
        'Estudiante de Ingeniería en Software en la Universidad Técnica de Ambato, con experiencia práctica en desarrollo full stack para sistemas financieros, educativos y administrativos. Mi perfil combina desarrollo frontend con Angular, servicios backend con Java, trabajo con bases de datos Oracle/PostgreSQL y un enfoque creciente en seguridad, despliegue y calidad de software.',
      imageAlt: 'Foto profesional de Bryan Pazmiño',
      quickLabel: 'Perfil rápido',
      stackLabel: 'Stack principal',
      experienceLabel: 'Experiencia real',
      focusLabel: 'Enfoque profesional',
      actions: {
        cv: 'Descargar CV',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        contact: 'Contacto',
      },
      highlights: [
        { label: 'Rol', value: 'Junior Full Stack Developer' },
        { label: 'Universidad', value: 'Ingeniería en Software · UTA' },
        { label: 'Ubicación', value: 'Ambato, Ecuador' },
        { label: 'Enfoque', value: 'Sistemas web empresariales' },
      ] as HighlightItem[],
      stack: [
        {
          title: 'Frontend',
          items: ['Angular', 'TypeScript', 'TailwindCSS', 'Signals', 'Responsive UI'],
        },
        {
          title: 'Backend',
          items: ['Java', 'Spring Boot', 'Jakarta EE', 'REST APIs', 'JWT'],
        },
        {
          title: 'Base de datos',
          items: ['Oracle', 'PostgreSQL', 'SQL', 'PL/SQL', 'Modelado de datos'],
        },
        {
          title: 'Seguridad y despliegue',
          items: ['OWASP', 'CORS', 'Nginx', 'Docker', 'Linux'],
        },
      ] as StackGroup[],
      experience: [
        {
          company: 'Asemática',
          role: 'Junior Full Stack Developer',
          description:
            'Desarrollo y mantenimiento de módulos web para entornos financieros, educativos y administrativos.',
        },
        {
          company: 'EEASA / SISGERH',
          role: 'Development Intern / Project Experience',
          description:
            'Apoyo en análisis, desarrollo y documentación de sistemas internos enfocados en gestión de procesos y trazabilidad.',
        },
        {
          company: 'Universidad Técnica de Ambato',
          role: 'Estudiante de Ingeniería en Software',
          description:
            'Formación académica enfocada en desarrollo de software, análisis de sistemas, bases de datos y aplicaciones web.',
        },
      ] as ExperienceItem[],
      focus: [
        'Interfaces empresariales limpias y responsivas',
        'APIs REST seguras y flujos de autenticación',
        'Procesos de negocio trazables',
        'Aplicaciones conectadas a bases de datos',
        'Documentación y estructura mantenible',
      ],
    };
  });
}
