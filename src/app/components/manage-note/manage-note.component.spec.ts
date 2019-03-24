import { NodeDetailComponent } from './../node-detail/node-detail.component';
import { MaterialModule } from './../../material/material.module';
import { EditNoteComponent } from './../edit-note/edit-note.component';
import { ShowNoteComponent } from './../show-note/show-note.component';
import { CreateNoteComponent } from './../create-note/create-note.component';
import { AppRoutingModule } from './../../app-routing.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNoteComponent } from './manage-note.component';
import { FormsModule } from '@angular/forms';
import { RouteNotFoundComponent } from '../route-not-found/route-not-found.component';

describe('ManageNoteComponent', () => {
  let component: ManageNoteComponent;
  let fixture: ComponentFixture<ManageNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[AppRoutingModule, FormsModule, MaterialModule],
      declarations: [ ManageNoteComponent, CreateNoteComponent, ShowNoteComponent, EditNoteComponent,RouteNotFoundComponent, NodeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
