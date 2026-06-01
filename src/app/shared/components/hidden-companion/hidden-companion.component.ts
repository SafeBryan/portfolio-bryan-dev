import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  computed,
  signal,
} from '@angular/core';
import { gsap } from 'gsap';

type SpriteMode = 'wave' | 'walk' | 'sleep';
// Añadimos 'C' para ojo cerrado (Closed) y 'Z' para el efecto de dormir
type PixelToken = '.' | 'F' | 'S' | 'E' | 'G' | 'N' | 'M' | 'T' | 'P' | 'H' | 'O' | 'C' | 'Z';

@Component({
  selector: 'app-hidden-companion',
  standalone: true,
  templateUrl: './hidden-companion.component.html',
  styleUrl: './hidden-companion.component.css',
})
export class HiddenCompanionComponent implements AfterViewInit, OnDestroy {
  @ViewChild('pawButton') pawButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('companionPanel') companionPanel?: ElementRef<HTMLElement>;

  companionVisible = signal(false);
  activated = signal(false);
  spriteMode = signal<SpriteMode>('sleep'); // Empezamos durmiendo para sorprender
  spriteFrameIndex = signal(0);

  private spriteInterval?: ReturnType<typeof setInterval>;
  private hideTimeout?: ReturnType<typeof setTimeout>;
  private modeTimeout?: ReturnType<typeof setTimeout>;

  private readonly prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  private readonly spriteColumns = 20;
  private readonly spriteRowsCount = 18;

  private readonly spriteFrames: Record<SpriteMode, string[][]> = {
    wave: [
      [
        '....................',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFEEFFFEEFFFF...',
        '.FFFFEGEFNFGEFFFF..',
        '..FFFFFFMMFFFFFF....',
        '...FFFFFTTTFFFF.....',
        '....FFFFFFFFFF......',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFFF....',
        '..FFFSSFFFFSSFFF....',
        '...FF........FF.....',
        '....OOO....OOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
      [
        '....................',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFEEFFFEEFFFF...',
        '.FFFFEGEFNFGEFFFF..',
        '..FFFFFFMMFFFFFF.FF.',
        '...FFFFFTTTFFFF..FPF',
        '....FFFFFFFFFF...FF.',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFF.....',
        '..FFFSSFFFFSSFF.....',
        '...FF........FF.....',
        '....OOO....OOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
      [
        '....................',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFEEFFFEEFFFF...',
        '.FFFFEGEFNFGEFFFF.FF',
        '..FFFFFFMMFFFFFF.FPF',
        '...FFFFFTTTFFFF...FF',
        '....FFFFFFFFFF......',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFF.....',
        '..FFFSSFFFFSSFF.....',
        '...FF........FF.....',
        '....OOO....OOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
      [
        '....................',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFEEFFFEEFFFF...',
        '.FFFFEGEFNFGEFFFF..',
        '..FFFFFFMMFFFFFF.FF.',
        '...FFFFFTTTFFFF..FPF',
        '....FFFFFFFFFF...FF.',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFF.....',
        '..FFFSSFFFFSSFF.....',
        '...FF........FF.....',
        '....OOO....OOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
    ],
    walk: [
      [
        '....................',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFEEFFFEEFFFF...',
        '.FFFFEGEFNFGEFFFF..',
        '..FFFFFFMMFFFFFF....',
        '...FFFFFTTTFFFF.....',
        '....FFFFFFFFFF......',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFFF....',
        '...FSSFFFFSSFF......',
        '..FF.........FFF....',
        '...OOO....OOOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
      [
        '....................',
        '......F.......F.....',
        '.....FFF.....FFF....',
        '.....FPPFFFFFPPF....',
        '....FFPHPFFFHPHFF...',
        '...FFFFFFFFFFFFFFF..',
        '...FFFFEEFFFEEFFFF..',
        '..FFFFEGEFNFGEFFFF..',
        '...FFFFFFMMFFFFFF...',
        '....FFFFFTTTFFFF....',
        '.....FFFFFFFFFF.....',
        '....FFFFFFFFFFFF....',
        '...FFFFSFFFFSFFFF...',
        '....FFSFFFFSSFF.....',
        '...FFF........FF....',
        '....OOOO....OOO.....',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
      [
        '....................',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFEEFFFEEFFFF...',
        '.FFFFEGEFNFGEFFFF..',
        '..FFFFFFMMFFFFFF....',
        '...FFFFFTTTFFFF.....',
        '....FFFFFFFFFF......',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFFF....',
        '..FFFSSFFFFSSFF.....',
        '....FF........FF....',
        '....OOOO....OOO.....',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
      [
        '....................',
        '....F.......F.......',
        '...FFF.....FFF......',
        '...FPPFFFFFPPF......',
        '..FFPHPFFFHPHFF.....',
        '.FFFFFFFFFFFFFFF....',
        '.FFFFEEFFFEEFFFF....',
        'FFFFEGEFNFGEFFFF....',
        '.FFFFFFMMFFFFFF.....',
        '..FFFFFTTTFFFF......',
        '...FFFFFFFFFF.......',
        '..FFFFFFFFFFFF......',
        '.FFFFSFFFFSFFFF.....',
        '..FFSSFFFFSFF.......',
        '..FF.........FFF....',
        '...OOO....OOOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
    ],
    sleep: [
      [
        '.........Z..........',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFCCFFFCCFFFF...',
        '.FFFFFFFFFFFFFFFF..',
        '..FFFFFFMMFFFFFF....',
        '...FFFFFFFFFFFF.....',
        '....FFFFFFFFFF......',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFFF....',
        '..FFFSSFFFFSSFFF....',
        '...FF........FF.....',
        '....OOO....OOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
      [
        '...........Z........',
        '.....F.......F......',
        '....FFF.....FFF.....',
        '....FPPFFFFFPPF.....',
        '...FFPHPFFFHPHFF....',
        '..FFFFFFFFFFFFFFF...',
        '..FFFFCCFFFCCFFFF...',
        '.FFFFFFFFFFFFFFFF..',
        '..FFFFFFMMFFFFFF....',
        '...FFFFFFFFFFFF.....',
        '....FFFFFFFFFF......',
        '...FFFFFFFFFFFF.....',
        '..FFFFSFFFFSFFFF....',
        '..FFFSSFFFFSSFFF....',
        '...FF........FF.....',
        '....OOO....OOO......',
        '...OOOOOOOOOOOO.....',
        '....................',
      ],
    ],
  };

  currentFrame = computed(() => {
    const frames = this.spriteFrames[this.spriteMode()];
    const frame = frames[this.spriteFrameIndex() % frames.length];
    return this.normalizeFrame(frame);
  });

  spritePixels = computed(() => {
    return this.currentFrame().join('').split('') as PixelToken[];
  });

  ngAfterViewInit(): void {
    if (!this.pawButton) return;
    const button = this.pawButton.nativeElement;

    if (this.prefersReducedMotion) {
      gsap.set(button, { opacity: 0.55 });
      return;
    }

    gsap.set(button, { opacity: 0, scale: 0.72, y: 14 });
    gsap.to(button, {
      opacity: 0.42,
      scale: 1,
      y: 0,
      duration: 0.9,
      delay: 1.2,
      ease: 'power3.out',
    });
    gsap.to(button, {
      y: -5,
      scale: 1.04,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2.1,
    });
  }

  revealCompanion(): void {
    this.activated.set(true);
    this.companionVisible.set(true);
    this.spriteMode.set('sleep'); // Entra durmiendo
    this.spriteFrameIndex.set(0);

    this.clearTimers();

    setTimeout(() => {
      this.animateReveal();
      this.startSpriteLoop();
    }, 0);

    // Se despierta solo después de 3 segundos si el usuario no interactúa
    this.modeTimeout = setTimeout(() => {
      this.spriteMode.set('wave');
      this.spriteFrameIndex.set(0);
    }, 3000);

    this.hideTimeout = setTimeout(() => {
      this.hideCompanion();
    }, 8000); // Un poco más de tiempo para apreciar todo
  }

  hideCompanion(): void {
    this.stopSpriteLoop();
    if (!this.companionPanel) {
      this.companionVisible.set(false);
      return;
    }

    const panel = this.companionPanel.nativeElement;
    if (this.prefersReducedMotion) {
      this.companionVisible.set(false);
      return;
    }

    gsap.to(panel, {
      opacity: 0,
      y: 18,
      scale: 0.96,
      filter: 'blur(8px)',
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => this.companionVisible.set(false),
    });
  }

  // Nueva función interactiva
  interactWithDog(): void {
    if (!this.companionPanel) return;

    // Cambiar de modo
    const nextMode = this.spriteMode() === 'sleep' ? 'wave' : 'walk';
    this.spriteMode.set(nextMode);
    this.spriteFrameIndex.set(0);

    // Reiniciar temporizador de ocultado para que no se cierre mientras juegas con él
    this.clearTimers();
    this.hideTimeout = setTimeout(() => this.hideCompanion(), 6000);

    // Pequeño salto GSAP
    const dog = this.companionPanel.nativeElement.querySelector('[data-dog-sprite]');
    if (dog && !this.prefersReducedMotion) {
      gsap.killTweensOf(dog);
      gsap.fromTo(
        dog,
        { y: 0, scale: 1 },
        { y: -15, scale: 1.05, duration: 0.25, yoyo: true, repeat: 1, ease: 'power1.out' },
      );
    }
  }

  pixelClass(pixel: PixelToken): string {
    const classes: Record<PixelToken, string> = {
      '.': 'sprite-cell--empty',
      F: 'sprite-cell--fur',
      S: 'sprite-cell--fur-shadow',
      E: 'sprite-cell--eye',
      G: 'sprite-cell--eye-gloss',
      N: 'sprite-cell--nose',
      M: 'sprite-cell--mouth',
      T: 'sprite-cell--tongue',
      P: 'sprite-cell--pink',
      H: 'sprite-cell--pink-dark',
      O: 'sprite-cell--shadow',
      C: 'sprite-cell--eye-closed',
      Z: 'sprite-cell--zzz',
    };
    return classes[pixel] ?? classes['.'];
  }

  ngOnDestroy(): void {
    this.clearTimers();
    this.stopSpriteLoop();
    if (this.pawButton) gsap.killTweensOf(this.pawButton.nativeElement);
    if (this.companionPanel) gsap.killTweensOf(this.companionPanel.nativeElement);
  }

  private startSpriteLoop(): void {
    if (this.prefersReducedMotion) return;
    this.stopSpriteLoop();
    this.spriteInterval = setInterval(() => {
      const frames = this.spriteFrames[this.spriteMode()];
      this.spriteFrameIndex.update((index) => (index + 1) % frames.length);
    }, 280); // Ligeramente más lento para el estilo retro
  }

  private stopSpriteLoop(): void {
    if (this.spriteInterval) {
      clearInterval(this.spriteInterval);
      this.spriteInterval = undefined;
    }
  }

  private clearTimers(): void {
    if (this.hideTimeout) clearTimeout(this.hideTimeout);
    if (this.modeTimeout) clearTimeout(this.modeTimeout);
    this.hideTimeout = undefined;
    this.modeTimeout = undefined;
  }

  private normalizeFrame(frame: string[]): string[] {
    return Array.from({ length: this.spriteRowsCount }, (_, rowIndex) => {
      const row = frame[rowIndex] ?? '';
      return row.padEnd(this.spriteColumns, '.').slice(0, this.spriteColumns);
    });
  }

  private animateReveal(): void {
    if (!this.companionPanel || this.prefersReducedMotion) return;

    const panel = this.companionPanel.nativeElement;
    const paw = this.pawButton?.nativeElement;
    const dog = panel.querySelector('[data-dog-sprite]');
    const sparks = panel.querySelectorAll('[data-spark]');
    const glitch = panel.querySelector('[data-panel-glitch]');
    const speech = panel.querySelector('[data-speech]');

    gsap.killTweensOf([panel, dog, paw, glitch, speech]);
    gsap.killTweensOf(sparks);

    if (paw) {
      gsap.fromTo(
        paw,
        { boxShadow: '0 0 0 rgba(244,114,182,0)', scale: 1 },
        {
          boxShadow: '0 0 46px rgba(244,114,182,0.55)',
          scale: 1.16,
          duration: 0.22,
          repeat: 3,
          yoyo: true,
          ease: 'power2.out',
        },
      );
    }

    gsap.fromTo(
      panel,
      { opacity: 0, y: 28, scale: 0.9, filter: 'blur(10px)' },
      { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.58, ease: 'back.out(1.65)' },
    );

    gsap.fromTo(
      glitch,
      { opacity: 0, scaleX: 0.3 },
      { opacity: 1, scaleX: 1, duration: 0.16, repeat: 5, yoyo: true, ease: 'steps(2)' },
    );

    gsap.fromTo(
      dog,
      { opacity: 0, y: 30, scale: 0.72, rotate: -3 },
      { opacity: 1, y: 0, scale: 1, rotate: 0, duration: 0.72, delay: 0.08, ease: 'back.out(1.9)' },
    );

    gsap.fromTo(
      sparks,
      { opacity: 0, scale: 0.15, rotate: -25 },
      {
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 0.48,
        stagger: 0.07,
        delay: 0.18,
        ease: 'back.out(2)',
      },
    );

    gsap.fromTo(
      speech,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.38, delay: 0.58, ease: 'power2.out' },
    );
  }
}
