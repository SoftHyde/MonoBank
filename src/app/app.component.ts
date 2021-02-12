import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monopoly';
  reglasModificadas: Array<string> =
  ["Al vender una propiedad, dicha propiedad se tendra que vender, como minimo, al 50% de su valor original",
  "Se permitira realizar prestamos a cierto numero de turnos, estableciendo un interes fijo o progresivo para cada turno, segun acuerden los jugadores que forman parte de dicho prestamo",
  "Al hipotecar una propiedad, el propietario recibe un 50% del valor de dicha propiedad. Al deshipotecar se debera pagar el 100% del valor de dicha propiedad",
  "Al no disponer de dinero suficiente para realizar un pago de cualquier tipo, unicamente podra recurrirse a hipotecas o venta de propiedades propias, no pudiendo negociar de ninguna manera con los demas jugadores",
  "Si un jugador no presta atencion durante su turno, debera pagar una multa",
  "El multiplicador de los servicios aumentara en 1 por cada casa y en 10 por cada hotel construido por el dueño de dicho servicio",
  "Cuando un jugador es enviado a la carcel y queda una cantidad menor o igual a 5 propiedades, dicho jugador no podra gozar de 3 turnos dentro de esta, estando obligado a sacar dobles con los dados o, en su defecto, pagar el monto indicado para salir en el turno siguiente",
  "Limite de tiempo: el juego finaliza cuando haya pasado un tiempo estipulado por los jugadores. Llegado este tiempo, ganara el jugador con mayor capital recaudado (incluyendo dinero, valor de propiedades, casas y hoteles)",
  "Al caer en un tren de otro jugador, y en caso que este jugador disponga de otros trenes, ademas de pagar el monto indicado por las tarjetas, el jugador podra optar pagar nuevamente el monto indicado en las tarjetas y en el proximo turno, desplazarce a cualquiera de los trenes del mismo jugador, perdiendo dicho turno"
  ];
}
