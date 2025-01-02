// EJERCICIO 1:
function fahrenheitToCelsius(temperatures) {
  // Usamos el método `map` para recorrer cada temperatura y convertirla de Fahrenheit a Celsius
  return temperatures.map(temp => (temp - 32) * 5 / 9);
}

console.log(fahrenheitToCelsius([68, 50, 46.4, 39, 90]));  // [20, 10, 8, 3.888888888888889, 32.22222222222222]
console.log(fahrenheitToCelsius([20, 0, -10]));            // [-6.666666666666667, -17.77777777777778, -23.333333333333332]
console.log(fahrenheitToCelsius([]));                      // []

// EJERCICIO 2:
function isBelowZero(...temps) {
  // Usamos `some` para verificar si alguna de las temperaturas es menor que 0
  return temps.some(temp => temp < 0);
}

console.log(isBelowZero(22, 5, 13, 0, 35));                // false
console.log(isBelowZero(15, 3, -4, 8, -2, 10, 14, 16));    // true
console.log(isBelowZero());                               // false

// EJERCICIO 3:
function filterWordsByLength(text, ...lengths) {
  // Usamos `split(' ')` para dividir el texto en un array de palabras
  const words = text.split(' ');
  // Filtramos las palabras cuya longitud esté incluida en el array `lengths`
  return words.filter(word => lengths.includes(word.length)).join(' ');  // Unimos las palabras filtradas en un string
}

console.log(filterWordsByLength('Primero resuelve el problema y después escribe el código', 8));  // "resuelve problema"
console.log(filterWordsByLength('Siempre escribe tu código como si la persona que lo fuera a mantener fuera un peligroso psicópata que sabe quien eres y donde vives', 9));  // "peligroso psicópata"
console.log(filterWordsByLength('Para entender la recursividad hay que entender lo que es la recursividad', 4, 3, 8));  // "Para entender hay que entender que"
console.log(filterWordsByLength('Es más difícil leer código que escribirlo'));  // ""

// EJERCICIO 4:
function formatDate(dateString) {
    // Usamos `split('-')` para separar la fecha en partes: día, mes, año
    const dateParts = dateString.split('-');
    // Si no hay exactamente tres partes (día, mes, año), devolvemos "Fecha no válida"
    if (dateParts.length !== 3) return 'Fecha no válida';

    // Convertimos las partes de la fecha a números enteros
    const [day, month, year] = dateParts.map(part => parseInt(part, 10));
    // Verificamos si alguna de las partes no es un número válido
    if (isNaN(day) || isNaN(month) || isNaN(year)) return 'Fecha no válida';

    // Definimos los nombres de los meses y los días de la semana
    const months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const daysOfWeek = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

    // Creamos un objeto `Date` con la fecha proporcionada
    const date = new Date(year, month - 1, day);
    // Comprobamos si la fecha generada es válida comparando los valores
    if (date.getDate() !== day || date.getMonth() !== month - 1 || date.getFullYear() !== year) return 'Fecha no válida';

    // Obtenemos el día de la semana a partir de la fecha
    const dayOfWeek = daysOfWeek[date.getDay()];
    // Devolvemos la fecha en el formato solicitado
    return `${dayOfWeek}, ${day} de ${months[month - 1]} de ${year}`;
}

console.log(formatDate("20-12-2012"));  // "jueves, 20 de diciembre de 2012"
console.log(formatDate("2-1-2024"));    // "martes, 2 de enero de 2024"
console.log(formatDate("2-2024"));      // "Fecha no válida"
console.log(formatDate("40-5-24"));     // "Fecha no válida"

// EJERCICIO 5:
function countDigits(...numbers) {
  // Creamos un array `count` con 10 elementos inicializados a 0 (uno por cada dígito del 0 al 9)
  const count = Array(10).fill(0);  
  // Usamos `forEach` para recorrer cada número y contar las apariciones de cada dígito
  numbers.forEach(num => {
      // Si el número está entre 0 y 9, incrementamos el contador correspondiente
      if (num >= 0 && num <= 9) count[num]++;
  });
  // Devolvemos el array de los conteos
  return count;
}

console.log(countDigits(4, 5, 2, 3, 2, 2, 0, 6, 5, 2));  // [1, 0, 4, 1, 1, 2, 1, 0, 0, 0]
console.log(countDigits(1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8));  // [0, 1, 2, 3, 4, 4, 3, 2, 1, 0]
console.log(countDigits());  // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(countDigits(9, 8, 7, 6, 5, 4, 3, 2, 1, 0));  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
