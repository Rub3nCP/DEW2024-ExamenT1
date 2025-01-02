// Ejercicio 1: Saludo personalizado
// Enunciado: Escribe una función que reciba un nombre como parámetro y devuelva un saludo personalizado.
function saludo(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludo('Carlos'));  // "Hola, Carlos!"

// Ejercicio 2: Suma de dos números
// Enunciado: Escribe una función que reciba dos números como parámetros y devuelva su suma.
function suma(a, b) {
  return a + b;
}
console.log(suma(5, 3));  // 8


// Nivel 2: Estructuras de Control (Condicionales)

// Ejercicio 3: Mayor de dos números
// Enunciado: Escribe una función que reciba dos números y devuelva el mayor de los dos.
function mayorDeDos(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(mayorDeDos(7, 5));  // 7

// Ejercicio 4: Determinar si un número es par o impar
// Enunciado: Escribe una función que reciba un número y devuelva si es par o impar.
function esPar(num) {
  if (num % 2 === 0) {
    return 'Es par';
  } else {
    return 'Es impar';
  }
}
console.log(esPar(10));  // "Es par"


// Nivel 3: Estructuras de Control (Bucles) y Arrays

// Ejercicio 5: Suma de elementos de un array
// Enunciado: Escribe una función que reciba un array de números y devuelva la suma de todos sus elementos.
function sumaArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}
console.log(sumaArray([1, 2, 3, 4]));  // 10

// Ejercicio 6: Encontrar el número mayor en un array
// Enunciado: Escribe una función que reciba un array de números y devuelva el número mayor.
function mayorEnArray(arr) {
  let mayor = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) {
      mayor = arr[i];
    }
  }
  return mayor;
}
console.log(mayorEnArray([1, 5, 3, 7]));  // 7


// Nivel 4: Objetos Literales

// Ejercicio 7: Información de un libro
// Enunciado: Escribe una función que reciba un objeto con información de un libro (título, autor, año) y devuelva un mensaje con los detalles.
function mostrarLibro(libro) {
  return `El libro "${libro.titulo}" fue escrito por ${libro.autor} en ${libro.año}.`;
}
const libro = { titulo: '1984', autor: 'George Orwell', año: 1949 };
console.log(mostrarLibro(libro));  // "El libro "1984" fue escrito por George Orwell en 1949."

// Ejercicio 8: Inventario de productos
// Enunciado: Escribe una función que reciba un array de objetos de productos y devuelva un inventario con la cantidad total de productos.
function inventarioTotal(productos) {
  let total = 0;
  for (let i = 0; i < productos.length; i++) {
    total += productos[i].cantidad;
  }
  return total;
}
const productos1 = [
  { nombre: 'Manzanas', cantidad: 5 },
  { nombre: 'Plátanos', cantidad: 8 },
  { nombre: 'Uvas', cantidad: 3 }
];
console.log(inventarioTotal(productos));  // 16


// Nivel 5: Integración de Múltiples Conceptos

// Ejercicio 9: Filtrar productos por precio
// Enunciado: Escribe una función que reciba un array de productos (con precio) y un precio límite, y devuelva los productos cuyo precio sea menor que el precio límite.
function filtrarPorPrecio(productos, limite) {
  return productos.filter(producto => producto.precio < limite);
}
const productos2 = [
  { nombre: 'Manzanas', precio: 2 },
  { nombre: 'Plátanos', precio: 1 },
  { nombre: 'Uvas', precio: 3 }
];
console.log(filtrarPorPrecio(productos, 2.5));  // [{ nombre: 'Manzanas', precio: 2 }, { nombre: 'Plátanos', precio: 1 }]

// Ejercicio 10: Calcular el total del inventario
// Enunciado: Escribe una función que calcule el total del inventario considerando el precio y la cantidad de cada producto.
function calcularTotalInventario(productos) {
  let total = 0;
  productos.forEach(producto => {
    total += producto.precio * producto.cantidad;
  });
  return total;
}
const productos3 = [
  { nombre: 'Manzanas', precio: 2, cantidad: 5 },
  { nombre: 'Plátanos', precio: 1, cantidad: 8 },
  { nombre: 'Uvas', precio: 3, cantidad: 3 }
];
console.log(calcularTotalInventario(productos));  // 31


// Nivel 4 (Continuación): Métodos de Array

// Ejercicio 11: Filtrar números pares
// Enunciado: Escribe una función que reciba un array de números y devuelva solo los números pares.
function filtrarPares(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filtrarPares([1, 2, 3, 4, 5]));  // [2, 4]

// Ejercicio 12: Duplicar los números de un array
// Enunciado: Escribe una función que reciba un array de números y devuelva un nuevo array con los números duplicados.
function duplicarNumeros(arr) {
  return arr.map(num => num * 2);
}
console.log(duplicarNumeros([1, 2, 3]));  // [2, 4, 6]

// Ejercicio 13: Imprimir cada elemento de un array
// Enunciado: Escribe una función que reciba un array y imprima cada uno de sus elementos.
function imprimirArray(arr) {
  arr.forEach(num => console.log(num));
}
imprimirArray([1, 2, 3]);  // Imprime 1, 2, 3

// Ejercicio 14: Verificar si todos los números son positivos
// Enunciado: Escribe una función que verifique si todos los números en un array son positivos.
function todosPositivos(arr) {
  return arr.every(num => num > 0);
}
console.log(todosPositivos([1, 2, 3]));  // true

// Ejercicio 15: Verificar si al menos un número es par
// Enunciado: Escribe una función que verifique si al menos un número en un array es par.
function alMenosUnPar(arr) {
  return arr.some(num => num % 2 === 0);
}
console.log(alMenosUnPar([1, 3, 5, 8]));  // true

// Ejercicio 16: Calcular la suma de los elementos de un array (usando reduce)
// Enunciado: Escribe una función que calcule la suma de los elementos de un array utilizando el método reduce.
function sumaConReduce(arr) {
  return arr.reduce((acumulador, num) => acumulador + num, 0);
}
console.log(sumaConReduce([1, 2, 3]));  // 6
