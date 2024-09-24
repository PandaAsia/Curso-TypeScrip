(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: String[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  const fuerzaFlash = 5;
  const fuerzaSuperman = 100;
  const fuerzaBatman = 1;
  const fuerzaAcuaman = 0;

  enum FuerzaHero {
    debil = 0,
    normal,
    fuerte = 5,
    superFuerte = 100,
  }

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as String).length;
  console.log(largoDelPoder);
})();
