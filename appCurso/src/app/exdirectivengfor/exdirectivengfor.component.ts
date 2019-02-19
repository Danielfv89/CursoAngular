import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exdirectivengfor',
  templateUrl: './exdirectivengfor.component.html',
  styleUrls: ['./exdirectivengfor.component.css']
})
export class ExdirectivengforComponent implements OnInit {

  cursos: string[];

  constructor() {
    this.cursos = ['Angular', 'html', 'css'];
   }

  ngOnInit() {
  }

}
