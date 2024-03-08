//Ejercicio 1
class Personas {
    constructor(nombre){
        this.nombre = nombre;
    }
    idioma(){
        return console.log(`${this.nombre} habla un lenguaje`);
    }
}

class Persona1 extends Personas {
    idioma(){
        return console.log(`${this.nombre} habla en ingles`);
    }
}

class Persona2 extends Personas {
    idioma(){
        return console.log(`${this.nombre} habla Aleman`);
    }
}

let Juan = new Persona1 (`Juan`);
let Pedro = new Persona2 (`Pedro`);
Juan.idioma();
Pedro.idioma();

//Ejecicio 2
class Vehiculo {
    constructor(tipo, motor, gasolina){
        this.tipo = tipo;
        this.motor = motor;
        this.gasolina = gasolina;
    }
    consumo(){
        return console.log(`El vehiculo ${this.tipo} con el motor ${this.motor} consume 33km/G.`)
    }
}

class moto extends Vehiculo{
    consumo(){
        return console.log(`El vehiculo ${this.tipo} con el motor ${this.motor} consume 33km/G.`);
    }
}

class carro extends Vehiculo{
    consumo(){
        return console.log(`El vehiculo ${this.tipo} con el motor ${this.motor} consume 33km/G.`);
    }
}

class bus extends Vehiculo{
    consumo(){
        return console.log(`El vehiculo ${this.tipo} con el motor ${this.motor} consume 33km/G.`);
    }
}

let mototipo = new moto ('Motocicleta','200cc','Gasolina');
let sendan = new carro ('sedan','1.Bcc','Gasolina');
mototipo.consumo();
sendan.consumo();