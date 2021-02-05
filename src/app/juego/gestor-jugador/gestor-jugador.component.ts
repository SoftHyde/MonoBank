import { JugadoresService } from 'src/app/services/jugadores.service';
import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/model/jugador';

@Component({
  selector: 'app-gestor-jugador',
  templateUrl: './gestor-jugador.component.html',
  styleUrls: ['./gestor-jugador.component.css']
})
export class GestorJugadorComponent implements OnInit {
  monto:number;
  constructor(private jugadoresService:JugadoresService) { }

  ngOnInit(): void {
  }

  obtenerIndiceJugadorSeleccionado(): number{
    return this.jugadoresService.playerSeleccionado;
  }

  obtenerJugadorSeleccionado(): Jugador{
    return this.jugadoresService.obtenerJugadorSeleccionado();
  }

  obtenerJugadoresRestantes(jugadorSeleccionado: number): Array<Jugador>{
    return this.jugadoresService.obtenerJugadoresRestantes();
  }

  cobrarBanco():void{
    this.jugadoresService.obtenerJugadorSeleccionado().monto=this.jugadoresService.obtenerJugadorSeleccionado().monto+this.monto;
    this.jugadoresService.actualizarHistorial("El jugador " + this.jugadoresService.obtenerJugadorSeleccionado().nombre + " cobro $" + this.monto + " del Banco\n\n");
    this.monto=null;
  }
  pagarBanco():void{
    this.jugadoresService.obtenerJugadorSeleccionado().monto=this.jugadoresService.obtenerJugadorSeleccionado().monto-this.monto;
    this.jugadoresService.actualizarHistorial("El jugador " + this.jugadoresService.obtenerJugadorSeleccionado().nombre + " pago $" + this.monto + " al Banco\n\n");
    this.monto=null;
  }

  verificarMonto(): boolean{
    if (this.monto<=0 || this.monto==null){
      return true //ta mal
    }
    else return false; //ta bien
  }

  cobrarTodos():void{
    for(var i=0; i<this.jugadoresService.players.length;i++ ){
        if(i != this.obtenerIndiceJugadorSeleccionado())
        this.jugadoresService.players[i].monto=this.jugadoresService.players[i].monto-this.monto;
    }
    this.jugadoresService.obtenerJugadorSeleccionado().monto+=this.monto*(this.jugadoresService.players.length-1);
    this.jugadoresService.actualizarHistorial("El jugador " + this.jugadoresService.obtenerJugadorSeleccionado().nombre + " cobro $" + this.monto + " a todos los jugadores\n\n");
    this.monto=null;
  }

  pagarTodos():void{
    this.jugadoresService.obtenerJugadorSeleccionado().monto-=this.monto*(this.jugadoresService.players.length-1);
    for(var i=0; i<this.jugadoresService.players.length;i++ ){
      if(i != this.obtenerIndiceJugadorSeleccionado())
      this.jugadoresService.players[i].monto=this.jugadoresService.players[i].monto+this.monto;
    }
    this.jugadoresService.actualizarHistorial("El jugador " + this.jugadoresService.obtenerJugadorSeleccionado().nombre + " pago $" + this.monto + " a todos los jugadores\n\n");
    this.monto=null;
  }

  pagarJugador(jugador: Jugador):void{
    this.jugadoresService.players.forEach(jug => {
      if (jug.id==jugador.id) {
        jug.monto += this.monto;}
    });
    this.jugadoresService.obtenerJugadorSeleccionado().monto-=this.monto;
    this.jugadoresService.actualizarHistorial("El jugador " + this.jugadoresService.obtenerJugadorSeleccionado().nombre + " pago $" + this.monto + " al jugador " + jugador.nombre + "\n\n")
    this.monto=null;
  }

}
