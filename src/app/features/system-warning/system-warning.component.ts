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

interface WarningLine {
  label: string;
  tone: 'info' | 'warning' | 'error' | 'success';
}

@Component({
  selector: 'app-system-warning',
  standalone: true,
  templateUrl: './system-warning.component.html',
})
export class SystemWarningComponent implements AfterViewInit {
  @Input({ required: true }) language!: PortfolioLanguage;
  @Input() selectedOption = 'profile';

  @Output() sequenceFinished = new EventEmitter<void>();
  @Output() skipRequested = new EventEmitter<void>();

  @ViewChild('warningScreen') warningScreen?: ElementRef<HTMLElement>;
  @ViewChild('warningPanel') warningPanel?: ElementRef<HTMLElement>;

  visibleLines: WarningLine[] = [];

  alertVisible = false;
  blackoutVisible = false;
  resolvingVisible = false;

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        title: 'System analysis',
        subtitle: 'Standard portfolio mode is being evaluated.',
        skip: 'Skip intro',
        diagnostic: 'Runtime diagnostic active',
        alertEyebrow: 'Critical system warning',
        alertTitle: 'Anomaly Detected',
        alertSubtitle: 'Standard portfolio mode rejected',
        resolving: 'Resolving system conflict...',
        preparing: 'Preparing Experience Mode',
        lines: [
          { label: 'Loading standard profile...', tone: 'info' },
          { label: 'Analyzing technical experience...', tone: 'info' },
          { label: 'Detecting enterprise modules...', tone: 'info' },
          { label: 'WARNING: standard portfolio mode insufficient.', tone: 'warning' },
          { label: 'WARNING: real-world projects detected.', tone: 'warning' },
          { label: 'WARNING: backend architecture found.', tone: 'warning' },
          { label: 'WARNING: payment integration detected.', tone: 'warning' },
          { label: 'WARNING: security layer detected.', tone: 'warning' },
          { label: 'CRITICAL ERROR: standard presentation rejected.', tone: 'error' },
          { label: 'Activating Experience Mode...', tone: 'success' },
        ] as WarningLine[],
      };
    }

    return {
      title: 'Análisis del sistema',
      subtitle: 'Evaluando el modo estándar del portafolio.',
      skip: 'Saltar intro',
      diagnostic: 'Diagnóstico en tiempo de ejecución activo',
      alertEyebrow: 'Advertencia crítica del sistema',
      alertTitle: 'Anomalía Detectada',
      alertSubtitle: 'Modo estándar del portafolio rechazado',
      resolving: 'Resolviendo conflicto del sistema...',
      preparing: 'Preparando Experience Mode',
      lines: [
        { label: 'Cargando perfil estándar...', tone: 'info' },
        { label: 'Analizando experiencia técnica...', tone: 'info' },
        { label: 'Detectando módulos empresariales...', tone: 'info' },
        { label: 'ADVERTENCIA: modo de portafolio básico insuficiente.', tone: 'warning' },
        { label: 'ADVERTENCIA: proyectos reales detectados.', tone: 'warning' },
        { label: 'ADVERTENCIA: arquitectura backend encontrada.', tone: 'warning' },
        { label: 'ADVERTENCIA: integración de pagos detectada.', tone: 'warning' },
        { label: 'ADVERTENCIA: capa de seguridad detectada.', tone: 'warning' },
        { label: 'ERROR CRÍTICO: presentación estándar rechazada.', tone: 'error' },
        { label: 'Activando Experience Mode...', tone: 'success' },
      ] as WarningLine[],
    };
  });

  ngAfterViewInit(): void {
    this.runSequence();
  }

  skipIntro(): void {
    this.skipRequested.emit();
  }

  getLineClass(tone: WarningLine['tone']): string {
    const classes = {
      info: 'text-cyan-100',
      warning: 'text-amber-200',
      error: 'text-red-300',
      success: 'text-emerald-300',
    };

    return classes[tone];
  }

  private runSequence(): void {
    const screen = this.warningScreen?.nativeElement;
    const panel = this.warningPanel?.nativeElement;

    if (!screen || !panel) return;

    gsap.from(panel, {
      opacity: 0,
      scale: 0.96,
      y: 18,
      duration: 0.55,
      ease: 'power3.out',
    });

    const lines = this.content().lines;

    lines.forEach((line, index) => {
      gsap.delayedCall(index * 0.38, () => {
        this.visibleLines = [...this.visibleLines, line];

        if (line.tone === 'warning') {
          this.shakeScreen(screen, 5);
        }

        if (line.tone === 'error') {
          this.alertVisible = true;
          this.shakeScreen(screen, 13);
          this.glitchPanel(panel);

          gsap.delayedCall(0.9, () => {
            this.alertVisible = false;
          });
        }
      });
    });

    const totalDuration = lines.length * 0.38 + 0.8;

    gsap.delayedCall(totalDuration, () => {
      this.powerFailure(screen, panel);
    });
  }

  private shakeScreen(element: HTMLElement, intensity: number): void {
    gsap.fromTo(
      element,
      { x: 0 },
      {
        x: intensity,
        duration: 0.045,
        repeat: 5,
        yoyo: true,
        ease: 'power1.inOut',
        clearProps: 'x',
      },
    );
  }

  private glitchPanel(panel: HTMLElement): void {
    gsap
      .timeline()
      .to(panel, {
        skewX: 4,
        x: -8,
        duration: 0.05,
      })
      .to(panel, {
        skewX: -3,
        x: 8,
        duration: 0.05,
      })
      .to(panel, {
        skewX: 0,
        x: 0,
        duration: 0.08,
      });
  }

  private powerFailure(screen: HTMLElement, panel: HTMLElement): void {
    const timeline = gsap.timeline({
      onComplete: () => {
        this.sequenceFinished.emit();
      },
    });

    timeline
      .to(screen, {
        filter: 'contrast(1.7) brightness(1.35) saturate(1.4)',
        duration: 0.12,
      })
      .to(panel, {
        x: -24,
        skewX: 7,
        opacity: 0.9,
        duration: 0.06,
      })
      .to(panel, {
        x: 28,
        skewX: -7,
        opacity: 0.75,
        duration: 0.06,
      })
      .to(panel, {
        x: 0,
        skewX: 0,
        scale: 1.04,
        duration: 0.08,
      })
      .call(() => {
        this.blackoutVisible = true;
      })
      .to(panel, {
        opacity: 0,
        duration: 0.12,
      })
      .to(screen, {
        filter: 'brightness(0)',
        duration: 0.18,
      })
      .call(() => {
        this.resolvingVisible = true;
      })
      .to({}, { duration: 1.15 })
      .call(() => {
        this.resolvingVisible = false;
      })
      .to(screen, {
        filter: 'brightness(1)',
        duration: 0.2,
      });
  }
}
