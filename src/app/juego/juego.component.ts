import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from '../model/Estado';
import { Jugador } from '../model/jugador';
import { JugadoresService } from '../services/jugadores.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0, opacity: 0 }),
            animate('0.5s ease-out',
                    style({ height: 350, opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: 350, opacity: 1 }),
            animate('0.5s ease-in',
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class JuegoComponent implements OnInit {

  estadoPartida: Array<Estado> = new Array<Estado>();
  deshacerListo: boolean = true;
  wakeLock = null;

  constructor(public jugadoresService: JugadoresService , private ruta: Router) {
  }

  ngOnInit(): void {
    if (this.jugadoresService.jugadoresListos==false){
      this.ruta.navigate(['']);
    }
    else {
      this.cambioEstado(true)
    }
  }

  cambioEstado(cambiar: boolean){
    if (cambiar){
      var auxJug = new Array<Jugador>();
      this.jugadoresService.players.forEach(player => {
        var jugAux = new Jugador(player.id,player.nombre,player.monto,player.estaBancarrota);
        auxJug.push(jugAux);
      });
      var estadoActual: Estado = new Estado(auxJug, this.jugadoresService.partidaTerminada, this.jugadoresService.contador,this.jugadoresService.historial);
      this.estadoPartida.push(estadoActual);
    }
  }

  revertirCambio(revertir: boolean){
    if (revertir){
      this.deshacerListo=false;
      this.estadoPartida.pop()
      var nuevoEstadoActual: Estado = this.estadoPartida[this.estadoPartida.length-1];
      this.jugadoresService.reemplazarPlayers(nuevoEstadoActual.vecJug);
      this.jugadoresService.partidaTerminada=nuevoEstadoActual.partTerm;
      this.jugadoresService.contador=nuevoEstadoActual.contHist;
      this.jugadoresService.historial=nuevoEstadoActual.historial;
      this.deshacerListo=true;
    }
  }

  finalizarPartida(): boolean{
    return this.jugadoresService.partidaTerminada;
  }

  volverInicio(){
    this.ruta.navigate(['']);
  }
}
