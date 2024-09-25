(() => {
  interface Client {
    name: string;
    age?: number;
    getFullAdress(id: string): string;
  }

  const client: Client = {
    name: "fernando",
    age: 25,
    getFullAdress(id: string) {
      return this.name;
    },
  };
})();
