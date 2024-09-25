(() => {
  interface xmen {
    name: string;
    realName: string;
    multanPower(id: number): string;
  }

  interface human {
    age: number;
  }

  class mutant implements xmen, human {
    public age: number;
    public name: string;
    public realName: string;

    multanPower(id: number): string {
      return `${this.name}  ${this.realName}`;
    }
  }
})();
