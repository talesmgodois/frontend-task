import { ShowNoteComponent } from './../show-note/show-note.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ListNotesComponent } from './list-notes.component';
import { NodeDetailComponent } from '../node-detail/node-detail.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { EditNoteComponent } from '../edit-note/edit-note.component';
import { RouteNotFoundComponent } from '../route-not-found/route-not-found.component';

describe('ListNotesComponent', () => {
  let component: ListNotesComponent;
  let fixture: ComponentFixture<ListNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[FormsModule, MaterialModule, BrowserAnimationsModule, RouterTestingModule, AppRoutingModule],
        declarations: [ ListNotesComponent, NodeDetailComponent, CreateNoteComponent, EditNoteComponent, ShowNoteComponent, RouteNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
