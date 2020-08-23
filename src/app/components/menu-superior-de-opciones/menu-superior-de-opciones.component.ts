import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
@Component({
  selector: 'app-menu-superior-de-opciones',
  templateUrl: './menu-superior-de-opciones.component.html',
  styleUrls: ['./menu-superior-de-opciones.component.css']
})
export class MenuSuperiorDeOpcionesComponent implements OnInit {

  constructor(private servicio: ServicioService) { 

  }

  ngOnInit(): void {
  }

}
