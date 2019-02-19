import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exeventbinding',
  templateUrl: './exeventbinding.component.html',
  styleUrls: ['./exeventbinding.component.css']
})
export class ExeventbindingComponent implements OnInit {

  texto = 'UeO';

  constructor() { }

  ngOnInit() {
  }

  modTexto(){
    this.texto = 'mostramos al pulsar';
  }
}
