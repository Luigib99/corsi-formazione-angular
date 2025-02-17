import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocentiComponent } from './docenti/docenti.component';
import { DiscentiComponent } from './discenti/discenti.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AddElementComponent } from './admin-tools/add-element/add-element.component';
import { AddDocenteComponent } from './admin-tools/add-element/add-docente/add-docente.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoDocenteComponent } from './docenti/info-docente/info-docente.component';
import { DeleteElementComponent } from './admin-tools/delete-element/delete-element.component';
import { UpdateElementComponent } from './admin-tools/update-element/update-element.component';
import { DeleteDocenteComponent } from './admin-tools/delete-element/delete-docente/delete-docente.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UpdateDocenteComponent } from './admin-tools/update-element/update-docente/update-docente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DiscentiComponent,
    HomeComponent,
    AddElementComponent,
    AddDocenteComponent,
    InfoDocenteComponent,
    DeleteElementComponent,
    UpdateElementComponent,
    DeleteDocenteComponent,
    UpdateDocenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DocentiComponent,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
