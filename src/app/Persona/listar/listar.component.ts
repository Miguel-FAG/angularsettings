import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas:Persona[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {  //Al iniciar la carga de la pagina
    this.service.getpersonas()  //Obtiene el metodo que se declara en service
      .subscribe(data => {this.personas = data})
  }

  Editar(persona:Persona):void{
    localStorage.setItem("id", persona.id.toString())
    this.router.navigate(["edit"])
  }

  Eliminar(persona:Persona){
    this.service.deletePersona(persona)
      .subscribe(data => {
        alert("Se elimino Registro");
        this.personas = this.personas.filter(p =>p!==persona)
      })
  }

}
