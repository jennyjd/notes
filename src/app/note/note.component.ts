import { Component, Input } from '@angular/core';
import Note from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent {
  @Input() note: Note;
  display: string = 'none';

  constructor() { }

  enter() {
    this.display = 'block'
  }

  leave() {
    this.display = 'none'
  }
}
