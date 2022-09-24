import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExpYEducComponent } from './componentes/exp-y-educ/exp-y-educ.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialComponent } from './componentes/social/social.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InterceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './componentes/exp-y-educ/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/exp-y-educ/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/exp-y-educ/new-educacion.component';
import { EditEducacionComponent } from './componentes/exp-y-educ/edit-educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    NavbarComponent,
    AcercaDeComponent,
    ExpYEducComponent,
    SocialComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
