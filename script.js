
class Ninja {
    constructor(nombre, salud = 100, velocidad = 3, fuerza = 3) {
      this.nombre = nombre;
      this.salud = salud;
      this.velocidad = velocidad;
      this.fuerza = fuerza;
    }
  
    sayName() {
      console.log(`El nombre del ninja es ${this.nombre}`);
    }
  
    showStats() {
      console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`);
    }
  
    drinkSake() {
      this.salud += 10;
      console.log(`${this.nombre} ha bebido sake y ha recuperado 10 puntos de salud.`);
    }
  }
  
  
  const ninja1 = new Ninja("Hyabusa");
  ninja1.sayName();
  ninja1.showStats();
  ninja1.drinkSake();
  ninja1.showStats();
  