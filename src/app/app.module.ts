import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    DashboardComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
