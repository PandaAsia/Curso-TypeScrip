(() => {
  type hero = {
    name: string;
    age?: number;
    power: string[];
    getname: () => string;
  };

  let flash: hero = {
    name: "Barry Alien",
    age: 24,
    power: ["super Velocidad", "Viajar"],
    getname() {
      return this.name;
    },
  };

  flash = {
    name: `Clarj kent`,
    age: 60,
    power: [`super fuerza`],
    getname() {
      return this.name;
    },
  };

  let mycustomvariable: string | number | hero = "shana";
})();
