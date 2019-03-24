import { Component, OnInit, Input } from '@angular/core';

import {Note} from '../../domain/Note';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {
  @Input()
  public notes: Note[] = [];

  public searchText: string = '';

  constructor(private notesService: NotesService) {}

  public getNotes(): Note[] {
    const str = this.searchText;
    if (str) 
    {
        if(str.length > 0){
            return this.notes.filter(
                _note => _note.content.includes(str) || _note.title.includes(str)
            );
        }

    } 
    return this.notes;
  }

  deleteAll() {
    this.notesService.deleteAll();
  }

  ngOnInit() {}
}
