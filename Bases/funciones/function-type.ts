(() => {
  const addNumber = (a: number, b: number) => a + b;
  const greet = (name: string) => `hola  ${name}`;
  const saveTheWorkd = () => `El mundo esta salvado`;

  let myFunction: Function;

  myFunction = addNumber;
  console.log(myFunction(1, 2)); //3

  myFunction = greet;
  console.log(myFunction("Shana")); //Hola Shana

  myFunction = saveTheWorkd;
  console.log(myFunction()); //El mundo esta salvado
})();
