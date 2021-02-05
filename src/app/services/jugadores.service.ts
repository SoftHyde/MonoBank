import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  contador: number = 1;
  jugadoresListos: boolean = false;
  playerSeleccionado:number = 0 //es el indice del jugador
  players:Array<Jugador> = new Array<Jugador>();
  historial: string = 'Bienvenido a Monopoly!. Que comience la partida';

  constructor() {
    // this.players.push(new Jugador(0,"jugador 1",0,false));
    // this.players.push(new Jugador(1,"jugador 2",0,false))
  }
  newGame(){
    this.contador = 1;
    this.players.splice(0,this.players.length);
    this.players.push(new Jugador(0,"jugador 1",0,false));
    this.players.push(new Jugador(1,"jugador 2",0,false));
    this.playerSeleccionado = 0;
    this.historial = 'Bienvenido a Monopoly!. Que comience la partida';
  }

  actualizarHistorial(text: string){
    this.historial= this.contador + ") " + text +  this.historial;
    this.contador++;
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

  actualizarJugadorSeleccionado(jug: Jugador): void{
    this.playerSeleccionado=this.players.indexOf(jug);
    // this.playerSeleccionado=indice;
  }

  obtenerJugadorSeleccionado(): Jugador{
    return this.players[this.playerSeleccionado];
  }

  jugBancarrota(indiceJug: number){
    this.players[indiceJug].estaBancarrota=true;
  }

  obtenerJugadoresRestantes(): Array<Jugador>{
    var restantes:Array<Jugador> = this.players;
    restantes = restantes.filter(jug => jug.id!=this.players[this.playerSeleccionado].id && jug.estaBancarrota==false);
    return restantes;
  }
}
