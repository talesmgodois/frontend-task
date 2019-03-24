import { TestBed } from '@angular/core/testing';

import { NotesService } from './notes.service';
import { Note } from '../domain/Note';

describe('NotesService', () => {
  let service: NotesService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(NotesService);
    service.deleteAll();
    service.dispatchStorage();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should create one item', () => {
    service.create(new Note());
    expect(service.getNotes().length).toBe(1);
  });

  it('Should delete one item', () => {
    service.create(new Note());
    const willBeDeletedNote = service.create(new Note());
    service.delete(willBeDeletedNote);

    const foundNote = service
      .getNotes()
      .find(n => n.id === willBeDeletedNote.id);
    expect(foundNote).toBeUndefined();
  });

  it('Should delete All Itens', () => {
    service.deleteAll();
    expect(service.getNotes().length).toBe(0);
  });
});
