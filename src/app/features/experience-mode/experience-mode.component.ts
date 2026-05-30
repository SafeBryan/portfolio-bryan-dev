import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChildren,
  QueryList,
  computed,
  signal,
} from '@angular/core';
import { gsap } from 'gsap';
import {
  ExperienceIsland,
  ExperienceIslandComponent,
} from '../../shared/components/experience-island/experience-island.component';
import { ModuleViewerComponent } from '../module-viewer/module-viewer.component';

type PortfolioLanguage = 'ES' | 'EN';

@Component({
  selector: 'app-experience-mode',
  standalone: true,
  imports: [ExperienceIslandComponent, ModuleViewerComponent],
  templateUrl: './experience-mode.component.html',
})
export class ExperienceModeComponent implements AfterViewInit {
  @Input({ required: true }) language!: PortfolioLanguage;

  @ViewChildren(ExperienceIslandComponent, { read: ElementRef })
  islandElements?: QueryList<ElementRef<HTMLElement>>;

  selectedIsland = signal<string>('core-profile');
  viewerOpen = signal(false);

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        eyebrow: 'Experience Mode Unlocked',
        title: 'Bryan Dev System',
        subtitle:
          'Explore my profile through interactive technical islands. Each module represents an area of my full stack experience.',
        instruction: 'Choose a module to explore',
        status: 'System stabilized',
        selected: 'Selected module',
        quickActions: {
          cv: 'Download CV',
          github: 'GitHub',
          linkedin: 'LinkedIn',
        },
        islands: [
          {
            id: 'core-profile',
            title: 'Core Profile',
            subtitle: 'Who I am, what I build and what I am focused on.',
            code: 'CORE',
            icon: '◆',
            positionClass: 'lg:col-start-2 lg:row-start-1 lg:translate-y-4',
            glowClass: 'bg-cyan-300/20 opacity-60',
          },
          {
            id: 'frontend-lab',
            title: 'Frontend Lab',
            subtitle: 'Angular, TypeScript, Tailwind, dashboards and clean UI.',
            code: 'UI',
            icon: '⌁',
            positionClass: 'lg:col-start-1 lg:row-start-1 lg:translate-y-14',
            glowClass: 'bg-sky-300/20 opacity-40',
          },
          {
            id: 'backend-engine',
            title: 'Backend Engine',
            subtitle: 'Java, Spring Boot, REST APIs, services and validations.',
            code: 'API',
            icon: '⚙',
            positionClass: 'lg:col-start-3 lg:row-start-1 lg:translate-y-14',
            glowClass: 'bg-emerald-300/20 opacity-40',
          },
          {
            id: 'database-vault',
            title: 'Database Vault',
            subtitle: 'Oracle, SQL, PL/SQL, repositories and data modeling.',
            code: 'DATA',
            icon: '▣',
            positionClass: 'lg:col-start-3 lg:row-start-2 lg:translate-y-8',
            glowClass: 'bg-violet-300/20 opacity-40',
          },
          {
            id: 'security-gate',
            title: 'Security Gate',
            subtitle: 'JWT, CORS, OWASP, headers, access control and ZAP.',
            code: 'SEC',
            icon: '⛨',
            positionClass: 'lg:col-start-1 lg:row-start-2 lg:translate-y-8',
            glowClass: 'bg-red-300/20 opacity-40',
          },
          {
            id: 'project-vault',
            title: 'Project Vault',
            subtitle: 'Real project case files with problem, role, stack and impact.',
            code: 'CASE',
            icon: '◇',
            positionClass: 'lg:col-start-2 lg:row-start-2 lg:-translate-y-2',
            glowClass: 'bg-amber-300/20 opacity-40',
          },
          {
            id: 'timeline',
            title: 'Experience Timeline',
            subtitle: 'University, internships, work experience and growth path.',
            code: 'TIME',
            icon: '◷',
            positionClass: 'lg:col-start-1 lg:row-start-3 lg:-translate-y-2',
            glowClass: 'bg-blue-300/20 opacity-35',
          },
          {
            id: 'developer-lab',
            title: 'Developer Lab',
            subtitle: 'Experiments, components, practices and technical notes.',
            code: 'LAB',
            icon: '✦',
            positionClass: 'lg:col-start-3 lg:row-start-3 lg:-translate-y-2',
            glowClass: 'bg-teal-300/20 opacity-35',
          },
          {
            id: 'contact-portal',
            title: 'Contact Portal',
            subtitle: 'Email, GitHub, LinkedIn, CV and professional availability.',
            code: 'LINK',
            icon: '⌬',
            positionClass: 'lg:col-start-2 lg:row-start-3 lg:translate-y-8',
            glowClass: 'bg-cyan-300/20 opacity-35',
          },
        ] as ExperienceIsland[],
      };
    }

    return {
      eyebrow: 'Experience Mode Desbloqueado',
      title: 'Bryan Dev System',
      subtitle:
        'Explora mi perfil mediante islas técnicas interactivas. Cada módulo representa un área de mi experiencia full stack.',
      instruction: 'Elige un módulo para explorar',
      status: 'Sistema estabilizado',
      selected: 'Módulo seleccionado',
      quickActions: {
        cv: 'Descargar CV',
        github: 'GitHub',
        linkedin: 'LinkedIn',
      },
      islands: [
        {
          id: 'core-profile',
          title: 'Core Profile',
          subtitle: 'Quién soy, qué construyo y hacia dónde estoy enfocado.',
          code: 'CORE',
          icon: '◆',
          positionClass: 'lg:col-start-2 lg:row-start-1 lg:translate-y-4',
          glowClass: 'bg-cyan-300/20 opacity-60',
        },
        {
          id: 'frontend-lab',
          title: 'Frontend Lab',
          subtitle: 'Angular, TypeScript, Tailwind, dashboards e interfaces limpias.',
          code: 'UI',
          icon: '⌁',
          positionClass: 'lg:col-start-1 lg:row-start-1 lg:translate-y-14',
          glowClass: 'bg-sky-300/20 opacity-40',
        },
        {
          id: 'backend-engine',
          title: 'Backend Engine',
          subtitle: 'Java, Spring Boot, APIs REST, servicios y validaciones.',
          code: 'API',
          icon: '⚙',
          positionClass: 'lg:col-start-3 lg:row-start-1 lg:translate-y-14',
          glowClass: 'bg-emerald-300/20 opacity-40',
        },
        {
          id: 'database-vault',
          title: 'Database Vault',
          subtitle: 'Oracle, SQL, PL/SQL, repositorios y modelado de datos.',
          code: 'DATA',
          icon: '▣',
          positionClass: 'lg:col-start-3 lg:row-start-2 lg:translate-y-8',
          glowClass: 'bg-violet-300/20 opacity-40',
        },
        {
          id: 'security-gate',
          title: 'Security Gate',
          subtitle: 'JWT, CORS, OWASP, headers, control de acceso y ZAP.',
          code: 'SEC',
          icon: '⛨',
          positionClass: 'lg:col-start-1 lg:row-start-2 lg:translate-y-8',
          glowClass: 'bg-red-300/20 opacity-40',
        },
        {
          id: 'project-vault',
          title: 'Project Vault',
          subtitle: 'Casos técnicos reales con problema, rol, stack e impacto.',
          code: 'CASE',
          icon: '◇',
          positionClass: 'lg:col-start-2 lg:row-start-2 lg:-translate-y-2',
          glowClass: 'bg-amber-300/20 opacity-40',
        },
        {
          id: 'timeline',
          title: 'Experience Timeline',
          subtitle: 'Universidad, pasantías, experiencia laboral y crecimiento técnico.',
          code: 'TIME',
          icon: '◷',
          positionClass: 'lg:col-start-1 lg:row-start-3 lg:-translate-y-2',
          glowClass: 'bg-blue-300/20 opacity-35',
        },
        {
          id: 'developer-lab',
          title: 'Developer Lab',
          subtitle: 'Experimentos, componentes, prácticas y notas técnicas.',
          code: 'LAB',
          icon: '✦',
          positionClass: 'lg:col-start-3 lg:row-start-3 lg:-translate-y-2',
          glowClass: 'bg-teal-300/20 opacity-35',
        },
        {
          id: 'contact-portal',
          title: 'Contact Portal',
          subtitle: 'Correo, GitHub, LinkedIn, CV y disponibilidad profesional.',
          code: 'LINK',
          icon: '⌬',
          positionClass: 'lg:col-start-2 lg:row-start-3 lg:translate-y-8',
          glowClass: 'bg-cyan-300/20 opacity-35',
        },
      ] as ExperienceIsland[],
    };
  });

  selectedIslandData = computed(() => {
    return (
      this.content().islands.find((island) => island.id === this.selectedIsland()) ??
      this.content().islands[0]
    );
  });

  ngAfterViewInit(): void {
    this.animateIslands();
  }

  selectIsland(islandId: string): void {
    this.selectedIsland.set(islandId);
    this.viewerOpen.set(true);
  }

  closeViewer(): void {
    this.viewerOpen.set(false);
  }

  private animateIslands(): void {
    const elements = this.islandElements?.map((item) => item.nativeElement) ?? [];

    gsap.from(elements, {
      opacity: 0,
      y: 28,
      scale: 0.94,
      duration: 0.75,
      ease: 'power3.out',
      stagger: 0.08,
    });

    elements.forEach((element, index) => {
      gsap.to(element, {
        y: index % 2 === 0 ? -8 : 8,
        duration: 3.4 + index * 0.12,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.15,
      });
    });
  }
}
