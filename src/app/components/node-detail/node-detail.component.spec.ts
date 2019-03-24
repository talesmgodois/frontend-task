import { EditNoteComponent } from './../edit-note/edit-note.component';
import { CreateNoteComponent } from './../create-note/create-note.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetailComponent } from './node-detail.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { AppRoutingModule } from '../../app-routing.module';
import { ShowNoteComponent } from '../show-note/show-note.component';
import { RouteNotFoundComponent } from '../route-not-found/route-not-found.component';

describe('NodeDetailComponent', () => {
  let component: NodeDetailComponent;
  let fixture: ComponentFixture<NodeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[FormsModule, MaterialModule, AppRoutingModule],
      declarations: [ NodeDetailComponent, CreateNoteComponent, ShowNoteComponent, EditNoteComponent, RouteNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
