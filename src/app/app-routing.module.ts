import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrillaAlumnosComponent } from './components/grilla-alumnos/grilla-alumnos.component';
import { DetalleAlumnoComponent } from './components/detalle-alumno/detalle-alumno.component';

const routes: Routes = [
  {path:'',component:GrillaAlumnosComponent},
  {path:':param',component:GrillaAlumnosComponent},
  {path:'detalle/:legajo',component:DetalleAlumnoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
