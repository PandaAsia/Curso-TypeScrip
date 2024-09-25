(() => {
  interface addTwoNumber {
    (a: number, b: number): number;
  }

  let addNumbersFunciton: addTwoNumber;

  addNumbersFunciton = (a: number, b: number) => {
    return a + b;
  };
})();
