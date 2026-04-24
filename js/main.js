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

// 3. Objeto