import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import {Entidad} from 'src/app/entities/Entidad'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-grilla-alumnos',
  templateUrl: './grilla-alumnos.component.html',
  styleUrls: ['./grilla-alumnos.component.css']
})
export class GrillaAlumnosComponent implements OnInit {

  constructor(private servicio:ServicioService, private ruta:ActivatedRoute) { }

  datos:Entidad[]

  ngOnInit(): void {
  
    this.ruta.params.subscribe(params=>{
      
      let param= params['param']
    
      let legajo=Number(param) //Si es string lo convierte a NaN 
      console.log(param)
     if(param==undefined){
     
      this.datos=this.servicio.datos
     }else if(isNaN(legajo)){ 
 
       this.datos=this.servicio.buscarPorNombre(param)
     }else{
 
       this.datos=this.servicio.buscarPorLegajo(legajo)
     }
    })
    
  }
calcularPromedio(notas:any[]){
return this.servicio.calcularPromedio(notas)
}
}
