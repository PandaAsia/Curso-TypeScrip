(() => {
  class anime {
    constructor(public nombre: string, public genero: string) {
      console.log(`Contrutor de anime llamado!`);
    }

    protected getDataAnime() {
      return `${this.nombre} ${this.genero}`;
    }

    get fullname() {
      return `${this.nombre}`;
    }

    set fullname(name: string) {
      this.nombre = name;
    }
  }

  class naruto extends anime {
    constructor(
      public nombre: string,
      public genero: string,
      public iswoman: boolean
    ) {
      super(nombre, genero);
    }

    getFullName() {
      console.log(super.getDataAnime());
    }
  }
  const shana = new naruto("shana", "romance", true);
  //console.log(shana.fullname);
  shana.fullname = "hana";
  //console.log(shana);
})();
