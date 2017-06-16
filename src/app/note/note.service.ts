import { Injectable } from '@angular/core';
import Note from './note';

@Injectable()
class NoteService {
  notes: Note[];

  constructor() {
    this.notes = [
      new Note('14/06/2017', '14:00 - Собрание по дипломному проекту', {date: {day: 14, month: 6, year: 2017}}),
      new Note('20/06/2017', 'Защита', {date: {day: 20, month: 6, year: 2017}}),
      new Note('Купить', '1.молоко<br />2.хлеб'),
      new Note('Планы на лето', '...'),
    ];
  }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  deleteNode(note_id: number): void {
    this.notes.forEach((note, ind) => {
      if (note.id == note_id) {
        this.notes.splice(ind,1);
      }
    });
  }

  updateNote(edit_note: Note) {
    this.notes.forEach((note, ind) => {
      if (note.id == edit_note.id) {
        this.notes.splice(ind, 1, edit_note);
      }
    });
  }
}

export default NoteService;
