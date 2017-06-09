import { Component } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import Note from '../note/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.sass']
})
export class NoteFormComponent {
  note: Note = new Note();

  constructor(private cpService: ColorPickerService) { }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.note);
  }

}
