import { Component } from '@angular/core';

@Component ({
    selector: 'app-fechaactual',
    template: `
    <p>Cotización dolar = {{ dolarEuro | euro}}</p>
    <app-copyright></app-copyright>

    `,
    styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
    hoy = new Date();
    ciudad = 'A Coruña';
    dolarEuro = 0.88;
  }
