import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exdirectivengstyle',
  templateUrl: './exdirectivengstyle.component.html',
  styleUrls: ['./exdirectivengstyle.component.css']
})
export class ExdirectivengstyleComponent implements OnInit {

  puntuacion: number;
  constructor() { }

  ngOnInit() {
  }
  setColor() {
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

}
