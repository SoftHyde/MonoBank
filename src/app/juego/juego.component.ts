import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../model/jugador';
import { JugadoresService } from '../services/jugadores.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  constructor(private jugadoresService: JugadoresService , private ruta: Router) { }

  ngOnInit(): void {
    if (this.jugadoresService.jugadoresListos==false){
      this.ruta.navigate(['']);
    }
  }

  obtenerJugadores(): Array<Jugador>{
    return this.jugadoresService.players;
  }
}
