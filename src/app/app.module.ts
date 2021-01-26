import { JugadoresService } from './services/jugadores.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistorialComponent } from './juego/historial/historial.component';
import { JuegoComponent } from './juego/juego.component';
import { ListaJugadoresComponent } from './juego/lista-jugadores/lista-jugadores.component';
import { JugadorComponent } from './juego/jugador/jugador.component';
import { GestorJugadorComponent } from './juego/gestor-jugador/gestor-jugador.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';


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
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [JugadoresService], //si quiero que los servicios sean singleton tengo que declararlos aca
  bootstrap: [AppComponent]
})
export class AppModule { }
