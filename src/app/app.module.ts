import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExpYEducComponent } from './componentes/exp-y-educ/exp-y-educ.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavbarComponent,
    AcercaDeComponent,
    ExpYEducComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
