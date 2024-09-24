(() => {
  const fullname = (firtName: string, ...resArgs: string[]) => {
    return `${firtName} ${resArgs.join(``)}`;
  };

  const superman = fullname("FLASH", "HARRY", "SUPERMAN");
  console.log({ superman });
})();
