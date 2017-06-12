import { Component, Input, Output, EventEmitter } from '@angular/core';
import NoteService from './note.service';
import Note from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})

export class NoteComponent {
  @Input() note: Note;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  displayActions: boolean = false;

  constructor(private noteService: NoteService) { }

  deleteNote() {
    this.noteService.deleteNode(this.note.id);
  }

  editNote() {
    this.onEdit.emit(Object.assign({}, this.note));
  }

  toggleActions() {
    this.displayActions = !this.displayActions;
  }
}
