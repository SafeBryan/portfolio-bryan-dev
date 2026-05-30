import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { LanguageCardComponent } from '../../shared/components/language-card/language-card.component';

@Component({
  selector: 'app-language-gate',
  standalone: true,
  imports: [LanguageCardComponent],
  templateUrl: './language-gate.component.html',
})
export class LanguageGateComponent implements AfterViewInit {
  @ViewChild('gateContent') gateContent?: ElementRef<HTMLElement>;

  @Output() languageSelected = new EventEmitter<string>();

  ngAfterViewInit(): void {
    if (!this.gateContent) return;

    gsap.from(this.gateContent.nativeElement.children, {
      opacity: 0,
      y: 24,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
    });
  }

  selectLanguage(language: string): void {
    this.languageSelected.emit(language);
  }
}
