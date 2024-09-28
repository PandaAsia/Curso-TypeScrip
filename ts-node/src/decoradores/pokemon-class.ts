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

//@printToConsoole
@printToConsoleCondicional(false)
export class pokemon {
  public public: string = "https://pokeapi.co/api";
  constructor(public name: string) {}
}
