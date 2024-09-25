"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class mutant {
        multanPower(id) {
            return `${this.name}  ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: "fernando",
        age: 25,
        getFullAdress(id) {
            return this.name;
        },
    };
})();
(() => {
    let addNumbersFunciton;
    addNumbersFunciton = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map