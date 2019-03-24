import { Injectable } from '@angular/core';
import { Note } from '../domain/Note';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() { }
    readonly NOTES = 'notes';
    readonly CURRENT_NOTE = 'currentNote';

    public notes: Note[];

    private store(key: string, obj: Object): void {
        localStorage.setItem(key, this.getJson(obj));
    }

    private getJson(obj: Object): string {
        return JSON.stringify(obj);
    }

    private getObjFromJson(str: string): any {
        try {
            return JSON.parse(str);
        } catch (e) {
            return null;
        }
    }

    public getObj(key: string): any {
        return this.getObjFromJson(localStorage.getItem(key));
    }

    public storeNotes(notes: Note[]): void {
        this.store(this.NOTES, notes);
    }

    public storeCurrentNote(note: Note): void {
        this.store(this.CURRENT_NOTE, note);
    }

    public getCurrentNote(): Note {
        return this.getObj(this.CURRENT_NOTE);
    }

    public getNotes(): Note[] {
        const notes = this.getObj(this.NOTES);

        return notes ? notes : [];
    }
}
