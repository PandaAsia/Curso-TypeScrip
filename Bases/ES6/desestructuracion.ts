(() => {
  type avengres = {
    nick: String;
    ironma: String;
    vision: String;
    activo: boolean;
    poder: number;
  };

  const avengres = {
    nick: "petter parker",
    ironma: "rober donwey",
    vision: "paul",
    activo: true,
    poder: 150,
  };

  const printAvenger = ({ ironma }: avengres) => {
    console.log(ironma);
  };

  //printAvenger(avengres);

  const naruto: string[] = ["naruto", "shana", "goku", "luis"];
  const [, shana] = naruto;
  console.log(shana);
})();
