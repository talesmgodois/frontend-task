import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteComponent } from './create-note.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

describe('CreateNoteComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[FormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [ CreateNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
