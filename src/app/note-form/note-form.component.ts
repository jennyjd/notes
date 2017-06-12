import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ColorPickerService } from 'angular4-color-picker';
import { NgForm } from '@angular/forms';
import NoteService from '../note/note.service';
import Note from '../note/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.sass']
})
export class NoteFormComponent implements OnChanges{
  formTitle: string;
  note: Note;
  black_selected: boolean;
  @Input() edit: boolean;
  @Input() edit_note: Note;
  @Output() onCloseEdit: EventEmitter<any> = new EventEmitter();

  constructor(private cpService: ColorPickerService, private noteService: NoteService) {}

  ngOnChanges(): void {
    this.checkFormType();
  }

  checkFormType() {
    if (this.edit) {
      this.formTitle = "Edit your note";
      this.note = this.edit_note;
    }
    else {
      this.formTitle = 'Add new note';
      this.note = new Note();
    }
  }

  addNote(e): void {
    e.preventDefault();
    this.noteService.addNote(this.note);
    this.clearForm();
  }

  updateNote() {
    this.noteService.updateNote(this.note);
    this.closeEdit();
  }

  closeEdit() {
    this.onCloseEdit.emit();
  }

  clearForm(): void {
    this.note = new Note();
  }
}
