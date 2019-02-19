import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2waybinding',
  templateUrl: './ex2waybinding.component.html',
  styleUrls: ['./ex2waybinding.component.css']
})
export class Ex2waybindingComponent implements OnInit {

  texto = 'texto original';

  constructor() { }

  ngOnInit() {
  }

}
