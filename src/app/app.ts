import { Component, signal } from '@angular/core';
import { LanguageGateComponent } from './features/language-gate/language-gate.component';

@Component({
  selector: 'app-root',
  imports: [LanguageGateComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  selectedLanguage = signal<string | null>(null);

  onLanguageSelected(language: string): void {
    this.selectedLanguage.set(language);
    console.log('Selected language:', language);
  }
}
