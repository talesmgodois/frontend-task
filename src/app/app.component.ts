import { NotesService } from './services/notes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Note } from './domain/Note';
import { Observable } from 'rxjs';
import { StorageService } from './services/storage.service';
import { Router } from '@angular/router';
import { MaterialModule } from './material/material.module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    public title = 'adeva-notes';

    constructor(private notesService: NotesService, private route: Router) { }

    ngOnInit(): void {
        this.notesService.loadNotes();
        window.onbeforeunload = ev => {
            this.notesService.dispatchStorage();
        };
    }

    public getNotes(): Note[] {
        return this.notesService.getNotes();
    }

    public goHome() {
        this.route.navigate(['']);
    }

    ngOnDestroy(): void {
        this.notesService.dispatchStorage();
    }
}
