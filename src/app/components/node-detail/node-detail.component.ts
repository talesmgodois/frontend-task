import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/domain/Note';
import { NotesService } from '../../services/notes.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-node-detail',
    templateUrl: './node-detail.component.html',
    styleUrls: ['./node-detail.component.scss']
})
export class NodeDetailComponent implements OnInit {
    public currentNote: Note;
    readonly ACTIVE_COLOR: 'rgb(202, 199, 255)';

    constructor(private notesService: NotesService, private router: Router) { }

    @Input()
    public model: Note;

    public remove() {
        this.notesService.delete(this.model);
    }

    public navigate() {
        this.notesService.setCurrentNote(this.model);
        this.router.navigate(['notes/show/' + this.model.id]);
    }

    public isActive() {
        const currentNote = this.notesService.getCurrentNote();
        if (this.model && currentNote) {
            return currentNote.id === this.model.id;
        }
        return false;
    }

    public getStyle(): any {
        return this.isActive() ? { 'background-color': 'rgb(202,199,255)' } : {};
    }

    ngOnInit() { }
}
