import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exdirectivengswitch',
  templateUrl: './exdirectivengswitch.component.html',
  styleUrls: ['./exdirectivengswitch.component.css']
})
export class ExdirectivengswitchComponent implements OnInit {

  jugadores: any[] = [
    { nombre: 'Perico Palotes', equipo: 'Palotes F.C.'},
    { nombre: 'Fulano Mengano', equipo: 'Zuntanitos C.D.'},
    { nombre: 'Alberto Ruperto', equipo: 'RupertClub'},
    { nombre: 'Tomás Turbao', equipo: 'Palotes F.C.'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
