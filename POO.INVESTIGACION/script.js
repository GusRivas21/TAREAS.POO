// Clase principal Ferreteria
class Ferreteria {
    constructor(nombre, departamento, precio) {
    this.nombre = nombre;
    this.departamento = departamento;
    this.precio = precio;
    }

    aplicarDescuento(descuento) {
      this.precio -= (this.precio * descuento / 100);
    }
}

  // Clase para herramientas
class Herramienta extends Ferreteria {
    constructor(nombre, departamento, precio, tipo) {
    super(nombre, departamento, precio);
    this.tipo = tipo;
    }
}

  // Clase para materiales de construcción
class MaterialConstruccion extends Ferreteria {
    constructor(nombre, departamento, precio, material) {
    super(nombre, departamento, precio);
    this.material = material;
    }
}

  // Clase para productos eléctricos
class Electricidad extends Ferreteria {
    constructor(nombre, departamento, precio, voltaje) {
    super(nombre, departamento, precio);
    this.voltaje = voltaje;
    }
}

  // Crear una instancia de la Ferreteria
const miFerreteria = new Ferreteria("Mi Ferretería", "Herramientas", 100);

  // Crear productos y agregarlos al inventario
const martillo = new Herramienta("Martillo", "Herramientas", 15.99, "Manual");
const cemento = new MaterialConstruccion("Cemento", "Materiales de Construcción", 25.50, "Concreto");
const bombilla = new Electricidad("Bombilla LED", "Electricidad", 5.99, "220V");

  // Aplicar descuento del 10%
miFerreteria.aplicarDescuento(10);

  // Mostrar el inventario con los precios actualizados
console.log(`Nombre: ${martillo.nombre}, Precio: $${martillo.precio}, Departamento: ${martillo.departamento}, Tipo: ${martillo.tipo}`);
console.log(`Nombre: ${cemento.nombre}, Precio: $${cemento.precio}, Departamento: ${cemento.departamento}, Material: ${cemento.material}`);
console.log(`Nombre: ${bombilla.nombre}, Precio: $${bombilla.precio}, Departamento: ${bombilla.departamento}, Voltaje: ${bombilla.voltaje}`);