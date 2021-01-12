import { Jugador } from './../model/jugador';
import { JugadoresService } from './../services/jugadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  monto=1500;

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
  }

  obtenerJugadores(): Array<Jugador>{
    return this.jugadoresService.players;
  }

  agregarJugador(): void{
    var player: Jugador = new Jugador(this.jugadoresService.players.length, "jugador "+(this.jugadoresService.players.length+1),0);
    this.jugadoresService.agregarJugador(player);
  }

  eliminarJugador(): void{
    this.jugadoresService.eliminarJugador(this.jugadoresService.players[this.jugadoresService.players.length-1]);
  }

  confirmarJugadores():void{
    this.obtenerJugadores().forEach(jugador => {
      jugador.monto=this.monto;
    });
  }

}
