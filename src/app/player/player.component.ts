import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  id: number;
  songList = [];
  listaFavoritas = this._data.ListaFavoritas;
  constructor(public _path: ActivatedRoute, public _data: DataService) {
    this.id = this._path.snapshot.params.id;
    this.songList = this._data.songList;
    
  }
  // ngOnAfterViewInit() {
  //   this.id = this._path.snapshot.params.id;
  //   this.songList = this._data.songList;
  // }

}
