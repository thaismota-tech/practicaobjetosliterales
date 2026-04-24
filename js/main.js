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