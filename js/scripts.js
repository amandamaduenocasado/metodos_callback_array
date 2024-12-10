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

const sumAllNumbers = numbers => {
  const total = numbers.reduce((acc, number) => {
    return acc + number;
  });

  console.log(total);
}

sumAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const geometryNumbers = numbers => {
  numbers.forEach(number => {
    const square = Math.pow(number, 2);
    const cube = Math.pow(number, 3);

    console.log(`Número ${number} - cuadrado: ${square} - cubo: ${cube}`);
  });
};

geometryNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

// word.split(''): convierte la palabra word en un array de letras, es decir, separa la palabra por letras separadas
// .reduce: recorre cada uno de los elementos del array y reduce todos sus elementos a un único valor.
// finalWord es el acumulador que irá guardando la nueva palabra con las modificaciones y letter es cada letra 
// vowels.includes(letter.toLowerCase()) verifica si la letra actual (letter) está dentro de la cadena de vocales, usamos toLowerCase() para asegurarme de que la letra comparada sea en minúsculas, sin importar si orgalmente es mayúscula o minúscula 

const vowelsToUpper = word => {
  const vowels = 'aeiouáéíóú';
  const newWord = word.split('').reduce((finalWord, letter) => {
    console.log(finalWord);
    if (vowels.includes(letter.toLowerCase())) {
      return finalWord + letter.toUpperCase();
    } else {
      return finalWord + letter;
    }
  }, '');

  console.log(newWord);
};

vowelsToUpper('río');

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const compareNumbers = numbers => {
  const numbersToCompare = numbers.some(number => number > 5);

  if (numbersToCompare) {
    console.log('Algún numero es mayor que 5');
  } else {
    console.log('Ningún número es mayor que 5')
  }
};

compareNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const filterWordsByLength = (words, length) => {
  const filteredWords = words.filter(word => {
    return word.length === length;
  });

  console.log(filteredWords);
};

filterWordsByLength(['merluza','mero','rodaballo','pijota','bacalao'], 6);

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

const filterNumbersByDivider = (numbers, divider) => {
  return numbers.filter(number => number % divider === 0);
};

console.log(filterNumbersByDivider([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30.

const users = [
 { name: 'John', age: 25 },
 { name: 'Jane', age: 30 },
 { name: 'Bob', age: 20 }
];

const filterUsersByAge = () => {
  const filteredUsers = users.filter(user => user.age < 30);
  return filteredUsers;
};

console.log(filterUsersByAge());

// - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

const allNumbersAreEven = numbers => {
  const areAllEven = numbers.every(number => number % 2 === 0);

  if (areAllEven) {
    console.log('Todos son pares');
  } else {
    console.log('Alguno es impar');
  }
};

allNumbersAreEven([5, 20, 3, 44, 53, 6, 68, 8, 2, 11]);

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const sortByLength = words => {
  console.log(words);
  words.sort((a, b) => a.length - b.length);
  console.log(words);
};

// Números -> a - b ó b - a
// Strings -> a.localeCompare(b) ó b.localeCompare(a)

sortByLength(['azucena', 'margarita', 'amapola', 'rosa', 'clavel']);

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

const reverseWord = word => {
  //   const reversedWord = word.split('').reduce((acc, letter) => {
  //     console.log('ACUMULADO', acc);
  //     console.log('LETRA ACTUAL ', letter);
  //     return letter + acc;
  //   });

  //   let reversedWord = '';

  //   for (const letter of word) {
  //     console.log(reversedWord);
  //     reversedWord = letter + reversedWord;
  //   }

  const reversedWord = word.split('').reverse().join('');

  console.log(reversedWord);
};

reverseWord('Mariposas');

// ## Retos

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

// String(number) convierte el valor de number a una cadena de texto (string)
    // Si no usas String(), puedes estar trabajando con el valor numérico directamente, pero para poder acceder a un carácter específico en una posición (como el primer o segundo dígito), necesitas tratar ese número como una cadena de texto. Por eso lo conviertes a una cadena usando String(number).

// Éste código podría darnos problema con los números que contengan 0 por ello, hacemos una verificación. 

const suma = (numbers) => {
  const result = numbers.map((number) => {
    const firstDigit = String(number).charAt(0);
    const secondDigit = String(number).length > 1 ? String(number).charAt(1) : '0'; // Verificamos si el número tiene al menos dos dígitos (con operador ternario)

    /* if (String(number).length > 1) {
      segundoDigito = String(number).charAt(1);
    } else {
      segundoDigito = '0';
    } (sin operador ternario) */

    return Number(firstDigit) + Number(secondDigit);
  });
  console.log(result);
};

suma([21, 53, 10, 31, 81]);

//   - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

    const usersWeb = [
    {
    id: "user001",
    name: "Juan",
    surname: "Pérez",
    age: 30
    },
    {
    id: "user002",
    name: "María",
    surname: "González",
    age: 25
    },
    {
    id: "user003",
    name: "Pedro",
    surname: "Sánchez",
    age: 35
    },
    {
    id: "user004",
    name: "Ana",
    surname: "Martínez",
    age: 28
    },
    {
    id: "user005",
    name: "Luis",
    surname: "López",
    age: 40
    }
    ];

const deleteUser = (id) => {
  const filter = usersWeb.filter((item) => item.id !== id); // Aquí estamos diciendo "excluir del array cualquier elemento cuyo id coincida con el argumento id que se pasa a la función".
  console.log(filter);
};

deleteUser("user004");