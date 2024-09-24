(() => {
  const fullName = (firtName: string, lastName?: string): string => {
    return `${firtName} ${lastName || `----`}`;
  };

  const name = fullName(`shana`);
  console.log(fullName);
})();
