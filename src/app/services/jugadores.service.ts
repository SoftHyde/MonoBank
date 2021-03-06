import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  //Grupo de jugadores
  players:Array<Jugador> = new Array<Jugador>();

  //Variables auxiliares
  contador: number = 1;
  jugadoresListos: boolean = false;
  playerSeleccionado:number = 0 //es el indice del jugador
  historial: string = 'Bienvenido a Monopoly!. Que comience la partida';
  partidaTerminada: boolean = false;

  constructor() {
    this.players.push(new Jugador(0,"Jugador 1",0,false));
    this.players.push(new Jugador(1,"Jugador 2",0,false));
  }
  newGame(){
    this.contador = 1;
    this.players.splice(0,this.players.length);
    this.players.push(new Jugador(0,"Jugador 1",0,false));
    this.players.push(new Jugador(1,"Jugador 2",0,false));
    this.playerSeleccionado = 0;
    this.historial = 'Bienvenido a Monopoly!. Que comience la partida';
    this.partidaTerminada = false;
  }

  reemplazarPlayers(jugadores: Array<Jugador>){
    this.players.splice(0,this.players.length);
    jugadores.forEach(player => {
      var jugAux = new Jugador(player.id,player.nombre,player.monto,player.estaBancarrota);
      this.players.push(jugAux);
    });
  }

  obtenerJugadores():Array<Jugador>{
    return this.players.filter(jug => jug.estaBancarrota==false);
  }

  actualizarHistorial(text: string){
    this.historial= this.contador + ") " + text +  this.historial;
    this.contador++;
  }

  agregarJugador(newJugador: Jugador){
    if (this.players.length<8){
      this.players.push(newJugador);
    }
  }

  eliminarJugador(eraseJugador: Jugador){
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
    this.playerSeleccionado=this.obtenerJugadores().indexOf(jug);
  }

  obtenerJugadorSeleccionado(): Jugador{
    return this.obtenerJugadores()[this.playerSeleccionado];
  }

  jugBancarrota(indiceJug: number){
    this.obtenerJugadores()[indiceJug].estaBancarrota=true;
    if (this.obtenerJugadores().length==1) {
      this.partidaTerminada=true;
    }
  }

  obtenerJugadoresRestantes(): Array<Jugador>{
    var restantes:Array<Jugador> = this.obtenerJugadores();
    restantes = restantes.filter(jug => jug.id!=this.obtenerJugadores()[this.playerSeleccionado].id && jug.estaBancarrota==false);
    return restantes;
  }
}
