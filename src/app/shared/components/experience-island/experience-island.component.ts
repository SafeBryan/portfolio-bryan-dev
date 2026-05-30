import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ExperienceIsland {
  id: string;
  title: string;
  subtitle: string;
  code: string;
  icon: string;
  positionClass: string;
  glowClass: string;
}

@Component({
  selector: 'app-experience-island',
  standalone: true,
  templateUrl: './experience-island.component.html',
})
export class ExperienceIslandComponent {
  @Input({ required: true }) island!: ExperienceIsland;
  @Input() selected = false;

  @Output() islandSelected = new EventEmitter<string>();

  selectIsland(): void {
    this.islandSelected.emit(this.island.id);
  }
}
