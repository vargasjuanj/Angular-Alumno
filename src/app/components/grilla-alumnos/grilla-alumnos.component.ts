import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import {Entidad} from 'src/app/entities/Entidad'
@Component({
  selector: 'app-grilla-alumnos',
  templateUrl: './grilla-alumnos.component.html',
  styleUrls: ['./grilla-alumnos.component.css']
})
export class GrillaAlumnosComponent implements OnInit {

  constructor(private servicio:ServicioService) { }
datos:Entidad[]
  ngOnInit(): void {
    this.datos=this.servicio.datos
  }
calcularPromedio(notas:any[]){
return notas.reduce((anterior,actual)=>anterior+=actual)/notas.length
}
}
