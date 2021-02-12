import { JugadoresService } from 'src/app/services/jugadores.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {

  @Output() salidaRevert: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() entrada: number;
  seg: number = 0;
  min: number = 0;
  hor: number = 0;
  interval;
  constructor(private juadoresService: JugadoresService) { }

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

  obtenerHistorial(): string{
    return this.juadoresService.historial;
  }

  pataPuto():void{
    this.juadoresService.actualizarHistorial("Pata Puto \n\n")
  }

  deshacer():void{
    this.salidaRevert.emit(true);
  }

}
