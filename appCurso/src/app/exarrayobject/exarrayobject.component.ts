import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-exarrayobject',
  templateUrl: './exarrayobject.component.html',
  styleUrls: ['./exarrayobject.component.css']
})
export class ExarrayobjectComponent implements OnInit {

public alumnos: Array<Alumno> = [
  {id: 1, nombre: 'Juan', apellidos: 'Gutierrez', ciudad: 'A Coruña'},
  {id: 2, nombre: 'Pedro', apellidos: 'López', ciudad: 'Málaga'}
];

  constructor() { }

  ngOnInit() {
  }

}
