import { AppModule } from './app.module';
import { MaterialModule } from './material/material.module';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNotesComponent } from './components/list-notes/list-notes.component';
import { NoteComponent } from './components/note/note.component';
import { NodeDetailComponent } from './components/node-detail/node-detail.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ManageNoteComponent } from './components/manage-note/manage-note.component';
import { ShowNoteComponent } from './components/show-note/show-note.component';
import { MatCardModule } from '@angular/material/card';
import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';

import { Note } from './domain/Note';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MaterialModule,
                FormsModule,
                BrowserAnimationsModule
            ],
            declarations: [
                AppComponent,
                ListNotesComponent,
                ManageNoteComponent,
                NodeDetailComponent,
                ManageNoteComponent,
                RouteNotFoundComponent,
                ShowNoteComponent,
                EditNoteComponent,
                CreateNoteComponent
            ]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        console.log(app);
        expect(app).toBeTruthy();
    });

    it(`should have as title 'adeva-notes'`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('adeva-notes');
    });

    it('should render title in a h1 tag', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to adeva-notes!');
    });

    it('should render a add button', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-icon').textContent).toContain('add');
    })
});
