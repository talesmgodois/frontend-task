import { EditNoteComponent } from './components/edit-note/edit-note.component';
import { CreateNoteComponent } from './components/create-note/create-note.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowNoteComponent } from './components/show-note/show-note.component';

import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';

export const routes: Routes = [
  {
    path: 'notes/create',
    component:  CreateNoteComponent
  },
  {
    path: 'notes/edit/:id',
    component: EditNoteComponent
  },
  {
    path: 'notes/show/:id',
    component: ShowNoteComponent
  },

  { path: '', redirectTo: '/notes/create', pathMatch: 'full' },
  
  {
    path: '**',
    component: RouteNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
