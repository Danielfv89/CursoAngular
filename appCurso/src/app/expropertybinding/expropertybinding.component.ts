import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expropertybinding',
  templateUrl: './expropertybinding.component.html',
  styleUrls: ['./expropertybinding.component.css']
})
export class ExpropertybindingComponent implements OnInit {

  texto = 'write somethig motherfucker';

  constructor() {
    setTimeout(() => {
        this.texto = 'please'
    }, 3000);
  }

  ngOnInit() {
  }

}
