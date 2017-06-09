import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Notes App';
  notes = [
    {
      title: 'Заголовок',
      text: 'кекус пекус',
      color: 'green'
    },
    {
      title: 'Трав овар',
      text: 'трали вали',
      color: 'white'
    },
    {
      title: 'Вроыв ыоп',
      text: 'юпи тупи',
      color: 'blue'
    },
    {
      title: 'Вываол',
      text: 'чака лака',
      color: 'yellow'
    },
  ];
}
