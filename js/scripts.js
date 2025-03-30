// # Ejercicios

// ## Arrays métodos callback

// 1️⃣ Camila está organizando datos en su sistema.
// Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array.
// Ejemplo: Si recibe [2, 5, 8], deberá mostrar:

// 0 - 0  
// 5 - 5  
// 16 - 8

const sistemData = (numbers) => {

    const multiplyNumber = numbers.forEach((number, position) => {
        console.log(`${number * position} - ${number}`);
    })
}
sistemData([2, 5, 8])


// 2️⃣ Bego quiere hacer cálculos avanzados.
// Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1 (el +1 es para evitar que se divida por 0).
// Ejemplo: Si recibe [10, 20, 30], deberá imprimir [10, 10, 10].

const generateMathResults = (numbers) => {

    const mathCalculation = numbers.map((number, position) => {
        
        return number / (position + 1)
    })

    console.log(mathCalculation);
    
}
generateMathResults([10, 20, 30])

// 3️⃣ Sabrina está trabajando con archivos de texto.
// Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.
// Ejemplo: Si recibe ["hola", "mundo"], deberá imprimir ["HOLA", "MUNDO"].

const generateUpperCaseWords = (words) => {

    const convertWordInUpperCase = words.map(word => {
        return word.toUpperCase()
    })

    console.log(convertWordInUpperCase);
    
}
generateUpperCaseWords(["hola", "mundo"])

// 4️⃣ Macarena está organizando una lista de ingredientes.
// Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra. Debe funcionar con mayúsculas y minúsculas.
// Ejemplo: Si recibe (["Manzana", "Melón", "Pera", "Sandía"], "m"), deberá imprimir ["Manzana", "Melón"].

const filterIngredientsList = (ingredients, letter) => {

    const filterListBasedOnLetter = ingredients.filter(ingredient => {
        return ingredient.toUpperCase().charAt(0) === letter.toUpperCase()
    })

    console.log(filterListBasedOnLetter);

}
filterIngredientsList(["manzana", "Melón", "Pera", "Sandía"], 'm')

// 5️⃣ Camila está recopilando datos numéricos.
// Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
// Ejemplo: Si recibe [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], deberá mostrar 55.

const generateSum = (numbers) => {

    const sumNumbers = numbers.reduce ((acc,number) => {
        return acc + number;
    })
    console.log(sumNumbers);
    
}
generateSum ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


// 6️⃣ Bego está creando informes detallados.
// Investiga el método Math.pow()
// Crea una función que reciba un array de 10 números y muestre por consola cada número, su cuadrado y su cubo en este formato:
// "Número: 2 - Cuadrado: 4 - Cubo: 8".


const detailedReports = (numbers) => {

    const numberCubed = numbers.forEach(number => {
        console.log(`Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`);
    })

}
detailedReports([2, 3, 4, 5, 1, 6, 7, 8, 9, 10])

// 7️⃣ Sabrina quiere modificar un mensaje secreto.
// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.
// Ejemplo: Si recibe "javascript", deberá imprimir "jAvAscrIpt".


const modificateSecretMessage = (message) => {

    const splitMessage = message.split('')
    const vowels = 'AEIOUaeiou'

    const capitalizeVowels = splitMessage.map(letter => {
        if (vowels.includes(letter)){
            return letter.toUpperCase()
        } else {return letter}
      })

    const joinMessage = capitalizeVowels.join('')
    console.log(joinMessage);
    
}
modificateSecretMessage('papa java')

// 8️⃣ Macarena está buscando números importantes.
// Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.
// deberá mostrar:
// "Algún número es mayor de 5"
// "Ningún número es mayor de 5"

const detectImportantNumbers = (numbers) => {

    const detectIfAnyNumberBiggerThan5 = numbers.some(number => {
       return number > 5
    })

    detectIfAnyNumberBiggerThan5 === true ? 
    console.log('Algún número es mayor de 5'):
    console.log('Ningún número es mayor de 5')
    
}
detectImportantNumbers([2, 4, 6, 8, 9, 10, 12, 16, 13, 1])
detectImportantNumbers([2, 4, 3, 4, 2, 1, 2, 1, 3, 1])

// 9️⃣ Camila está filtrando resultados.
// Crea una función que reciba un array de 5 palabras y un número, y devuelva un array con las palabras que tienen esa longitud.
// Ejemplo: Si recibe ['hola', 'adios', 'gato', 'perro', 'casa'], 4, deberá imprimir ['hola', 'gato', 'casa'].

const filterWordsWith4LettersLength = (words, wordLength) => {

    const determineIfWordIs4LettersLength = words.filter(word => {
        return word.length >= wordLength
    })
    console.log(determineIfWordIs4LettersLength);
    

}
filterWordsWith4LettersLength(['hola', 'adios', 'gato', 'perro', 'casa'], 4)

// 🔟 Bego quiere comprobar divisores.
// Crea una función que reciba un array de números y un número, y devuelva un array con los números que sean divisores de ese número.
// Ejemplo: Si recibe [1, 2, 3, 4, 5, 6] y 2, deberá imprimir [1, 2, 4, 6].

const checkDividers = (dividendNumbers, dividerNumber) => {

    const divisorNumbers = dividendNumbers.filter(number => {
        return number % dividerNumber === 0
    })

    console.log(divisorNumbers);
    
}
checkDividers([1, 2, 3, 4, 5, 6], 2)



// 1️⃣1️⃣ Sabrina está seleccionando usuarios.
// Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30.

// const users = [
// { name: 'John', age: 25 },
// { name: 'Jane', age: 30 },
// { name: 'Bob', age: 20 }
// ];

// Ejemplo salida:
// Usuarios menores de 30: John, Bob

const checkIfUserHasLessThan30Years = (users) => {

    //Pero si le pido que me devuelva solo el nombre por qué no funciona
    // const filter30YearsOldUsers = users.filter(user => {
    //     if (user.age < 30){
    //         return user.name
    //     }
    // })

    const filter30YearsOldUsers = users.filter(user => {
        return user.age < 30
    })
    
    const filterNameUsers = filter30YearsOldUsers.map(user => {
        return user.name
    })

    console.log(`Usuarios menores de 30: ${filterNameUsers}`);

}
checkIfUserHasLessThan30Years(
    [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
    ]
)

// 1️⃣2️⃣ Macarena quiere comprobar números pares.  
// Crea una función que reciba un array con 5 números y te diga si todos son pares o no.
// Ejemplo: Si recibe [2, 4, 6, 8, 10], deberá impimir Todos son pares.

const findOutPeer = (numbers) => {

    const filterPeerNumbers = numbers.every(number => {
        return number % 2 === 0
    })
    
    filterPeerNumbers === true ? 
    console.log(`Todos son pares`) :
    console.log(`No todos son pares`)
    
    
}
findOutPeer([2, 6, 8, 10, 6])


// 1️⃣3️⃣ Abby quiere ordenar palabras por longitud.  
// Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.
// Ejemplo: Si recibe ["cielo", "sol", "estrella", "luz", "universo"], deberá imprimir ["sol", "luz", "cielo", "estrella", "universo"].

const orderListBasedOnLenght = (words) => {

    const orderedListBasedOnLenght = words.sort((a, b) => {
        return a.length - b.length
    })

    console.log(orderedListBasedOnLenght);
}
orderListBasedOnLenght(["cielo", "sol", "estrella", "luz", "universo"])

// 1️⃣4️⃣ Camila quiere invertir palabras.  
// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y minúsculas. A Camila no le gusta el método reverse(), así que quiere hacerlo de otra manera 😊.
// Ejemplo: Si recibe "Mariposas" deberá imprimir "sasopiraM".

const reverseWordList = (word) => {

    const splitWord = word.split('')

    const convertLetterToPosition = splitWord.map((letter, position) => {
        return position
    })

    console.log(convertLetterToPosition);
    
    
    const reverseWord = convertLetterToPosition.sort((a, b) => {
        return b - a
        
    })
    console.log(reverseWord);

    const asignPositionToNumber = reverseWord.map(position => {
        return position = word
    })
    
    console.log(asignPositionToNumber);
    
}
reverseWordList('Mariposa')

// 💪 Desafío Extra 1:
// Bego quiere simplificar un array de números de dos dígitos sumando sus dígitos.
// Crea una función que reciba un array de 5 números de dos dígitos y devuelva un array con la suma de los dígitos.
// Ejemplo: Si recibe [21, 34, 87, 10, 28], deberá imprimir [3, 7, 15, 1, 10].

const sumOfTwoDigits = (numbers) => {

    const convertNumberToString = numbers.map(number => {
        return number.toString()
    })

    console.log(convertNumberToString);

    

}
sumOfTwoDigits([21, 34, 87, 10, 28])



// 💪 Desafío Extra 2:
// Macarena quiere borrar usuarios específicos.
// Crea una función que reciba un id y borre al usuario correspondiente del siguiente array:
// const users = [
// { id: "user001", name: "Juan", surname: "Pérez", age: 30 },
// { id: "user002", name: "María", surname: "González", age: 25 },
// { id: "user003", name: "Pedro", surname: "Sánchez", age: 35 },
// { id: "user004", name: "Ana", surname: "Martínez", age: 28 },
// { id: "user005", name: "Luis", surname: "López", age: 40 }
// ];

// Ejemplo: Si recibe "user003", el array quedará sin Pedro.


const eraseUsers = (users) => {

    
}
eraseUsers([
    { id: "user001", name: "Juan", surname: "Pérez", age: 30 },
    { id: "user002", name: "María", surname: "González", age: 25 },
    { id: "user003", name: "Pedro", surname: "Sánchez", age: 35 },
    { id: "user004", name: "Ana", surname: "Martínez", age: 28 },
    { id: "user005", name: "Luis", surname: "López", age: 40 }
    ])