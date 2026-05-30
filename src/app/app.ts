import { Component, signal } from '@angular/core';
import { LanguageGateComponent } from './features/language-gate/language-gate.component';
import { IntroChatComponent } from './features/intro-chat/intro-chat.component';
import { SystemWarningComponent } from './features/system-warning/system-warning.component';
import { ExperienceModeComponent } from './features/experience-mode/experience-mode.component';

type PortfolioLanguage = 'ES' | 'EN';
type PortfolioStep = 'language' | 'chat' | 'warning' | 'experience';

@Component({
  selector: 'app-root',
  imports: [
    LanguageGateComponent,
    IntroChatComponent,
    SystemWarningComponent,
    ExperienceModeComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentStep = signal<PortfolioStep>('language');
  selectedLanguage = signal<PortfolioLanguage | null>(null);
  selectedIntroOption = signal<string>('profile');

  onLanguageSelected(language: string): void {
    this.selectedLanguage.set(language as PortfolioLanguage);
    this.currentStep.set('chat');
  }

  onIntroOptionSelected(option: string): void {
    this.selectedIntroOption.set(option);
    this.currentStep.set('warning');
  }

  backToLanguageGate(): void {
    this.selectedLanguage.set(null);
    this.selectedIntroOption.set('profile');
    this.currentStep.set('language');
  }

  unlockExperienceMode(): void {
    this.currentStep.set('experience');
  }
}
