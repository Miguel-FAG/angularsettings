import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';

//Declara las direcciones de los archivos html y en path declara el metodo para utilizarlo en el enrutamiento de app.component.ts
//Ejem: path: 'listar'
const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
