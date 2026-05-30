import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-language-card',
  standalone: true,
  templateUrl: './language-card.component.html',
})
export class LanguageCardComponent {
  @Input({ required: true }) code!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) symbol!: string;

  @Output() selected = new EventEmitter<string>();

  selectLanguage(): void {
    this.selected.emit(this.code);
  }
}
