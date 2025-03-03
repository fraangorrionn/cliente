class Cita {
  constructor(sala, fechaHora) {
      this.sala = sala;
      this.fechaHora = new Date(fechaHora);
      
      // Validar si la fecha es válida
      if (isNaN(this.fechaHora.getTime())) {
          throw new Error("Fecha inválida.");
      }
  }
}
