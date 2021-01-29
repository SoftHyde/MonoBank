import { Jugador } from './../../model/jugador';
import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
  }

  obtenerJugadores(): Array<Jugador>{
    return this.jugadoresService.players;
  }

  actualizarPagina(): number{
    return this.jugadoresService.playerSeleccionado;
  }
}
