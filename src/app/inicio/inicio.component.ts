import { Jugador } from './../model/jugador';
import { JugadoresService } from './../services/jugadores.service';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  monto: string = "1500"

  constructor(private jugadoresService: JugadoresService , private ruta: Router) { }

  ngOnInit(): void {
    this.jugadoresService.newGame();
  }

  obtenerJugadores(): Array<Jugador>{
    return this.jugadoresService.players;
  }

  agregarJugador(): void{
    var player: Jugador = new Jugador(this.jugadoresService.players.length, "Jugador "+(this.jugadoresService.players.length+1),0,false);
    this.jugadoresService.agregarJugador(player);
  }

  eliminarJugador(): void{
    this.jugadoresService.eliminarJugador(this.jugadoresService.players[this.jugadoresService.players.length-1]);
  }

  confirmarJugadores():void{
    if (parseInt(this.monto)>0){
      this.obtenerJugadores().forEach(jugador => {
        jugador.monto=parseInt(this.monto);
      });
      this.jugadoresService.jugadoresListos=true;
      this.ruta.navigate(['juego']);
    }
  }

  verificarMonto(): boolean{
    if (parseInt(this.monto)<=0 || this.monto==null){
      return true //ta mal
    }
    else return false; //ta bien
  }

}
