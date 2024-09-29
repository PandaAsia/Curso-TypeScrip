// import Hero from "./classes/hero";
import { pokemon } from "./decoradores/pokemon-class";
import {
  genericFunction,
  genericFunction2,
  printObject,
} from "./Generics/generisc";
import { getPokemon } from "./Generics/getPokemon";
import { waifu } from "./interface/waifu";

// console.log("Hola Mundo!");

// const iroman = new Hero("toni", 14, 50);

// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6]);
// printObject("Hola Mundo");
// console.log(genericFunction(3.1414).toFixed(2));
// console.log(genericFunction("char").toUpperCase());

// const shana = {
//   name: "SHANA",
//   power: "fire",
//   boob: 10,
// };

// console.log(genericFunction<waifu>(shana).boob);

// getPokemon(1)
//   .then((resp) => console.log(resp))
//   .catch((error) => console.group(error));
//---------------------------------------------------------------------------------

const charmander = new pokemon("CHARMANDER");

console.log(charmander.savepokemon(50));
