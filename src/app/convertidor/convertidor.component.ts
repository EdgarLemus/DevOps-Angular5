import { Component } from '@angular/core';

@Component({
  selector: 'convertidor',
  template: `
    <h1>{{ titulo }}</h1>
    <h6>{{ aviso }}</h6>
    <input [(ngModel)]="numero" class="form-control" type = "number" placeholder="Ingrese numero" required>
    <h6 class = "text-danger"> {{ error }}</h6>
    <p>Resultado: {{ mil }}{{ centena }}{{ decena }}{{ unidad }}</p>
    <button (click)="Convertidor(numero)" class="btn btn-pimary">Convertir</button>
    `
})

export class ConvertidorComponent {
  public numero: number;
  public unidad: string;
  public decena: string;
  public centena: string;
  public mil: string;
  public letra: String;
  public temporal: string;
  public aviso: String;
  public titulo: string;
  public error: string;
  ;

  constructor() {
    this.temporal = '';
    this.aviso = 'Ingresar un numero mayor que 0 y menor de 10,000';
    this.titulo = 'Convertidor de numeros romanos';
  }

  Convertidor(numero: number) {
    this.letra = String(numero);

    switch (this.letra.length) {
      case 1:
        this.error = '';
        this.unidad = this.Unidades(Number(this.letra.charAt(0)));
        this.temporal = '';
        break;
      case 2:
        this.error = '';
        this.unidad = this.Unidades(Number(this.letra.charAt(1)));
        this.decena = this.Decenas(Number(this.letra.charAt(0)));
        this.temporal = '';
        break;
      case 3:
        this.error = '';
        this.unidad = this.Unidades(Number(this.letra.charAt(2)));
        this.decena = this.Decenas(Number(this.letra.charAt(1)));
        this.centena = this.Centanas(Number(this.letra.charAt(0)));
        this.temporal = '';
        break;
      case 4:
        this.error = '';
        this.unidad = this.Unidades(Number(this.letra.charAt(3)));
        this.decena = this.Decenas(Number(this.letra.charAt(2)));
        this.centena = this.Centanas(Number(this.letra.charAt(1)));
        this.mil = this.Miles(Number(this.letra.charAt(0)));
        this.temporal = '';
        break;
      default:
        if (this.numero == null) {
          this.error = 'Por favor ingrese un numero';
        } else {
          this.error = 'Por favor ingrese un numero entero mayor a 0 y menor a 10,000';
        }
        break;
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
          break;
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
          break;
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

  Centanas(numero: number): string {
    if (numero > 0 && numero < 10) {
      switch (numero) {
        case 1:
          this.temporal = 'C';
          break;
        case 2:
          this.temporal = 'CC';
          break;
        case 3:
          this.temporal = 'CCC';
          break;
        case 4:
          this.temporal = 'CD';
          break;
        case 9:
          this.temporal = 'CM';
          break;
        default:
          if (numero < 9) {
            this.temporal = 'D';
            for (let index = 5; index < numero; index++) {
              this.temporal = this.temporal + 'X';
            }
            break;
          }

      }
    }
    return this.temporal;
  }

  Miles(numero: number): string {
    if (numero > 0 && numero < 10) {
      switch (numero) {
        case 1:
          this.temporal = 'M';
          break;
        case 2:
          this.temporal = 'MM';
          break;
        case 3:
          this.temporal = 'MMM';
          break;
        case 4:
          this.temporal = '|IV|';
          break;
        case 9:
          this.temporal = '|IX|';
          break;
        default:
          if (numero < 9) {
            this.temporal = 'V';
            for (let index = 5; index < numero; index++) {
              this.temporal = this.temporal + 'I';
            }
            this.temporal = '|' + this.temporal + '|';
            break;
          }

      }
    }
    return this.temporal;
  }


}