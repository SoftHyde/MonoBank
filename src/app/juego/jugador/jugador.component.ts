import { Jugador } from './../../model/jugador';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JugadoresService } from 'src/app/services/jugadores.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  //@Output() salida: EventEmitter<boolean> = new EventEmitter<boolean>() //declarando esto, le envio un evento al padre
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit(): void {
  }

  obtenerJugadores(): Array<Jugador>{
    return this.jugadoresService.obtenerJugadores();
  }

  actualizarPagina(): number{
    return this.jugadoresService.playerSeleccionado;
  }

  declararBancarrota(){
    this.jugadoresService.actualizarHistorial("El jugador " + this.jugadoresService.obtenerJugadorSeleccionado().nombre + " se ha declarado en bancarrota\n\n");
    this.jugadoresService.jugBancarrota(this.jugadoresService.playerSeleccionado);
    this.jugadoresService.actualizarJugadorSeleccionado(this.jugadoresService.obtenerJugadores()[0])
    //this.salida.emit(true) //cuando se ejecute el declarar bancarrota, se le enviara al padre un true
  }
}
