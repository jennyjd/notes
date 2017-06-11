import { Component, Input } from '@angular/core';
import NoteService from './note.service';
import Note from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})

export class NoteComponent {
  @Input() note: Note;
  displayActions: string = 'none';

  constructor(private noteService: NoteService) { }

  deleteNote() {
    this.noteService.deleteNode(this.note.id);
  }

  enter() {
    this.displayActions = 'block'
  }

  leave() {
    this.displayActions = 'none'
  }
}
