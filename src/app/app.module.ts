import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistorialComponent } from './historial/historial.component';
import { JuegoComponent } from './juego/juego.component';
import { ListaJugadoresComponent } from './juego/lista-jugadores/lista-jugadores.component';
import { JugadorComponent } from './juego/jugador/jugador.component';
import { GestorJugadorComponent } from './juego/gestor-jugador/gestor-jugador.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HistorialComponent,
    JuegoComponent,
    ListaJugadoresComponent,
    JugadorComponent,
    GestorJugadorComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
