(() => {
  type personaje = {
    nombre: string;
    genero: string;
  };

  const Naruto: personaje = {
    nombre: "naruto",
    genero: "masculino",
  };

  const Sakura: personaje = {
    nombre: "sakura",
    genero: "Femenino",
  };

  const shana: personaje = {
    nombre: "shana",
    genero: "femenino",
  };

  const animes: personaje[] = [Naruto, Sakura, shana];

  for (const element of animes) {
    console.log(element);
  }
})();
