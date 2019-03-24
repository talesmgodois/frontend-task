export class Note {
    public id: number;
    public title: string;
    public content: string;

    public constructor(
        title: string = '',
        content: string = '',
        id: number = null
    ) {
        this.title = title;
        this.content = content;
        this.id = id;
    }

    public copyWithId(id: number): Note {
        return new Note(this.title, this.content, id);
    }

    public static copy(note: Note) {
        if (note) {
            return new Note(note.title, note.content, note.id);
        } else {
            return new Note();
        }
    }
}
