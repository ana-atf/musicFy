import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  listaCanciones = this._data.listaCanciones;
  listaFavoritas = this._data.ListaFavoritas;
  constructor(public _data: DataService) { }

  addFavoritas(item: string, posicion: number): void {
    this._data.addFavoritas(item);
    this._data.deleteFav(posicion);
  }

}
