import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

  proveedores: any[] = [
    {
      nombre: 'Perico',
      mail: 'Palotes@gmail.com',
      tlf: 123456789
    },
    {
      nombre: 'Zutano',
      mail: 'Mengano@gmail.com',
      tlf: 123456789
    }
  ];

  constructor() { }

  getProveedores() {
    return this.proveedores;
  }
}
