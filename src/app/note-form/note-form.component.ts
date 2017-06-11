import { Component } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import { NgForm } from '@angular/forms';
import NoteService from '../note/note.service';
import Note from '../note/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.sass']
})
export class NoteFormComponent {
  note: Note = new Note();

  constructor(private cpService: ColorPickerService, private noteService: NoteService) { }

  onSubmit(e, noteForm: NgForm) {
    console.log(this.note);
    e.preventDefault();
    this.noteService.addNote(this.note);
    this.clearForm();
  }

  clearForm(): void {
    this.note = new Note();
  }

  changeTextColor(element: HTMLInputElement): void {
    this.note.text_color = element.value;
  }
}
