import { JugadoresService } from 'src/app/services/jugadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestor-jugador',
  templateUrl: './gestor-jugador.component.html',
  styleUrls: ['./gestor-jugador.component.css']
})
export class GestorJugadorComponent implements OnInit {

  seg: number = 0;
  min: number = 0;
  hor: number = 0;
  interval;
  constructor(private jugadoresService:JugadoresService) { }

  ngOnInit(): void {
    this.contador();
  }

  contador() {
    this.interval = setInterval(() => {
      this.seg++
      if (this.seg == 60){
        this.min++;
        this.seg = 0;
        if (this.min == 60){
          this.hor++;
          this.min = 0;
        }
      }
    },1000)
  }

}
