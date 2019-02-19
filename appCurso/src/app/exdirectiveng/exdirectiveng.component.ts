import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exdirectiveng',
  templateUrl: './exdirectiveng.component.html',
  styleUrls: ['./exdirectiveng.component.css']
})
export class ExdirectivengComponent implements OnInit {

  capital: string;

  constructor() { }

  ngOnInit() {
  }
  setResult() {
    return this.capital === 'Santiago de Compostela' ? true : false;
  }

}
