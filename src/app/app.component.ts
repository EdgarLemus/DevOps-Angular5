import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'HolaMundo';
  public descripcion = 'Semillero de DevOps';
  public integrantes = [
    'Manuela Jaramillo',
    'Janinson Hurtado',
    'Edgar Lemus'
  ];
}
