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
    new Note('Заголовок', 'кекус пекус', '#f9aaaa'),
    new Note('Трав овар', 'трали вали', 'rgba(84,218,64,0.34)'),
    new Note('Вроыв ыоп', 'юпи тупи', 'rgba(17,197,255,0.31)'),
    new Note('Вываол', 'чака лака', 'rgba(255,217,8,0.33)'),
  ];
}
