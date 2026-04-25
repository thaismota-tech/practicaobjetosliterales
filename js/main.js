// 1. Crear un objeto Persona
const objPersona = {
  nombre: "Joanie",
  edad: 25,
  ciudad: "Paris",
}
console.log(objPersona.nombre);
console.log(objPersona.edad);
console.log(objPersona.ciudad);


// 2. Modificar propiedades
objPersona.ciudad = "Bordeaux";
objPersona.profesión = "modelo";

console.log(objPersona);


// 3. Objeto
const objLibro = {
  titulo: "Emma",
  autor: "Jane Austen",
  anioPublicacion: 1815,
  resumen() {
  return `El libro ${this.titulo} fue escrito por ${this.autor} en ${this.anioPublicacion}`
  }
}
console.log(objLibro.resumen());


// 4. Array de objetos
const estudiantes = [
  { nombre: "Hanna", edad: 18, notaFinal: 8},
  { nombre: "Lucca", edad: 22, notaFinal: 9},
  { nombre: "William", edad: 24, notaFinal: 10},
];
//Imprimir nombre y nota final
estudiantes.forEach(function(estudiante) {
console.log(`Nombre: ${estudiante.nombre}, Nota final: ${estudiante.notaFinal}`);
});


// 5. Método para calcular la edad
const persona = {
  nombre: "Selena",
  anioNacimiento: 1995,
calcularEdad: function () {
const anioActual = 2026
return anioActual - this.anioNacimiento;
}
}
console.log(persona.calcularEdad())


// 6. Objeto Coche
const objCoche = {
  marca: "Toyota",
  modelo: "Sienna",
  anio: 2020,
velocidadActual: 80,

acelerar: function () {
this.velocidadActual += 10
console.log(`Velocidad después de acelerar: ${this.velocidadActual} km/h`);
},
frenar: function () {
if (this.velocidadActual >=10) {
this.velocidadActual -=10;
} else {
this.velocidadActual = 0;
}
console.log(`Velocidad después de frenar: ${this.velocidadActual} km/h`);
}
};

// PROBAR MÉTODOS
objCoche.acelerar();
objCoche.frenar();


// 7.  Recorrer un objeto
const producto = {
  nombre: "brocha",
  precio: "3 euros",
  cantidad: 10,}
  for (let key in producto) {
  console.log(`${key}: ${producto[key]}`);
};


// 8. Contar propiedades
const animal = {
  nombre: "cebra",
  colores: "blanco y negro",
  habitat: "África",
  entorno: "sabana",
  alimento: "hierba y pasto",
}
function contarPropiedades(animal) {
return Object.keys(animal).length;
}
console.log(contarPropiedades(animal));


// 9. Objeto dentro de otro objeto
const empresa = {
  nombre: "Loretha",
  direccion: {calle: "Nueva York", ciudad: "Boston", codigoPostal: 7777,}
  }
for (let key in empresa.direccion) {
  console.log(`${key}: ${empresa.direccion[key]}`);
}


// 10. Añadir métodos a objetos
const cuentaBancaria = {
  titular: "Elisa",
  saldo: 5000,

depositar: function(cantidad) {
  this.saldo += cantidad;
  console.log(`Has depositado ${cantidad}€. Nuevo saldo: ${this.saldo}€`);
  },

retirar: function(cantidad) {
  if (cantidad <= this.saldo) {
    this.saldo -= cantidad;
    console.log(`Has retirado ${cantidad}€. Saldo actual: ${this.saldo}€`);
  } else {
  console.log("Fondos insuficientes");
  }
}
}
//DEPOSITAR Y RETIRAR DINERO DE LA CUENTA:
cuentaBancaria.depositar(500);
cuentaBancaria.retirar(2000); 
cuentaBancaria.retirar(10000);
cuentaBancaria.depositar(10000);