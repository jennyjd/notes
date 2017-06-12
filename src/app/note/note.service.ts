import { Injectable } from '@angular/core';
import Note from './note';

@Injectable()
class NoteService {
  notes: Note[];

  constructor() {
    this.notes = [
      new Note('Заголовок', 'кекус пекус', '#f9aaaa', 'black'),
      new Note('Трав овар', 'трали вали', 'rgba(84,218,64,0.34)', 'black'),
      new Note('Вроыв ыоп', 'юпи тупи', 'rgba(17,197,255,0.31)', 'black'),
      new Note('Вываол', 'чака лака', '#0e1d5c', 'white'),
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
