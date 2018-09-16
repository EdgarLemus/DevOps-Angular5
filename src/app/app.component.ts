import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  descripcion = 'Es el Hola Mundo en Angular 5 para el semillero de DevOps';
  numero: number;
  resultado: string;

  valores = [1, 5, 10, 50, 100, 500, 1000];
  letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  res = [];
  //num: string;
  
  constructor()
  {
    if(this.numero == 9)
    {

    this.resultado = "9";
    }
  }

  Operacion()
  {
    
  }
}
