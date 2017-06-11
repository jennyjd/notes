import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-actions',
  templateUrl: './note-actions.component.html',
  styleUrls: ['./note-actions.component.sass']
})
export class NoteActionsComponent {
   @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  delete(): void {
    this.onDelete.emit();
  }

}
