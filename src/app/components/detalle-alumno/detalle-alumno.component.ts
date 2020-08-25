import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Entidad } from 'src/app/entities/Entidad';
import { ServicioService } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.css']
})
export class DetalleAlumnoComponent implements OnInit {

  constructor(private ruta:ActivatedRoute, private servicio:ServicioService ) { }

  element:Entidad

  ngOnInit(): void {
  this.ruta.params.subscribe(params=>{
    let param= params['legajo']
    if(param=='1'){
this.element=this.mejorAlumno()
    }else{
      this.element=this.servicio.getOne(Number(param))
    }


  }

    )


  }
volver(){
  window.history.back()
}
calcularPromedio(notas:number[]){
 return  this.servicio.calcularPromedio(notas)
}
mejorAlumno(){
 return  this.element=this.servicio.mejorAlumno()
}
}
