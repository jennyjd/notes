class Note {
  id: number;
  title: string;
  text: string;
  color: string;
  static nextId: number = 0;

  constructor(title: string, text: string, color: string) {
    this.id = Note.nextId++;
    this.title = title;
    this.text = text;
    this.color = color;
  }
}

export default Note;
