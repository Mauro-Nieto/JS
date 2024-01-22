// for

const NUMERO =5;

for (let i = 0; i <10; i++) {
    const RESULTADO = NUMERO * i;
    console.log(NUMERO + ' x ' + i + ' = ' + RESULTADO);
}


// sentencias Break
// sirve para cortar el ciclo cuando se cumple una condicion especifica

for (let i = 0; i <10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// sentencias continue
// sirve para saltar una iteracion cuando se cumple una condicion especifica

for (let i = 0; i <10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}



// while
// se ejecuta mientras la condicion sea verdadera

let i = 0;
while (i <= 10)  {
    console.log(i);
    i++;
}
console.log('fin del ciclo while');



// do while
// se ejecuta al menos una vez y luego se evalua la condicion

let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 10);
console.log('fin del ciclo do while');


let suma = 0;
let continuar;

do {
    let numero = parseInt(prompt('Ingrese un numero'));
    suma += numero;
    continuar = confirm('Desea continuar?');
}   
while (continuar === true);
console.log(suma);


// switch
// evalua una expresion y dependiendo del resultado ejecuta un bloque de codigo u otro

let numero = parseInt(prompt('Ingrese un numero'));
switch (numero) {
    case 1:
        console.log('El numero es 1');
        break;
    case 2:
        console.log('El numero es 2');
        break;
    case 3:
        console.log('El numero es 3');
        break;
    default:
        console.log('El numero es otro');
        break;
}













