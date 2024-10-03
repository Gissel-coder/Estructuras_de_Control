// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParidad(numero) {

    if (numero % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}
verificarParidad(10);
verificarParidad(7);


// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad < 18) {
        console.log("Menor de edad");
    } else if (edad >= 18 && edad <= 65) {
        console.log("Adulto");
    } else {
        console.log("Adulto mayor");
    }
}
clasificarEdad(16);
clasificarEdad(35);
clasificarEdad(70);


// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
    function cuentaRegresiva(numero) {
        // Validamos que el numero sea un entero positivo
        if (numero < 0 || !Number.isInteger(numero)) {
            console.log("Debes, ingresar un número entero positivo.");
            return;
        }
    
        while (numero >= 0) {
            console.log(numero);
            numero--; // decrecemos el numero
        }
    }
    cuentaRegresiva(5);

    // Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0; // Inicializamos el contador en cero

    do {
        console.log("Estoy aprendiendo JavaScript"); // Imprimimos el mensaje
        contador++; // Subimos el contador 
    } while (contador < 5); 
}
repetirMensaje();
// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
    if (numero < 0 || !Number.isInteger(numero)) {
        console.log("Por favor, ingresa un número entero positivo.");
        return;
    }
    
    // Utilizamos un bucle for para imprimir los números pares
    for (let i = 0; i <= numero; i += 2) {
        console.log(i); // Imprimimos el número par
    }
}
imprimirPares(10);

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for (let i = 1; i <= 10; i++) {
        if (i === 6) {
            break; // Con break paramos el bucle cuando i sea igual a 6
        }
        console.log(i); // Mostramos el número actual
    }
}
detenerEnSeis();
// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    
        for (let i = 1; i <= 10; i++) {
            if (i === 5) {
                continue; // Salta el número 5
            }
            console.log(i); // Imprime el número si no es 5
        }
    }
    
saltarCinco();


// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    switch (dia) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Número elegido no válido. Debe elegirse números entre 1 y 7.";
    }
}
console.log(obtenerDiaSemana(2)); // "Martes"
console.log(obtenerDiaSemana(4)); // "Jueves"
console.log(obtenerDiaSemana(8)); // "Debe ser del 1 al 7"

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch (letra.toLowerCase()) { // convertimos a minuscula por si el usuario ingresa en minuscula 
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true; // Es una vocal
        default:
            return false; // No es una vocal
    }
}
console.log(esVocal('A')); // verdadero
console.log(esVocal('b')); // falso
console.log(esVocal('e')); // verdadero
console.log(esVocal('z')); // falso

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function evaluarNumeros(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        return "Todos son positivos.";
    } else if (a < 0 || b < 0 || c < 0) {
        if (a < 0 && b < 0 && c < 0) {
            return "Todos son negativos.";
        } else {
            return "Al menos uno es negativo.";
        }
    } else {
        return "Hay números que son cero o positivos.";
    }
}
console.log(evaluarNumeros(5, 10, 15)); // "Toditos positivos."
console.log(evaluarNumeros(-5, 10, 15)); // "Al menos uno es negativo."
console.log(evaluarNumeros(-5, -10, -15)); // "Todos son negativos."
console.log(evaluarNumeros(0, -10, 15)); // "Al menos uno es negativo."

// Exportar todas las funciones
export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};