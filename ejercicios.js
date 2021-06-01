// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
let miFuncion = "Hola Mundo"
console.log(miFuncion.length)

function contarCaracteres(cadena= ""){
    if(!cadena){
        console.warn("No ingresaste ninguna cadena");
    } else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}
contarCaracteres("Hola Mundo");

const contarCaracteresUno = (cadena = "") => (!cadena) ? console.warn("No ingresaste ninguna cadena"):console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);

contarCaracteresUno("Hola mundo");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
let miFuncion2 = "Hola Mundo";
console.log(miFuncion2.substring(0,4));

const recortarTexto = (cadena= "", longitud = undefined) => (!cadena) ? console.warn("No ingresaste el texto") : console.info(cadena.slice(0, longitud));

recortarTexto("Hola Mundo", 4)

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
let miFuncion3 = "Hola que tal"
console.log(miFuncion3.split(" "))

const cadenaAArreglo = (cadena ="", separador = undefined) => (!cadena) ? console.warn("No ingresaste una cadena de texto") : (separador === undefined) ? console.warn("No ingresaste el caracter separador") : console.info(cadena.split(separador));

cadenaAArreglo("Hola que tal", " ")

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
let miFuncion4 = "Hola Mundo "
console.log(miFuncion4.repeat(3))

const repetirTexto = (texto = "", veces = undefined) => {
    if(!texto)return console.warn("No ingresaste un texto");

    if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");

    if(veces === 0) return console.error("El número de veces no puede ser 0");

    if(Math.sign(veces) === -1) return console.error("El número de veces no puede ser negativo");

    for(let i=1; i <= veces; i++) console.info(`${texto}, ${i}`);
}

repetirTexto("Hola mundo", 3)
repetirTexto("Hola mundo", 0)
repetirTexto("Hola mundo", -20)
repetirTexto("", 3)

