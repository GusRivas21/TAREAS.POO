console.log("EJERCICIO 1")
class Universidad {
    constructor(nombre, carrera, vivo){
        this.nombre = nombre;
        this.carrera = carrera;
        this.vivo = vivo;
    }
    Materias(){
        return console.log(`El Estudiante ${this.nombre} esta estudiando la carrera de ${this.carrera} y apenas esta ${this.vivo} el tercer ciclo`)
    }
}

class Matematicas extends Universidad{
    Materias(){
        return console.log(`La Estudiante ${this.nombre} esta estudiando la carrera de ${this.carrera} y apenas esta ${this.vivo} el tercer ciclo`);
    }
}

class Poo extends Universidad{
    Materias(){
        return console.log(`El Estudiante ${this.nombre} esta estudiando la carrera de ${this.carrera} y apenas esta ${this.vivo} el tercer ciclo`);
    }
}

class Redes extends Universidad{
    Materias(){
        return console.log(`El Estudiante ${this.nombre} esta estudiando la carrera de ${this.carrera} y apenas esta ${this.vivo} el tercer ciclo`);
    }
}
let computo1 = new Matematicas ('Stacy', 'Ing.Software','sobreviviendo');
let computo2 = new Poo ('Diego', 'Ing.Software','sobreviviendo');
let computo3 = new Redes ('Orlin','Ing.Software','sobreviviendo');
computo1.Materias();
computo2.Materias();
computo3.Materias();



console.log("EJERCICIO 2")
class Pelicula {
    constructor(nombre, calidad){
        this.nombre = nombre;
        this.calidad = calidad;
    }
    Movie(){
        return console.log(`La Pelicula ${this.nombre} tiene una calidad de ${this.calidad} que te sorprenden`);
    }
}

class Pelicula1 extends Pelicula {
    Movie(){
        return console.log(`La Pelicula ${this.nombre} tiene una calidad de ${this.calidad} que dan ganas de llorar de la emocion`);
    }
}

class Pelicula2 extends Pelicula {
    Movie(){
        return console.log(`La Pelicula ${this.nombre} tiene una calidad de ${this.calidad} que te dejan con ganas de mas!`);
    }
}
let PacificRim = new Pelicula ('Pacific Rim','Increible');
let Dune = new Pelicula1 (`Dune`,'Gratitud');
let StarWars = new Pelicula2 (`Star Wars`,'Maravilla');
PacificRim.Movie();
Dune.Movie();
StarWars.Movie();