(() => {
  class personaje {
    //private name: string;
    //public genero: string;
    //public power?: string;
    static clAge: number = 5;

    constructor(
      private name: string,
      public genero: string,
      public power?: string
    ) {}

    // Método público
    public saludar() {
      return `Hola, mi nombre es ${this.name} y mi genero es ${this.genero}.`;
    }

    //metodo Private
    private PrSaludar() {
      return `Hola, mi nombre es ${this.name} y mi genero es ${this.genero}.`;
    }
  }

  const Shana = new personaje("shana", "femenino");
  //console.log(Shana.saludar);
  //console.log(Shana.saludar());
  //console.log(personaje.clAge);
})();
