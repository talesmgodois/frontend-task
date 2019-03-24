import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Note } from '../../domain/Note';
import { switchMap } from 'rxjs/operators';
import { NotesService } from '../../services/notes.service';

@Component({
    selector: 'app-edit-note',
    templateUrl: './edit-note.component.html',
    styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {
    public currentNote: Note;
    private currentNote$: Observable<Note>;

    constructor(
        private route: ActivatedRoute,
        private notesService: NotesService
    ) { }

    ngOnInit() {
        this.currentNote$ = this.route.paramMap.pipe(
            switchMap(params => {
                return this.notesService.getNoteById(+params.get('id'));
            })
        );

        this.currentNote$.subscribe(currentNote => {
            this.currentNote = Note.copy(currentNote);
            this.notesService.setCurrentNote(this.currentNote);
        });
    }

    update() {
        this.notesService.update(this.currentNote);
    }
}
