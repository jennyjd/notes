import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import NoteService from './note.service';
import Note from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})

export class NoteComponent implements OnInit{
  @Input() note: Note;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  displayActions: boolean = false;
  note_date: string = '';

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    const date = this.note.date.date;
    this.note_date = `${date.day}-${date.month}-${date.year}`;
  }

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
