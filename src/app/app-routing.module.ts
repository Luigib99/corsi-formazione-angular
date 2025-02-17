import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DiscentiComponent } from './discenti/discenti.component';
import { AddElementComponent } from './admin-tools/add-element/add-element.component';
import { AddDocenteComponent } from './admin-tools/add-element/add-docente/add-docente.component';
import { DeleteElementComponent } from './admin-tools/delete-element/delete-element.component';
import { DeleteDocenteComponent } from './admin-tools/delete-element/delete-docente/delete-docente.component';
import { UpdateElementComponent } from './admin-tools/update-element/update-element.component';
import { UpdateDocenteComponent } from './admin-tools/update-element/update-docente/update-docente.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent},
  {path: 'docenti', component : DocentiComponent},
  {path: 'discenti', component : DiscentiComponent},
  {path: 'add-element', component : AddElementComponent},
  {path: 'add-element/:add-docente', component : AddDocenteComponent},
  {path: 'delete-element', component : DeleteElementComponent},
  {path: 'delete-element/:delete-docente', component : DeleteDocenteComponent},
  {path: 'update-element', component : UpdateElementComponent},
  {path: 'update-element/:update-docente', component : UpdateDocenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
