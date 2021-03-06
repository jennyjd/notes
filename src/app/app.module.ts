import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { NgSemanticModule } from "ng-semantic";
import { ColorPickerModule } from 'angular4-color-picker';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteActionsComponent } from './note-actions/note-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteFormComponent,
    NoteActionsComponent
  ],
  imports: [
    BrowserModule,
    NgSemanticModule,
    ColorPickerModule,
    FormsModule,
    MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
