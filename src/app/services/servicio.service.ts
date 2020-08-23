import { Injectable } from '@angular/core';
import * as  data from '../../assets/json/alumnos.json'
// en tsconfig.base.json pegar esta propiedad en compilation unit debajo de eport ->     "resolveJsonModule": true, y cerrar y volver abrir ide
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
datos:any= (data as any).default
  constructor( ) { 
    console.log('datos')
    console.log(this.datos)
  }
  calcularPromedio(notas:any[]){
    return notas.reduce((anterior,actual)=>anterior+=actual)/notas.length
  }
}
