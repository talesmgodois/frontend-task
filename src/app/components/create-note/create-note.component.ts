import { NotesService } from './../../services/notes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Note } from '../../domain/Note';
import { StorageService } from './../../services/storage.service';

@Component({
    selector: 'app-create-note',
    templateUrl: './create-note.component.html',
    styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
    public note: Note = new Note();

    constructor(private notesService: NotesService) { }

    create() {
        this.notesService.create(this.note);
    }

    ngOnInit() { }
}
