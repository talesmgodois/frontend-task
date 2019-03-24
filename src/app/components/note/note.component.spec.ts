import { ShowNoteComponent } from './../show-note/show-note.component';
import { CreateNoteComponent } from './../create-note/create-note.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from './note.component';
import { AppRoutingModule } from '../../app-routing.module';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { RouteNotFoundComponent } from '../route-not-found/route-not-found.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[AppRoutingModule, FormsModule, MaterialModule],
      declarations: [ NoteComponent, CreateNoteComponent, ShowNoteComponent, EditNoteComponent, RouteNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
