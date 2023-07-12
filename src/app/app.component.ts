import { Component } from '@angular/core';
import { Producto } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejercicio-integrador';

  productos:Producto[] = [
    {nombre: "Estetoscopio", costo: "10000"},
    {nombre: "Tensiometro", costo: "15000"},
    {nombre: "Otoscopio", costo: "15000"},
    {nombre: "Oxímetro", costo: "12000"},
  ]

  mostrar= false;
  mostrarLista():void{
    this.mostrar=true;
  }

  ocultarLista(): void{
    this.mostrar=false;
  }
}
