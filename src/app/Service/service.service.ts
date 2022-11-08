import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { 

  }

  url = "http://localhost:7575/personas/";

  getpersonas(){
    return this.http.get<Persona[]>(this.url + 'listar') //Concatena la url con la ruta que se requiera
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.url, persona) //Agrega una persona por el metodo Post
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.url + "/" + id)
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.url + "/" + persona.id, persona)
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.url + "/eliminar/" + persona.id)
  }
}
