import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chat-option',
  standalone: true,
  templateUrl: './chat-option.component.html',
})
export class ChatOptionComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) value!: string;

  @Output() optionSelected = new EventEmitter<string>();

  selectOption(): void {
    this.optionSelected.emit(this.value);
  }
}
