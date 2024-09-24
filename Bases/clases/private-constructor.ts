(() => {
  class Singleton {
    private static instance: Singleton;

    // El constructor es privado
    private constructor() {
      console.log("Constructor privado llamado.");
    }

    // Método estático para acceder a la única instancia
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }

    public mostrarMensaje() {
      console.log("Este es un Singleton.");
    }
  }

  // No se puede instanciar la clase directamente
  // const obj = new Singleton(); // Error: Constructor of class 'Singleton' is private

  // Debemos usar el método estático para obtener la única instancia
  const instancia1 = Singleton.getInstance();
  const instancia2 = Singleton.getInstance();

  instancia1.mostrarMensaje(); // Este es un Singleton.

  // Comprobamos que ambas referencias apuntan a la misma instancia
  console.log(instancia1 === instancia2); // true
})();
