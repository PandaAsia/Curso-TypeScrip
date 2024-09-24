"use strict";
(() => {
    class Animal {
        constructor(name, genero) {
            this.name = name;
            this.genero = genero;
        }
    }
    class mamimero extends Animal {
        tomarLeche() {
            return "Toma leche";
        }
    }
    class maritino extends Animal {
        saberNadar() {
            return "No necesita respirar";
        }
    }
    const Gato = new mamimero("Carlie", "femeninpo");
    const tivuron = new maritino("carlo", "maculino");
    const printName = (character) => {
        console.log(character.name);
    };
})();
(() => {
    class personaje {
        constructor(name, genero, power) {
            this.name = name;
            this.genero = genero;
            this.power = power;
        }
        saludar() {
            return `Hola, mi nombre es ${this.name} y mi genero es ${this.genero}.`;
        }
        PrSaludar() {
            return `Hola, mi nombre es ${this.name} y mi genero es ${this.genero}.`;
        }
    }
    personaje.clAge = 5;
    const Shana = new personaje("shana", "femenino");
})();
(() => {
    class anime {
        constructor(nombre, genero) {
            this.nombre = nombre;
            this.genero = genero;
            console.log(`Contrutor de anime llamado!`);
        }
        getDataAnime() {
            return `${this.nombre} ${this.genero}`;
        }
        get fullname() {
            return `${this.nombre}`;
        }
        set fullname(name) {
            this.nombre = name;
        }
    }
    class naruto extends anime {
        constructor(nombre, genero, iswoman) {
            super(nombre, genero);
            this.nombre = nombre;
            this.genero = genero;
            this.iswoman = iswoman;
        }
        getFullName() {
            console.log(super.getDataAnime());
        }
    }
    const shana = new naruto("shana", "romance", true);
    shana.fullname = "hana";
})();
(() => {
    class Singleton {
        constructor() {
            console.log("Constructor privado llamado.");
        }
        static getInstance() {
            if (!Singleton.instance) {
                Singleton.instance = new Singleton();
            }
            return Singleton.instance;
        }
        mostrarMensaje() {
            console.log("Este es un Singleton.");
        }
    }
    const instancia1 = Singleton.getInstance();
    const instancia2 = Singleton.getInstance();
    instancia1.mostrarMensaje();
    console.log(instancia1 === instancia2);
})();
//# sourceMappingURL=main.js.map