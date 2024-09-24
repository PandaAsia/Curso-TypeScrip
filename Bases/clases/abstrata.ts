(() => {
  abstract class Animal {
    constructor(public name: string, public genero: string) {}
  }

  class mamimero extends Animal {
    tomarLeche() {
      return "Toma leche";
    }
  }

  class maritino extends Animal {
    saberNadar() {
      return "No necesita respirar";
    }
  }

  const Gato = new mamimero("Carlie", "femeninpo");
  const tivuron = new maritino("carlo", "maculino");

  const printName = (character: Animal) => {
    console.log(character.name);
  };

  //printName(Gato);
  //printName(tivuron);
})();
