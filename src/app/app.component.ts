import { Component } from '@angular/core';
import Note from './note/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title: string = 'Notes App';
  notes: Note[] = [
    new Note('Заголовок', 'кекус пекус', 'green'),
    new Note('Трав овар', 'трали вали', 'white'),
    new Note('Вроыв ыоп', 'юпи тупи', 'blue'),
    new Note('Вываол', 'чака лака', 'yellow'),
  ];
}
