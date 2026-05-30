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
import { ChatOptionComponent } from '../../shared/components/chat-option/chat-option.component';

type PortfolioLanguage = 'ES' | 'EN';

interface ChatOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-intro-chat',
  standalone: true,
  imports: [ChatOptionComponent],
  templateUrl: './intro-chat.component.html',
})
export class IntroChatComponent implements AfterViewInit {
  @Input({ required: true }) language!: PortfolioLanguage;

  @Output() optionSelected = new EventEmitter<string>();
  @Output() backToLanguage = new EventEmitter<void>();

  @ViewChild('chatPanel') chatPanel?: ElementRef<HTMLElement>;

  content = computed(() => {
    if (this.language === 'EN') {
      return {
        system: 'Establishing secure session...',
        assistant: 'Hi, you are entering Bryan’s profile.',
        question: 'What would you like to explore?',
        status: 'Portfolio assistant online',
        changeLanguage: 'Change language',
        options: [
          { label: 'Profile', value: 'profile' },
          { label: 'Projects', value: 'projects' },
          { label: 'Stack', value: 'stack' },
          { label: 'Experience', value: 'experience' },
          { label: 'Contact', value: 'contact' },
        ],
      };
    }

    return {
      system: 'Estableciendo sesión segura...',
      assistant: 'Hola, estás entrando al perfil de Bryan.',
      question: '¿Qué quieres conocer?',
      status: 'Asistente del portafolio en línea',
      changeLanguage: 'Cambiar idioma',
      options: [
        { label: 'Perfil', value: 'profile' },
        { label: 'Proyectos', value: 'projects' },
        { label: 'Stack', value: 'stack' },
        { label: 'Experiencia', value: 'experience' },
        { label: 'Contacto', value: 'contact' },
      ],
    };
  });

  ngAfterViewInit(): void {
    if (!this.chatPanel) return;

    gsap.from(this.chatPanel.nativeElement.children, {
      opacity: 0,
      y: 18,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.14,
    });
  }

  selectOption(value: string): void {
    this.optionSelected.emit(value);
  }

  changeLanguage(): void {
    this.backToLanguage.emit();
  }
}
