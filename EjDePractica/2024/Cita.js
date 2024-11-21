class Cita {
    constructor(sala, fechaHora) {
      this.sala = sala;
      this.fechaHora = new Date(fechaHora); // Convertir a objeto Date
    }
  }