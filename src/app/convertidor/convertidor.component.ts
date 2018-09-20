import { Component } from '@angular/core';

@Component({
  selector: 'convertidor',
  template: `
    <h1>Operacion</h1>
    <input [(ngModel)]="numero" class="form-control" type = "number" placeholder="Ingrese numero"  >
    <p>Value: {{ resultado }}</p>
    <button (click)="Convertidor(numero)" class="btn btn-pimary">Convertir</button>
    `
})

export class ConvertidorComponent {
  public numero: number;
  public resultado: String;
  public unidad: number;
  public decena: number;
  public letra: String;
  public temporal: string;
  public temporalDecenas: String;
  ;

  constructor() {
    this.temporal = '';

  }

  Convertidor(numero: number) {
    this.letra = String(numero);

    if (this.letra.length == 1) {
      this.unidad = Number(this.letra.charAt(0));
      this.resultado = this.Unidades(this.unidad);
      this.temporal = '';
    }

    if (this.letra.length == 2) {
      this.unidad = Number(this.letra.charAt(1));
      this.temporal = '';
      this.decena = Number(this.letra.charAt(0));
      this.temporal = '';
      this.resultado = this.Decenas(this.decena).concat(this.Unidades(this.unidad));
    }

  }

  Unidades(numero: number): string {
    if (numero > 0 && numero < 10) {
      switch (numero) {
        case 1:
          this.temporal = 'I';
          break;
        case 2:
          this.temporal = 'II';
          break;
        case 3:
          this.temporal = 'III';
          break;
        case 4:
          this.temporal = 'IV';
          break;
        case 9:
          this.temporal = 'IX';
        default:
          if (numero < 9) {
            this.temporal = 'V';
            for (let index = 5; index < numero; index++) {
              this.temporal = this.temporal + 'I';
            }
            break;
          }
      }
    }
    return this.temporal;
  }

  Decenas(numero: number): string {
    if (numero > 0 && numero < 10) {
      switch (numero) {
        case 1:
          this.temporal = 'X';
          break;
        case 2:
          this.temporal = 'XX';
          break;
        case 3:
          this.temporal = 'XXX';
          break;
        case 4:
          this.temporal = 'XL';
          break;
        case 9:
          this.temporal = 'XC';
        default:
          if (numero < 9) {
            this.temporal = 'L';
            for (let index = 5; index < numero; index++) {
              this.temporal = this.temporal + 'X';
            }
            break;
          }
      }
    }
    return this.temporal;
  }

}