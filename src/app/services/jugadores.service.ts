import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  jugadoresListos: boolean = false;
  playerSeleccionado:number = 0 //es el indice del jugador
  players:Array<Jugador> = new Array<Jugador>();
  historial: string = 'Bienvenido a Monopoly!. Que comience la partida';

  constructor() {
    this.players.push(new Jugador(0,"jugador 1",0,false));
    this.players.push(new Jugador(1,"jugador 2",0,false))
  }

  actualizarHistorial(text: string){
    this.historial= text +  this.historial;
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

  modificarMonto(jugadorModificar: Jugador, nuevoMonto: number): void{
    if (nuevoMonto > 0){
      this.players.find(jug => jug.id==jugadorModificar.id).monto=nuevoMonto;
    }
  }

  actualizarJugadorSeleccionado(indice: number): void{
    this.playerSeleccionado=indice;
  }

  // verificarBancarrota(jugador: Jugador){
  //   this.players.forEach(jug => {
  //     if (jug.monto<=0) jug.estaBancarrota=true;
  //   });
  // }
}
