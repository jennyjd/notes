import { Injectable } from '@angular/core';
import Note from './note';

@Injectable()
class NoteService {
  notes: Note[];

  constructor() {
    this.notes = [
      new Note('Заголовок', 'кекус пекус', '#f9aaaa'),
      new Note('Трав овар', 'трали вали', 'rgba(84,218,64,0.34)'),
      new Note('Вроыв ыоп', 'юпи тупи', 'rgba(17,197,255,0.31)'),
      new Note('Вываол', 'чака лака', 'rgba(255,217,8,0.33)'),
    ];
  }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(note): void {
    this.notes.push(note);
  }
}

export default NoteService;