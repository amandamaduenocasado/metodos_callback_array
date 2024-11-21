// ## Ejercicios

// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const number1 = [2, 4, 6, 8];

const multiplyIndex = (array) => {
  array.forEach((number, index) => {
    console.log(number * index);
  });
}

multiplyIndex(number1);

// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const number2 = [5, 8, 3, 4];

const divisionIndex = number2.map((number, index) => {
  return number / (index + 1); // cada número se divide por (index + 1) para evitar dividir entre 0 (ya que los índices comienzan en 0)
});

console.log(number2);

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const word1 = ['jorge', 'indira', 'saul'];

const upperCaseWord = word1.map((word) => {
  return word.toUpperCase();
});

// O LO QUE ES LO MISMO - const upperCase = word1.map(word => word.toUpperCase()); 

console.log(upperCaseWord);


// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas y minúsculas.

const words = ['Jorge', 'Indira', 'Saul'];
const letter = 'X';


const filterWordsByLetter = (words, letter) => {
  // Convertimos la letra a minúscula para comparación
  const lowercaseLetter = letter.toLowerCase();

  // Filtramos las palabras que comiencen con esa letra
  const filteredWords = words.filter(word => word[0].toLowerCase() === lowercaseLetter);

  // Comprobamos si hay palabras coincidentes
  if (filteredWords.length > 0) {
    return filteredWords;
  } else {
    console.log('Ninguna palabra coincide.');
    return [];
  }
};

const result = filterWordsByLetter(words, letter);
console.log(result);


// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumArray = (number) => {
    const sum = number.reduce((total, currentValue) => total + currentValue, 0);
    console.log('La suma de los valores del array es:', sum);
};

sumArray(number3);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
//   const array = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Bob', age: 20 }
//   ];

// - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

// ## Retos

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

//   - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

//     [
//     {
//     id: "user001",
//     name: "Juan",
//     surname: "Pérez",
//     age: 30
//     },
//     {
//     id: "user002",
//     name: "María",
//     surname: "González",
//     age: 25
//     },
//     {
//     id: "user003",
//     name: "Pedro",
//     surname: "Sánchez",
//     age: 35
//     },
//     {
//     id: "user004",
//     name: "Ana",
//     surname: "Martínez",
//     age: 28
//     },
//     {
//     id: "user005",
//     name: "Luis",
//     surname: "López",
//     age: 40
//     }
//     ];
