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

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.notes = this.noteService.getNotes();
  }
}
