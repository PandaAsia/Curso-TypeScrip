(() => {
  const fullName = (
    firtName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firtName} ${lastName || `----`}`.toUpperCase();
    } else {
      return `${firtName} ${lastName || `----`}`;
    }
  };

  const name = fullName(`shana`);
  console.log(fullName);
})();
