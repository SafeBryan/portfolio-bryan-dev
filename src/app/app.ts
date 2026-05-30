import { Component, signal } from '@angular/core';
import { LanguageGateComponent } from './features/language-gate/language-gate.component';
import { IntroChatComponent } from './features/intro-chat/intro-chat.component';

type PortfolioLanguage = 'ES' | 'EN';

@Component({
  selector: 'app-root',
  imports: [LanguageGateComponent, IntroChatComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedLanguage = signal<PortfolioLanguage | null>(null);
  selectedIntroOption = signal<string | null>(null);

  onLanguageSelected(language: string): void {
    this.selectedLanguage.set(language as PortfolioLanguage);
  }

  onIntroOptionSelected(option: string): void {
    this.selectedIntroOption.set(option);
    console.log('Intro option selected:', option);
  }

  backToLanguageGate(): void {
    this.selectedLanguage.set(null);
    this.selectedIntroOption.set(null);
  }
}
