import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {

  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
  }

  obtenerJugadores(): Array<Jugador>{
    //return this.jugadoresService.players.filter(jug => jug.estaBancarrota==false);
    return this.jugadoresService.obtenerJugadores();
  }

  jugadorSeleccionado(indice :Jugador): boolean {
    this.jugadoresService.actualizarJugadorSeleccionado(indice);
    return true;
  }

  esSeleccionado(indice: number): boolean{
    if (indice==this.jugadoresService.playerSeleccionado) return true;
    else return false;
  }
}
