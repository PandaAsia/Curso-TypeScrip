(() => {
  const batman: string = "batman";
  const linternaVerde: string = "Linterna Verde";
  const volcanNegro: string = `Heroe volcan Negro`;

  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || `No esta presente`);
})();
