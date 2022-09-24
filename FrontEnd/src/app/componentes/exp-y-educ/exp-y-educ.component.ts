import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { SEducacionService } from 'src/app/servicios/s-educacion.service';
import { SExperienciaService } from 'src/app/servicios/s-experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-exp-y-educ',
  templateUrl: './exp-y-educ.component.html',
  styleUrls: ['./exp-y-educ.component.css']
})
export class ExpYEducComponent implements OnInit {
  expe: Experiencia[] = [];
  educ: Educacion[] = [];

  constructor(private sExperiencia: SExperienciaService, private sEducacion: SEducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          alert("La experiencia a sido borrada");
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data => {this.educ = data;})
  }

  deleteE(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
          alert("La educación a sido borrada");
        }, err => {
          alert("No se pudo borrar la educación");
        }
      )
    }
  }
}

