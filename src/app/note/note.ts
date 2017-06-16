import { IMyDate } from 'mydatepicker';

class Note {
  id: number;
  title: string;
  text: string;
  date: { date:IMyDate };
  static nextId: number = 0;

  static todayDate = Note.setDefaultDate();

  constructor(title: string = '', text: string = '', date: { date:IMyDate } = Note.todayDate) {
    this.id = Note.nextId++;
    this.title = title;
    this.text = text;
    this.date = date;
  }

  static setDefaultDate() {
    let date = new Date();
    return {
      date: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      }
    }
  }
}

export default Note;
