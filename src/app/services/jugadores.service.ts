import { Injectable } from '@angular/core';
import { Jugador } from '../model/jugador';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  constructor() { }

  obtenerCompradores(compradores: Array<Jugador>){
    return compradores;
  }
}
