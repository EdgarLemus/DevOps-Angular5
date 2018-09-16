import { Component } from '@angular/core';

@Component({
    selector: 'convertidor',
    template: `
    <h1>Operacion</h1>
    <input [(ngModel)]="numero" class="form-control" type = "number" #ctrl="ngModel" placeholder="Ingrese numero"  required>
    <p>Value: {{ resultado }}</p>
    <button (click)="Convertidor()" class="btn btn-pimary">Convertir</button>
    `
  })

  export class ConvertidorComponent
  {
    numero: number;
    resultado: string;

    constructor()
    {

    }

    Convertidor()
    {
        this.resultado = 'IX';
    }
  }