import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent implements OnInit {

  copyrigth: string = '© ACME';
  hoy : any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
