import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent {

  songList = this._data.songList;
  listaFavoritas = this._data.ListaFavoritas;

  constructor(public _data: DataService) {
   
   }

 

}


