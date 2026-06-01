import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
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

interface ExperienceModeContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  instruction: string;
  status: string;
  selected: string;
  quickActions: {
    cv: string;
    github: string;
    linkedin: string;
  };
  mapStats: {
    label: string;
    value: string;
  }[];
  islands: ExperienceIsland[];
}

@Component({
  selector: 'app-experience-mode',
  standalone: true,
  imports: [ExperienceIslandComponent, ModuleViewerComponent],
  templateUrl: './experience-mode.component.html',
})
export class ExperienceModeComponent implements AfterViewInit {
  @Input({ required: true }) language!: PortfolioLanguage;

  @ViewChildren('islandMotion', { read: ElementRef })
  islandMotionElements?: QueryList<ElementRef<HTMLElement>>;

  selectedIsland = signal<string>('core-profile');
  viewerOpen = signal(false);

  content = computed<ExperienceModeContent>(() => {
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
        mapStats: [
          { label: 'Mode', value: 'Interactive technical map' },
          { label: 'Modules', value: '9 specialized areas' },
          { label: 'Stack', value: 'Angular · Java · Oracle · Security' },
        ],
        islands: this.getIslandsEn(),
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
      mapStats: [
        { label: 'Modo', value: 'Mapa técnico interactivo' },
        { label: 'Módulos', value: '9 áreas especializadas' },
        { label: 'Stack', value: 'Angular · Java · Oracle · Seguridad' },
      ],
      islands: this.getIslandsEs(),
    };
  });

  selectedIslandData = computed(() => {
    return (
      this.content().islands.find((island) => island.id === this.selectedIsland()) ??
      this.content().islands[0]
    );
  });

  ngAfterViewInit(): void {
    queueMicrotask(() => this.animateIslands());
  }

  previewIsland(islandId: string): void {
    this.selectedIsland.set(islandId);
  }

  selectIsland(islandId: string): void {
    this.selectedIsland.set(islandId);
    this.viewerOpen.set(true);
  }

  closeViewer(): void {
    this.viewerOpen.set(false);

    queueMicrotask(() => {
      this.animateIslands();
    });
  }

  private animateIslands(): void {
    const elements = this.islandMotionElements?.map((item) => item.nativeElement) ?? [];

    if (!elements.length) return;

    gsap.killTweensOf(elements);

    gsap.from(elements, {
      opacity: 0,
      y: 24,
      scale: 0.96,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.07,
    });

    elements.forEach((element, index) => {
      gsap.to(element, {
        y: index % 2 === 0 ? -7 : 7,
        rotate: index % 3 === 0 ? 0.35 : -0.35,
        duration: 3.8 + index * 0.14,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.2 + index * 0.12,
      });
    });
  }

  private getIslandsEs(): ExperienceIsland[] {
    return [
      {
        id: 'core-profile',
        title: 'Core Profile',
        subtitle: 'Quién soy, qué construyo y hacia dónde estoy enfocado.',
        code: 'CORE',
        icon: '◆',
        positionClass: 'xl:translate-y-0',
        glowClass: 'bg-cyan-300/20 opacity-60',
      },
      {
        id: 'frontend-lab',
        title: 'Frontend Lab',
        subtitle: 'Angular, TypeScript, Tailwind, dashboards e interfaces limpias.',
        code: 'UI',
        icon: '⌁',
        positionClass: 'xl:translate-y-10',
        glowClass: 'bg-sky-300/20 opacity-45',
      },
      {
        id: 'backend-engine',
        title: 'Backend Engine',
        subtitle: 'Java, Spring Boot, APIs REST, servicios y validaciones.',
        code: 'API',
        icon: '⚙',
        positionClass: 'xl:translate-y-0',
        glowClass: 'bg-emerald-300/20 opacity-45',
      },
      {
        id: 'database-vault',
        title: 'Database Vault',
        subtitle: 'Oracle, SQL, PL/SQL, repositorios y modelado de datos.',
        code: 'DATA',
        icon: '▣',
        positionClass: 'xl:-translate-y-1',
        glowClass: 'bg-violet-300/20 opacity-45',
      },
      {
        id: 'security-gate',
        title: 'Security Gate',
        subtitle: 'JWT, CORS, OWASP, headers, control de acceso y ZAP.',
        code: 'SEC',
        icon: '⬟',
        positionClass: 'xl:translate-y-8',
        glowClass: 'bg-rose-300/20 opacity-45',
      },
      {
        id: 'project-vault',
        title: 'Project Vault',
        subtitle: 'Casos técnicos reales con problema, rol, stack e impacto.',
        code: 'CASE',
        icon: '◇',
        positionClass: 'xl:-translate-y-5',
        glowClass: 'bg-amber-300/20 opacity-45',
      },
      {
        id: 'timeline',
        title: 'Experience Timeline',
        subtitle: 'Universidad, pasantías, experiencia laboral y crecimiento técnico.',
        code: 'TIME',
        icon: '◷',
        positionClass: 'xl:-translate-y-1',
        glowClass: 'bg-blue-300/20 opacity-40',
      },
      {
        id: 'developer-lab',
        title: 'Developer Lab',
        subtitle: 'Experimentos, componentes, prácticas y notas técnicas.',
        code: 'LAB',
        icon: '✦',
        positionClass: 'xl:translate-y-8',
        glowClass: 'bg-teal-300/20 opacity-40',
      },
      {
        id: 'contact-portal',
        title: 'Contact Portal',
        subtitle: 'Correo, GitHub, LinkedIn, CV y disponibilidad profesional.',
        code: 'LINK',
        icon: '⌬',
        positionClass: 'xl:translate-y-0',
        glowClass: 'bg-cyan-300/20 opacity-40',
      },
    ];
  }

  private getIslandsEn(): ExperienceIsland[] {
    return [
      {
        id: 'core-profile',
        title: 'Core Profile',
        subtitle: 'Who I am, what I build and what I am focused on.',
        code: 'CORE',
        icon: '◆',
        positionClass: 'xl:translate-y-0',
        glowClass: 'bg-cyan-300/20 opacity-60',
      },
      {
        id: 'frontend-lab',
        title: 'Frontend Lab',
        subtitle: 'Angular, TypeScript, Tailwind, dashboards and clean UI.',
        code: 'UI',
        icon: '⌁',
        positionClass: 'xl:translate-y-10',
        glowClass: 'bg-sky-300/20 opacity-45',
      },
      {
        id: 'backend-engine',
        title: 'Backend Engine',
        subtitle: 'Java, Spring Boot, REST APIs, services and validations.',
        code: 'API',
        icon: '⚙',
        positionClass: 'xl:translate-y-0',
        glowClass: 'bg-emerald-300/20 opacity-45',
      },
      {
        id: 'database-vault',
        title: 'Database Vault',
        subtitle: 'Oracle, SQL, PL/SQL, repositories and data modeling.',
        code: 'DATA',
        icon: '▣',
        positionClass: 'xl:-translate-y-1',
        glowClass: 'bg-violet-300/20 opacity-45',
      },
      {
        id: 'security-gate',
        title: 'Security Gate',
        subtitle: 'JWT, CORS, OWASP, headers, access control and ZAP.',
        code: 'SEC',
        icon: '⬟',
        positionClass: 'xl:translate-y-8',
        glowClass: 'bg-rose-300/20 opacity-45',
      },
      {
        id: 'project-vault',
        title: 'Project Vault',
        subtitle: 'Real project case files with problem, role, stack and impact.',
        code: 'CASE',
        icon: '◇',
        positionClass: 'xl:-translate-y-5',
        glowClass: 'bg-amber-300/20 opacity-45',
      },
      {
        id: 'timeline',
        title: 'Experience Timeline',
        subtitle: 'University, internships, work experience and growth path.',
        code: 'TIME',
        icon: '◷',
        positionClass: 'xl:-translate-y-1',
        glowClass: 'bg-blue-300/20 opacity-40',
      },
      {
        id: 'developer-lab',
        title: 'Developer Lab',
        subtitle: 'Experiments, components, practices and technical notes.',
        code: 'LAB',
        icon: '✦',
        positionClass: 'xl:translate-y-8',
        glowClass: 'bg-teal-300/20 opacity-40',
      },
      {
        id: 'contact-portal',
        title: 'Contact Portal',
        subtitle: 'Email, GitHub, LinkedIn, CV and professional availability.',
        code: 'LINK',
        icon: '⌬',
        positionClass: 'xl:translate-y-0',
        glowClass: 'bg-cyan-300/20 opacity-40',
      },
    ];
  }
}
