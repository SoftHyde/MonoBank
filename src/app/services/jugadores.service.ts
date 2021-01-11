import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  players:Array<Jugador> = new Array<Jugador>();
  constructor() {
    this.players.push(new Jugador(0,"jugador 1",0));
    this.players.push(new Jugador(1,"jugador 2",0))
  }

  agregarJugador(newJugador: Jugador){
    if (this.players.length<6){
      this.players.push(newJugador);
    }
  }

  eliminarJugador(eraseJugador: Jugador): void{
    if (this.players.length>2){
      this.players = this.players.filter(jug => jug.id!=eraseJugador.id);
    }
  }

}
