import { Injectable } from '@angular/core';
import * as  data from '../../assets/json/alumnos.json'

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
datos:any= (data as any).default
  constructor( ) { 
    console.log('datos')
    console.log(this.datos)
  }
}
