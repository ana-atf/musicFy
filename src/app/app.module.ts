import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { PlayerComponent } from './player/player.component';
import { DataService } from './services/data.service';
import { RouterModule, Routes, } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routerConfig: Routes = [
  {path: '', component: SongListComponent}, // ruta por defecto
  { path: 'home', component: SongListComponent }, // ruta ESTATICA
  { path: 'search', component: SearchComponent }, // ruta ESTATICA
  { path: 'songList', component: SongListComponent }, // ruta ESTATICA
  {path: 'player/:id', component: PlayerComponent}, //rutA DINAMITA
  {path: '**', component: SongListComponent} // vista para la página 404]
]

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    PlayerComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig, {useHash: true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
