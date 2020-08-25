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
  getOne(legajo:number){
return this.datos.find(element=>element.legajo==legajo)
  }
  buscarPorNombre(nombre:string){
    return this.datos.filter(element=>element.alumno.toLowerCase().includes(nombre.toLowerCase()))
  }
  
  buscarPorLegajo(legajo:number){ //la diferencia entre este y getOne, es que como este se va a utilizar en grilla, ncecesito devolver un array porque GrillAlumnos usa un array
  return this.datos.filter(element=>element.legajo==legajo) 

  
  }
  mejorAlumno(){
let promedios = this.datos.map(element=>this.calcularPromedio(element.notas))
let max= Math.max(...promedios)
return this.datos.find(element=>this.calcularPromedio(element.notas)==max)
  }
}
