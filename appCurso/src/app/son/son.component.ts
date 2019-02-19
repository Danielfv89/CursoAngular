import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  @Input() advise: string;
  @Output() markedMessage = new EventEmitter();

  readed: boolean = false;
  message: string;
  marcar(event) {
    this.readed = !this.readed;
  }

  detectar(event) {
    this.message = this.advise;
    this.markedMessage.emit(this.message);
  }

  constructor() { }

  ngOnInit() {
  }

}
