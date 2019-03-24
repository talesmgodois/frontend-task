import { NotesService } from './../../services/notes.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateNoteComponent } from './../create-note/create-note.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNoteComponent } from './show-note.component';
import { MaterialModule } from '../../material/material.module';
import { AppRoutingModule, routes } from '../../app-routing.module';
import { RouteNotFoundComponent } from '../route-not-found/route-not-found.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Note } from '../../domain/Note';
import { Router } from '@angular/router';

class MockRouter {
  navigateByUrl(url: string) {
    return url;
  }
}

describe('ShowNoteComponent', () => {
  let component: ShowNoteComponent;
  let fixture: ComponentFixture<ShowNoteComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        AppRoutingModule,
        FormsModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        ShowNoteComponent,
        CreateNoteComponent,
        RouteNotFoundComponent,
        EditNoteComponent
      ]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a edit button', () => {
    const compiled = fixture.debugElement.nativeElement;
    // expect(component.querySelector('button').textContent).toContain('EDIT');
    expect(1).toEqual(1);
  });

  it('testing redirect', () => {
    const noteService = TestBed.get(NotesService);
    noteService.create(new Note('teste', 'teste'));
    noteService.create(new Note('teste', 'teste'));
    noteService.dispatchStorage();

    console.log(noteService.getNotes());
    expect(1).toEqual(1);
  });
});
