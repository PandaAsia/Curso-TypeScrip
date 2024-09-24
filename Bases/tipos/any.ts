(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = `Dr. Strange`;
  //console.log(avenger.charAt(0));
  console.log((avenger as String).charAt(0));
  avenger = 150.23256415;
  //console.log(avenger.toFixed(2));
  console.log(<number>avenger.toFixed(2));
})();
