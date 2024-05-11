// string

let HolaMundo = "   Hola Mundo Como estas  ";
console.log(
  HolaMundo.toUpperCase(),
  HolaMundo.toLocaleLowerCase(),
  HolaMundo.includes("Hola"),
  HolaMundo.length,
  HolaMundo.trim(),
  HolaMundo.split(" ")
);

// number
let numero1 = 7.75;

console.log(numero1.toFixed(2));
let resulNumero = parseInt(numero1);
console.log(resulNumero);
console.log(numero1.toString());
console.log(parseFloat(numero1.toFixed(2)));

// funciones declarada
function saludar(nombre) {
  return `Hola ${nombre}`;
}

// funciones Expresadas
const saludarPersona = saludar("Janier");
console.log(saludarPersona);

const saludarAmigo = function (nombre, apellido, edad) {
  return `Hola ${nombre} ${apellido} Tiene ${edad} Años`;
};
console.log(saludarAmigo("Camila", "Jimenez", 30));

// Array

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agostos",
  "Septiembre",
  "octubre",
  "Noviembre",
  "Dicciembre",
];

console.log(meses);
console.log(meses[0]);

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}

meses.forEach((mes) => {
  console.log(mes);
});

meses.map((mes, index) => {
  console.log(mes);
});

// Objetos

const janier = {
  nombre: "Janier",
  apellido: "Jimenez",
  edad: 28,
  pasatiempo: ["correr", "Programar", "Leer"],
  soltero: true,
  contacto: {
    email: "janieranez@gmail.com",
    twitter: "@janierjimenez",
    movil: "122323224",
  },
  saludar: function () {
    return `Hola ${this.nombre} ${this.apellido}`;
  },
};

const resulSaludar = janier.saludar();
console.log(resulSaludar);

const empleados = [
  {
    nombre: "Janier",
    apellido: "Jimenez",
    edad: 28,
    pasatiempo: ["correr", "Programar", "Leer"],
    soltero: true,
    contacto: {
      email: "janieranez@gmail.com",
      twitter: "@janierjimenez",
      movil: "122323224",
    },
    saludar: function () {
      return `Hola ${this.nombre} ${this.apellido}`;
    },
  },
  {
    nombre: "Janier",
    apellido: "Jimenez",
    edad: 28,
    pasatiempo: ["correr", "Programar", "Leer"],
    soltero: true,
    contacto: {
      email: "janieranez@gmail.com",
      twitter: "@janierjimenez",
      movil: "122323224",
    },
    saludar: function () {
      return `Hola ${this.nombre} ${this.apellido}`;
    },
  },
];

console.log(empleados);

// operadores

let n1 = 20,
  n2 = 30,
  resul = 0;

resul = n1 + n2;
console.log("El resultado de la Suma es: " + resul);
