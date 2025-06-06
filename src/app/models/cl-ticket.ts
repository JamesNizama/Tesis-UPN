export class ClTicket {

}


export interface Ticket {
  idTicket?: string;
  idUsuario: string;
  carrera: string;
  categoria: string;
  descripcion: string;
  comentarioEstudiante?: string;
  prioridadManual?: string;
  prioridadAutomatica?: string;
  canal: string;
  estado: string;
  fechaCreacion: Date;
  fechaAsignacion?: Date;
  fechaResolucion?: Date;
  tiempoResolucionMin?: number;
  ticketReabierto?: boolean;
  clasificadoPor?: string;
  comentarioResolucion?: string;
  evaluacion?: {
    satisfaccion: number;
    comentarioOpcional?: string;
  };
}


