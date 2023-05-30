//crear variables de tipo numero y strings
let integer = 10;
let float = 14.25;
let a = 20;
let b = 6;
let c = 9;
let d = 2.5;
let e = 7.1;
let booleanoVerdadero = true;
let booleanoFalso = false;
let nulo = null;
let indefinido = undefined;
let palabra1 = 'Esto';
let palabra2 = 'es';
let palabra3 = 'un';
let palabra4 = 'string';
let string = 'Esto es un string de varias palabras'; 
let arrayNums = [float, a, b, c, d, e];
let integers = [];

console.log(integer);
console.log(float);
console.log('Esto también son números: ' + 'a' + 'b' + 'c' + 'd' + 'e');
document.getElementById("ejercicio1Numeros").innerHTML = "a = " + a + ", b = " + b + ", c = " + c + ", d = " + d + " y e = " + e  + ". Los números enteros son integers (let integer=" + integer +"), y los números decimales son de tipo float (let float=" + float +")";   


console.log("Esto son los textos almacenados en variables:  let palabra1 = " +  palabra1 + ", let palabra2 = " + palabra2 + ", let palabra3 = " + palabra3 + ", let palabra4 = " + palabra4 + " y let string = " + string);
document.getElementById("ejercicio1Texto").innerHTML = "Esto son los textos almacenados en variables: let palabra1 = '" + palabra1 + "', let palabra2 = '" + palabra2 + "', let palabra3 = '" + palabra3 + "', let palabra4 = '" + palabra4 + "' y let string = '" + string+ "'.";

console.log(booleanoVerdadero + 'y ' + booleanoFalso);
console.log(nulo);
console.log(indefinido);

for (let i = 0; i < arrayNums.length; i++) {
    if (Number.isInteger(arrayNums[i])) {
    integers.push(arrayNums[i]);
    }
}
let mostrarIntegers = "Números enteros (integers) encontrados: " + integers.join(", ");
document.getElementById("tiposNumero").innerHTML = mostrarIntegers;


let suma = a + b;
let resta = c - d;
let multipl = float * integer;
let division = a / b;

console.log('Esto es una suma de a + b ' + suma);
console.log('Esto es una resta de c - d ' + resta +'.');
console.log("Esto es una multiplicación de 'float' por 'integer'" + multipl +'.');
console.log("Esto es una división de a entre b" + multipl +'.');

document.getElementById("operacionSuma").innerHTML = 'Esto es una suma de a + b:  ' + suma +'.'
document.getElementById("operacionResta").innerHTML = 'Esto es una resta de c - d:  ' + resta +'.'
document.getElementById("operacionMulti").innerHTML = "Esto es una multiplicación de 'float' por 'integer':  " + multipl +'.'
document.getElementById("operacionDivi").innerHTML = "Esto es una división de a entre b:  " + division +'.'

console.log("Esto es una concatenación de strings: '" + palabra1 + "  " + palabra2 + " " + palabra3 + "  " + palabra4 + "'(concatenado), y  '" + string + "'.");
document.getElementById("ejercicio1String").innerHTML = "Esto es una concatenación de strings: '" + palabra1 + "  " + palabra2 + " " + palabra3 + "  " + palabra4 + "'(concatenado), y  '" + string + "'.";


function saludito(nombre){
    return'Hola ' + nombre;
}

let resutadoSaludo = saludito('Lucía')

console.log(resutadoSaludo);
document.getElementById("saludo").innerHTML = "Y este códico muestra: " + resutadoSaludo;


function funcionSuma(a,b){
    return a + b; 
}

let resultado = funcionSuma(5,7);

console.log(resultado);
document.getElementById("funcionSuma").innerHTML = "Y este codigo devuelve: " + resultado;

function parImpar(numero) {
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
}
let resultadoParImpar = parImpar(33);
let resultado2ParImpar = parImpar(22);
console.log("Si pasamos como parametro '33' dice que es " + resultadoParImpar + ", y si le pasamos 22, dice que es " + resultado2ParImpar + "."); 
document.getElementById("funcionParImpar").innerHTML = "Y este codigo devuelve: " + resultadoParImpar + " si le pasamos 33, y que es " + resultado2ParImpar + " al pasarle com oparámetro 22."

let coche = {
    marca: 'Renault',
    modelo: 'Arkana',
    motor: {
        tipo: 'Gasolina',
        hibrido: true,
    },
    color: 'negro',
    precio: 34500,
    anyo: 2023,
    puertas: 5,
};

console.log('Marca: ' + coche.marca);
console.log('Modelo: ' + coche.modelo);
console.log('Motor: ' + coche.motor.tipo + ' (Híbrido: ' + coche.motor.hibrido + ')');
console.log('Color: ' + coche.color);
console.log('Precio: ' + coche.precio);
console.log('Año: ' + coche.anyo);
console.log('Nº PUertas: ' + coche.puertas);

document.getElementById("marca").innerHTML = coche.marca;
document.getElementById("modelo").innerHTML = coche.modelo;
document.getElementById("motor").innerHTML = coche.motor.tipo + " | " + coche.motor.hibrido;
document.getElementById("color").innerHTML = coche.color;
document.getElementById("precio").innerHTML = coche.precio;
document.getElementById("anyo").innerHTML = coche.anyo;
document.getElementById("puertas").innerHTML = coche.puertas;

function marca(coche){
    return coche.marca;
}
let laMarca = marca(coche);
console.log('El coche es de la marca ' + laMarca) +'.';
document.getElementById("marcaCoche").innerHTML = "Y esta función nos devuelve que la marca de este coche es " + laMarca;


function puertas(coche){
    return coche.puertas;
}
let numPuertas = puertas(coche);
console.log('El coche tiene ' + numPuertas +' puertas.');
document.getElementById("numPuertas").innerHTML = "Y esta función nos devuelve que el coche tiene " + numPuertas + ' puertas.';


function atributoAnidadoTipo (coche){
    return coche.motor.tipo  
} 
let NestedAtr1 = atributoAnidadoTipo(coche);
console.log("El coche tiene " + NestedAtr1 + " como combustible.")
document.getElementById("tipoMotor").innerHTML = "El coche tiene " + NestedAtr1 + " como combustible."


let arrayNumeros = [2, 4, 6, 7, 8,9,10, 12, 13, 14, 16, 18, 20];

console.log(arrayNumeros.length);
document.getElementById("arrNum").innerHTML = "El array tiene " + arrayNumeros.length + " números.";

function imprimirArray(arrayNumeros) {
    for (let i = 0; i < arrayNumeros.length; i++) {
    console.log(arrayNumeros[i]);
    }
}

imprimirArray(arrayNumeros);
document.getElementById("printArrayNum").innerHTML = "El array es: [" + arrayNumeros.join(", ") + "].";


function anyadirNumero(array,numero){
    arrayNumeros.push(numero);
    return arrayNumeros
}
let arrayConAnyadido= anyadirNumero(arrayNumeros,3);
console.log(arrayConAnyadido)
document.getElementById("anyadirNum").innerHTML = "El nuevo array, añadiendo el número quepasamos por parameto es. [" + arrayConAnyadido + "]";


function sinParFilter(array){
    return array.filter(numero => numero % 2 !== 0);
}
let ArrSinPares= sinParFilter(arrayNumeros);
console.log("el array sin pares es " + ArrSinPares);
document.getElementById("sinPar").innerHTML = "El array sin nuemros pares es [" + ArrSinPares + "]";


function elNumeroMayor(array) {
    let mayor = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
        mayor = array[i];
        }
    }
    return mayor;
}

let mayorNum = elNumeroMayor(arrayNumeros)
console.log("el numero mayor es " + mayorNum);
document.getElementById("numMayor").innerHTML = "El numero mayor es " + mayorNum;


function elNumeroMenor(array) {
    let menor = array[0]; 
    for (let i = 1; i < array.length; i++) {
        if (array[i] < menor) {
        menor = array[i];
        }
    }
    return menor;
}
let menorNum = elNumeroMenor(arrayNumeros)
console.log("el numero menos es " + menorNum);
document.getElementById("numMenor").innerHTML = "El numero menor es " + menorNum;


let fraseParaTransformar = "JuguemoS cOn esTA frASe";

function transformarAminusculas(fraseParaTransformar) {
    return fraseParaTransformar.toLowerCase();
}

let fraseMinus = transformarAminusculas(fraseParaTransformar);
console.log("Así quedaría: " + fraseMinus);
document.getElementById("aMinus").innerHTML = "Así quedaría: " + fraseMinus;

function transformarAmayusculas(fraseParaTransformar) {
    return fraseParaTransformar.toUpperCase();
}

let fraseMayus = transformarAmayusculas(fraseParaTransformar);
console.log("Así quedaría: " + fraseMayus);
document.getElementById("aMayusc").innerHTML = "Así quedaría: " + fraseMayus;


let arrNombres = ['sonia', 'alberto', 'libertad', 'dani', 'cesar', 'maria', 'habibullah'];
function capitalizeNombres(array) {
    let nombresCorregidos = [];
    for (let i = 0; i < array.length; i++) {
    let nombre = array[i];
    let convertido = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    nombresCorregidos.push(convertido);
    }
    return nombresCorregidos;
}

let arrayCorregido = capitalizeNombres(arrNombres);
console.log("Array corregido: " + arrayCorregido);
document.getElementById("corregirArray").innerHTML = "El array con los nombres en capital letter: [" + arrayCorregido + "]";


let btn = document.getElementById("miBtn");
btn.addEventListener("click", function() {
    alert("CLACK!");
    });


let btn2 = document.getElementById("modifTxt");
let txt1 = document.getElementById("texto2");
modifTxt.addEventListener("click", function() {
    texto2.innerHTML = "Y aserejé-ja-dejde jebere seibiunouva majavi an de bugui an de güididípi";
});


let txtFantasma = document.getElementById("txtFantasma");
let magicButton = document.getElementById("magic");
let verTxt = true;
let aparecer = txtFantasma.style.display;

magicButton.addEventListener("click", function() {
    if (verTxt) {
    txtFantasma.style.display = "none";
    verTxt = false;
    } 
    else {
    verTxt = true;
    txtFantasma.style.display = aparecer;
    }
});

