import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu-superior-de-opciones',
  templateUrl: './menu-superior-de-opciones.component.html',
  styleUrls: ['./menu-superior-de-opciones.component.css']
})
export class MenuSuperiorDeOpcionesComponent implements OnInit {

  constructor(private servicio: ServicioService, private router:Router) { 

  }
  legajo:number
  nombre:string
  ngOnInit(): void {
  }
buscarPorLegajo(){
this.router.navigate([''+this.legajo])
}
buscarPorNombre(){
  this.router.navigate([''+this.nombre])
  }
}
