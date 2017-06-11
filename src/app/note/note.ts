class Note {
  id: number;
  title: string;
  text: string;
  background_color: string;
  text_color: string;
  static nextId: number = 0;

  constructor(title: string = '', text: string = '', background_color: string = '#fff', text_color: string = 'black') {
    this.id = Note.nextId++;
    this.title = title;
    this.text = text;
    this.background_color = background_color;
    this.text_color = text_color;
  }
}

export default Note;
