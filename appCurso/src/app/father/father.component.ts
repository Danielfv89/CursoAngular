import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  advises: string[] = ['Aviso1', 'Aviso2', 'Aviso3'];
  text: string;
  showMessages(event) {
    this.text = event + ' marcado como leído';
  }

  fatherValue: string = 'texto inyectado desde el padre';
  constructor() { }

  ngOnInit() {
  }

}
