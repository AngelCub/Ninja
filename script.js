///INTENTANDO EL COMMIT 


class Ninja {
    constructor(nombre, salud) {
      this.nombre = nombre;
      this.salud = salud;
      this.velocidad = 3;
      this.fuerza = 3;
    }
  

    sayName() {
      console.log(`El nombre del ninja es ${this.nombre}`);
    }
  
    showStats() {
      console.log(
        `Nombre: ${this.nombre}, Salud: ${this.salud}, Velocidad: ${this.velocidad}, Fuerza: ${this.fuerza}`
      );
    }
  
    drinkSake() {
      this.salud += 10;
    }
  }
  

  class Sensei extends Ninja {
    constructor(
      nombre,
      salud = 200,
      velocidad = 10,
      fuerza = 10,
      sabiduria = 10
    ) {
      super(nombre, salud, velocidad, fuerza);
      this.sabiduria = sabiduria;
    }
  

    speakWisdom() {
      console.log(
        "La sabiduría del sensei dice: El camino hacia la victoria no es fácil pero es inevitable"
      );
      super.drinkSake();
    }
  }
  
  const superSensei = new Sensei("Master Splinter");
  superSensei.speakWisdom();
  superSensei.showStats();
   