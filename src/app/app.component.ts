import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {   //Aqui los enruta de acuerdo al nombre que declaramos en path. Ejem: {path: listar}
  title = 'proyectoangular';

  constructor(private router:Router){

  }

  listar(){
    this.router.navigate(["listar"])
  }
  
  add(){
    this.router.navigate(["add"])
  }

  edit(){
    this.router.navigate(["edit"])
  }
}
