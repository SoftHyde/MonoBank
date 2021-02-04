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
  // seg: number = 0;
  // min: number = 0;
  // hor: number = 0;
  // interval;
  constructor(private jugadoresService:JugadoresService) { }

  ngOnInit(): void {
    // this.contador();
  }

  obtenerIndiceJugadorSeleccionado(): number{
    return this.jugadoresService.playerSeleccionado;
  }

  obtenerJugadorSeleccionado(): Jugador{
    return this.jugadoresService.players[this.jugadoresService.playerSeleccionado];
  }

  // contador() {
  //   this.interval = setInterval(() => {
  //     this.seg++
  //     if (this.seg == 60){
  //       this.min++;
  //       this.seg = 0;
  //       if (this.min == 60){
  //         this.hor++;
  //         this.min = 0;
  //       }
  //     }
  //   },1000)
  // }

  obtenerJugadoresRestantes(jugadorSeleccionado: number): Array<Jugador>{
    var players:Array<Jugador> = this.jugadoresService.players;
    players = players.filter(jug => jug.id!=this.jugadoresService.players[jugadorSeleccionado].id);
    return players;
  }

  // verificarEstadoJugadores(): boolean{
  //   this.jugadoresService.players.forEach(element => {
  //     if (element.estaBancarrota==true) return true;
  //   });
  //   return false;
  // }

  cobrarBanco():void{
    this.obtenerJugadorSeleccionado().monto=this.obtenerJugadorSeleccionado().monto+this.monto;
    this.jugadoresService.actualizarHistorial("El jugador " + this.obtenerJugadorSeleccionado().nombre + " cobro $" + this.monto + " del Banco\n\n");
    this.monto=null;
  }
  pagarBanco():void{
    this.obtenerJugadorSeleccionado().monto=this.obtenerJugadorSeleccionado().monto-this.monto;
    this.jugadoresService.actualizarHistorial("El jugador " + this.obtenerJugadorSeleccionado().nombre + " pago $" + this.monto + " al Banco\n\n");
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
    this.obtenerJugadorSeleccionado().monto+=this.monto*(this.jugadoresService.players.length-1);
    this.jugadoresService.actualizarHistorial("El jugador " + this.obtenerJugadorSeleccionado().nombre + " cobro $" + this.monto + " a todos los jugadores\n\n");
    this.monto=null;

  }

  pagarTodos():void{
    this.obtenerJugadorSeleccionado().monto-=this.monto*(this.jugadoresService.players.length-1);
    for(var i=0; i<this.jugadoresService.players.length;i++ ){
      if(i != this.obtenerIndiceJugadorSeleccionado())
      this.jugadoresService.players[i].monto=this.jugadoresService.players[i].monto+this.monto;
    }
    this.jugadoresService.actualizarHistorial("El jugador " + this.obtenerJugadorSeleccionado().nombre + " pago $" + this.monto + " a todos los jugadores\n\n");
    this.monto=null;
  }

  pagarJugador(jugador: Jugador):void{
    this.jugadoresService.players.forEach(jug => {
      if (jug.id==jugador.id) {
        jug.monto += this.monto;}
    });
    // this.jugadoresService.players.find(jug => jug.id=jugador.id).monto += this.monto;
    this.obtenerJugadorSeleccionado().monto-=this.monto;
    this.jugadoresService.actualizarHistorial("El jugador " + this.obtenerJugadorSeleccionado().nombre + " pago $" + this.monto + " al jugador " + jugador.nombre + "\n\n")
    this.monto=null;
  }

}
