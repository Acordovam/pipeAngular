import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  activar = true;
  nombre2 = 'AleJandRo cOrdoVa';
  arreglo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  Porcentaje = 0.243;
  salario = 1234.5;
  fecha: Date  = new Date();
  idioma = 'en';
  videoUrl = 'https://www.youtube.com/embed/kL7KOjYbzUg';
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
      }
    , 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };
}

