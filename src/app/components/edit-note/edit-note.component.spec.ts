import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNoteComponent } from './edit-note.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditNoteComponent', () => {
  let component: EditNoteComponent;
  let fixture: ComponentFixture<EditNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[FormsModule, MaterialModule, BrowserAnimationsModule, RouterTestingModule],
      declarations: [ EditNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
