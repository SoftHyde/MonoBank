import { Jugador } from "./jugador";

/*Esto va a ser un estado del juego, cada vez que se cambie algo, se creara un nuevo estado, de manera que al cobrar del banco, por ej,
se guarda dicho estado
*/
export class Estado{
  constructor (public vecJug: Array<Jugador>, public partTerm: boolean, public contHist: number, public historial: string){ }
}
