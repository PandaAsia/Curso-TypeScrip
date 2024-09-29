function printToConsoole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleCondicional = (print: boolean = false): Function => {
  if (print) {
    return () => console.log("hola Mundo");
  } else {
    return () => {};
  }
};

function CheckValidPokemonId() {
  return function (
    target: any,
    ropertykey: string,
    descriptor: PropertyDescriptor
  ) {};
}

//@printToConsoole
@printToConsoleCondicional(false)
export class pokemon {
  public public: string = "https://pokeapi.co/api";
  constructor(public name: string) {}

  savepokemon(id: number) {
    console.log("Pokemon guardao el la bd" + id);
  }
}
