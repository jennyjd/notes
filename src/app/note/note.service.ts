import { Injectable } from '@angular/core';
import Note from './note';

@Injectable()
class NoteService {
  notes: Note[];

  constructor() {
    this.notes = [
      new Note('14/06/2017', '14:00 - Собрание по дипломному проекту', '#b81247', 'white'),
      new Note('20/06/2017', 'Защита', '#ff500d', 'white'),
      new Note('Купить', '1.молоко<br />2.хлеб', '#bcff73', 'black'),
      new Note('Планы на лето', '...', 'rgba(44,220,163,0.54)', 'black'),
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
