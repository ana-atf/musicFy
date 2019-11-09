import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  songList = this._data.songList;
  searchSong = this._data.searchSong;
  
  constructor(public _path: ActivatedRoute, public _data: DataService) { }

 

}
