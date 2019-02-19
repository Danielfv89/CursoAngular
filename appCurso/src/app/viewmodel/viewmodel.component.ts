import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-viewmodel',
  templateUrl: './viewmodel.component.html',
  styleUrls: ['./viewmodel.component.css']
})
export class ViewmodelComponent implements OnInit {

  alumno1 = new Alumno (1, 'Juan', 'Pérez', 'A Coruña');

  constructor() { }

  ngOnInit() {
  }

}
