import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar()
  }

  modelPersona:Persona = new Persona();

  Editar(){
    let id = localStorage.getItem("id");
    this.service.getPersonaId(+id)
      .subscribe(data => {this.modelPersona = data
    })
  }

  Modificar(persona:Persona){
    this.service.updatePersona(persona)
      .subscribe(data => {
          this.modelPersona = data;
          alert("Se actualizo registro")
          this.router.navigate(['listar'])
      })
  }
}
