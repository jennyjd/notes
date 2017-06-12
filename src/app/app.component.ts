import { Component, OnInit } from '@angular/core';
import Note from './note/note';
import NoteService from './note/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [NoteService]
})
export class AppComponent implements OnInit {
  title: string = 'Notes App';
  notes: Note[];
  edit_form: boolean = false;
  edit_note: Note;

  constructor(private noteService: NoteService) { }

  showEditForm(note): void {
    this.edit_note = note;
    this.edit_form = true;
  }

  closeEditForm(): void {
    this.edit_form = false;
  }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.notes = this.noteService.getNotes();
  }
}
