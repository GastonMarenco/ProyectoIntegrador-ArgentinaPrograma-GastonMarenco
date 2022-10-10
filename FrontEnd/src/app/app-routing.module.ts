import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule } from '@angular/router';
import { NewExperienciaComponent } from './componentes/exp-y-educ/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/exp-y-educ/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/exp-y-educ/new-educacion.component';
import { EditEducacionComponent } from './componentes/exp-y-educ/edit-educacion.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'nuevaeduc', component: NewEducacionComponent},
  {path:'editeduc/:id', component: EditEducacionComponent},
  {path:'newskill', component: NewSkillComponent},
  {path:'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
