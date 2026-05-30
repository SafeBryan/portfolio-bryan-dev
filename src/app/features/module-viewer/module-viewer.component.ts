import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  computed,
} from '@angular/core';
import { gsap } from 'gsap';

type PortfolioLanguage = 'ES' | 'EN';

interface ModuleData {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  status: string;
  theme:
    | 'core'
    | 'frontend'
    | 'backend'
    | 'database'
    | 'security'
    | 'projects'
    | 'timeline'
    | 'lab'
    | 'contact';
}

@Component({
  selector: 'app-module-viewer',
  standalone: true,
  templateUrl: './module-viewer.component.html',
})
export class ModuleViewerComponent implements AfterViewInit {
  @Input({ required: true }) language!: PortfolioLanguage;
  @Input({ required: true }) moduleId!: string;

  @Output() closeViewer = new EventEmitter<void>();

  @ViewChild('viewerPanel') viewerPanel?: ElementRef<HTMLElement>;

  moduleData = computed<ModuleData>(() => {
    const modulesEs: Record<string, ModuleData> = {
      'core-profile': {
        id: 'core-profile',
        eyebrow: 'Identidad técnica',
        title: 'Core Profile',
        subtitle:
          'Una credencial profesional para presentar quién soy, qué construyo y hacia dónde está enfocado mi perfil.',
        status: 'Profile loaded',
        theme: 'core',
      },
      'frontend-lab': {
        id: 'frontend-lab',
        eyebrow: 'Laboratorio visual',
        title: 'Frontend Lab',
        subtitle:
          'Interfaces limpias, componentes reutilizables, formularios, dashboards y experiencia de usuario con Angular.',
        status: 'UI components detected',
        theme: 'frontend',
      },
      'backend-engine': {
        id: 'backend-engine',
        eyebrow: 'Motor de servicios',
        title: 'Backend Engine',
        subtitle:
          'APIs REST, arquitectura por capas, servicios, validaciones, autenticación y trazabilidad backend.',
        status: 'API engine online',
        theme: 'backend',
      },
      'database-vault': {
        id: 'database-vault',
        eyebrow: 'Bóveda de datos',
        title: 'Database Vault',
        subtitle:
          'Modelado, consultas SQL, PL/SQL, repositorios, integridad de datos y estructuras empresariales.',
        status: 'Data vault secured',
        theme: 'database',
      },
      'security-gate': {
        id: 'security-gate',
        eyebrow: 'Control de acceso',
        title: 'Security Gate',
        subtitle:
          'JWT, CORS, OWASP, headers, validación de entradas, control de acceso y pruebas con ZAP.',
        status: 'Security layer active',
        theme: 'security',
      },
      'project-vault': {
        id: 'project-vault',
        eyebrow: 'Expedientes técnicos',
        title: 'Project Vault',
        subtitle:
          'Casos reales presentados por problema, solución, rol, stack, impacto y evidencias.',
        status: 'Case files ready',
        theme: 'projects',
      },
      timeline: {
        id: 'timeline',
        eyebrow: 'Ruta profesional',
        title: 'Experience Timeline',
        subtitle:
          'Universidad, pasantías, experiencia laboral, formación complementaria y evolución técnica.',
        status: 'Timeline synchronized',
        theme: 'timeline',
      },
      'developer-lab': {
        id: 'developer-lab',
        eyebrow: 'Zona experimental',
        title: 'Developer Lab',
        subtitle:
          'Componentes, prácticas, snippets, pruebas, documentación técnica y experimentos de desarrollo.',
        status: 'Experiments loaded',
        theme: 'lab',
      },
      'contact-portal': {
        id: 'contact-portal',
        eyebrow: 'Canal profesional',
        title: 'Contact Portal',
        subtitle: 'Correo, GitHub, LinkedIn, CV y disponibilidad para oportunidades profesionales.',
        status: 'Connection available',
        theme: 'contact',
      },
    };

    const modulesEn: Record<string, ModuleData> = {
      'core-profile': {
        id: 'core-profile',
        eyebrow: 'Technical identity',
        title: 'Core Profile',
        subtitle:
          'A professional digital credential showing who I am, what I build and where my profile is focused.',
        status: 'Profile loaded',
        theme: 'core',
      },
      'frontend-lab': {
        id: 'frontend-lab',
        eyebrow: 'Visual laboratory',
        title: 'Frontend Lab',
        subtitle:
          'Clean interfaces, reusable components, forms, dashboards and user experience with Angular.',
        status: 'UI components detected',
        theme: 'frontend',
      },
      'backend-engine': {
        id: 'backend-engine',
        eyebrow: 'Service engine',
        title: 'Backend Engine',
        subtitle:
          'REST APIs, layered architecture, services, validations, authentication and backend traceability.',
        status: 'API engine online',
        theme: 'backend',
      },
      'database-vault': {
        id: 'database-vault',
        eyebrow: 'Data vault',
        title: 'Database Vault',
        subtitle:
          'Modeling, SQL queries, PL/SQL, repositories, data integrity and enterprise structures.',
        status: 'Data vault secured',
        theme: 'database',
      },
      'security-gate': {
        id: 'security-gate',
        eyebrow: 'Access control',
        title: 'Security Gate',
        subtitle: 'JWT, CORS, OWASP, headers, input validation, access control and ZAP testing.',
        status: 'Security layer active',
        theme: 'security',
      },
      'project-vault': {
        id: 'project-vault',
        eyebrow: 'Technical case files',
        title: 'Project Vault',
        subtitle: 'Real cases presented by problem, solution, role, stack, impact and evidence.',
        status: 'Case files ready',
        theme: 'projects',
      },
      timeline: {
        id: 'timeline',
        eyebrow: 'Professional path',
        title: 'Experience Timeline',
        subtitle:
          'University, internships, work experience, complementary education and technical growth.',
        status: 'Timeline synchronized',
        theme: 'timeline',
      },
      'developer-lab': {
        id: 'developer-lab',
        eyebrow: 'Experimental zone',
        title: 'Developer Lab',
        subtitle:
          'Components, practices, snippets, tests, technical documentation and development experiments.',
        status: 'Experiments loaded',
        theme: 'lab',
      },
      'contact-portal': {
        id: 'contact-portal',
        eyebrow: 'Professional channel',
        title: 'Contact Portal',
        subtitle: 'Email, GitHub, LinkedIn, CV and availability for professional opportunities.',
        status: 'Connection available',
        theme: 'contact',
      },
    };

    const modules = this.language === 'EN' ? modulesEn : modulesEs;

    return modules[this.moduleId] ?? modules['core-profile'];
  });

  labels = computed(() => {
    if (this.language === 'EN') {
      return {
        back: 'Back to map',
        role: 'Junior Full Stack Developer',
        location: 'Ambato, Ecuador',
        focus: 'Enterprise web systems · Angular · Java · Oracle · Security',
        description:
          'I build enterprise web applications focused on clean interfaces, secure APIs, traceable processes and real user needs.',
        stack: 'Main stack',
        status: 'Current focus',
        placeholder:
          'This module has its own visual identity. The full interaction will be built in the next steps.',
      };
    }

    return {
      back: 'Volver al mapa',
      role: 'Junior Full Stack Developer',
      location: 'Ambato, Ecuador',
      focus: 'Sistemas web empresariales · Angular · Java · Oracle · Seguridad',
      description:
        'Construyo aplicaciones web empresariales con enfoque en interfaces limpias, APIs seguras, procesos trazables y necesidades reales de usuario.',
      stack: 'Stack principal',
      status: 'Enfoque actual',
      placeholder:
        'Este módulo ya tiene identidad visual propia. La interacción completa se construirá en los próximos pasos.',
    };
  });

  ngAfterViewInit(): void {
    if (!this.viewerPanel) return;

    gsap.from(this.viewerPanel.nativeElement, {
      opacity: 0,
      y: 28,
      scale: 0.96,
      duration: 0.65,
      ease: 'power3.out',
    });
  }

  close(): void {
    this.closeViewer.emit();
  }

  getThemeClass(): string {
    const themeClasses: Record<ModuleData['theme'], string> = {
      core: 'from-cyan-300/20 via-slate-900/20 to-blue-500/10',
      frontend: 'from-sky-300/20 via-slate-900/20 to-cyan-500/10',
      backend: 'from-emerald-300/20 via-slate-900/20 to-lime-500/10',
      database: 'from-violet-300/20 via-slate-900/20 to-fuchsia-500/10',
      security: 'from-red-300/20 via-slate-900/20 to-orange-500/10',
      projects: 'from-amber-300/20 via-slate-900/20 to-yellow-500/10',
      timeline: 'from-blue-300/20 via-slate-900/20 to-indigo-500/10',
      lab: 'from-teal-300/20 via-slate-900/20 to-emerald-500/10',
      contact: 'from-cyan-300/20 via-slate-900/20 to-sky-500/10',
    };

    return themeClasses[this.moduleData().theme];
  }
}
