(() => {
  const fullName = (firtName: string, lastName: string): string => {
    return `${firtName} ${lastName}`;
  };

  const name = fullName(`shana`, `yamato`);
  console.log(fullName);
})();
