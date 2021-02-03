import { JugadoresService } from 'src/app/services/jugadores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {


  constructor(private juadoresService: JugadoresService) { }

  ngOnInit(): void {
  }

  obtenerHistorial(): string{
    return this.juadoresService.historial;
  }

  pataPuto(){
    this.juadoresService.actualizarHistorial("-Pata Puto \n\n")
  }

}
