import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  public historial: string = 'Bienvenido a Monopoly!. Que comience la partida';
  constructor() { }

  ngOnInit(): void {
  }

  pataPuto(){
    this.historial="-Pata puto\n\n" +  this.historial;
    console.log(this.historial)
  }

}
