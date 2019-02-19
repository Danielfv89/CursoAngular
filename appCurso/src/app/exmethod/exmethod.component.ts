import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exmethod',
  templateUrl: './exmethod.component.html',
  styleUrls: ['./exmethod.component.css']
})
export class ExmethodComponent implements OnInit {

  puntuacion = 9;

  constructor() { }

  ngOnInit() {
  }

  getPuntuacion() {
    return this.puntuacion;
  }
}
