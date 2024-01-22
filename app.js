// variables y valores

// espacio reservado en memoria que se puede reasignar 
// las variables se escriben en camel case es una manera de escribir variables de forma estandar
// primera palabra en minuscula y la segunda en mayuscula  nombreVariable


// Let-------------------------------------------------------------------------------------------------------------------------------------------

// let nombre = 'Juan';   let declara variables ya no es aoncejado var
// let tiene un ambito de bloque, solo es valida dentro del bloque donde se declaro

// let name = 'Juan';
// let lastName = 'Perez';
// let age = 34;
// let booleano = true;

// que más se puede alojar en una variable

// arrays
// let array = [1, 2, 3, 4, 5];

// objetos
// let object = {
//     name: 'Juan',
//     lastName: 'Perez',
//     age: 34,
//     booleano: true
// };

// funciones
// let function = function() {
//     return 'Hola mundo';
// };

// null
// let null = null;


 

// CONSTANTES --------------------------------------------------------------------------------------------------------------------------------------

// espacio reservado en memoria que no se puede reasignar
// se escriben en mayusculas y con guion bajo para separar palabras
// const tiene un ambito de bloque, solo es valida dentro del bloque donde se declaro
// const NOMBRE_VARIABLE = 'valor';
// --------------------------snacke case es una manera de escribir variables de forma estandar

// const NAME = 'Juan';
// const LAST_NAME = 'Perez';



// declaeacion de variables con let -----------------------------------------------------------------------------------------------------------------

// se declara pero no se asigna valor
// let names;

// inicializacion de variables con let -----------------------------------------------------------------------------------------------------------------

// names = 'Juan';



let numberOne = 1;
let numberFour = 4;
let sumaNumbers = numberOne + numberFour;

console.log(sumaNumbers);


// operaciones matematicas ----------------------------------------------------------------------------------------------------------------------------

// suma
// let number1 = 1;


// concatenación de strings --------------------------------------------------------------------------------------------------------------------------

let nameCol = 'Juan';
let lastNameCol = 'Perez';
let fullName = nameCol + ' ' + lastNameCol;

console.log(fullName);


// prompt --------------------------------------------------------------------------------------------------------------------------------------------
// cuadro de dialogo en el que el usuario puede interactuar con la página

let namePrompt = prompt('Ingresa tu nombre');
let lastNamePrompt = prompt('Ingresa tu apellido');
let fullNamePrompt = namePrompt + ' ' + lastNamePrompt;

console.log("Hola " + fullNamePrompt);