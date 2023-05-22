//VARIABLES
    /*● Crear variables de diferentes tipos de datos: número, cadena de texto, booleano e imprimir su valor por
        la pantalla del navegador y la consola.*/
            let number = 10;
            let decimal = 14.25;
            let a = 20;
            let b = 6;
            let c = 9;
            let d = 2.5;
            let e = 7.1;
            console.log(number);
            console.log('Esto también son números: ' + 'a' + 'b' + 'c')
            alert(number);
    
            let palabra1 = 'Esto';
            let palabra2 = 'es';
            let palabra3 = 'un';
            let palabra4 = 'string';
            let string = 'Esto también es un string';

            console.log('La palabra1 es "' + palabra1 +'".')
            console.log('La palabra2 es "' + palabra2 +'".')
            console.log('La palabra3 es "' + palabra3 +'".')
            console.log('La palabra4 es "' + palabra4 +'".')



            console.log('Esto es un string de varias palabras: "' + string + '.');
            alert('Esto es una concateneción de strings. "' + palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4 + '".')
            window. print('Esto es un string de varias palabras: "' + string + '.');

            let boolean = true;
            let boolean2 = false; 
            console.log(boolean);
            console.log(boolean2);
            alert(boolean);
            alert(boolean2);


    /*● De las variables declaradas anteriormente, identifica las que son de tipo integer y realiza operaciones
        matemáticas básicas con las variables creadas anteriormente (suma, resta, multiplicación, división).
        Deberás imprimir el resultado por la pantalla del navegador y la consola.*/
        let suma = number + a;
        let resta =  c - b;
        let multiplicacion =  decimal * e;
        let division = a/b;

        console.log('El resultado de la suma de let number y let a es ' + suma + '. Este numero es un integer porque es un numero entero');
        console.log('El resultado de la resta de let c y let b es ' + resta + '.Este tambien es integer.');
        console.log('El resultado de la multiplicación de let decimal ('+ decimal +') y let e('+ e +') es ' + multiplicacion + '.Este numero es tipo floar porque es un decimal.');
        console.log('El resultado de la división de let a y let b es ' + division + '. El resultado es un integer');

        alert('El resultado de la suma de let number y let a es ' + suma + '. Este numero es un integer porque es un numero entero');
        alert('El resultado de la resta de let c y let b es ' + resta + '.Este tambien es integer.');
        alert('El resultado de la multiplicación de let decimal ('+ decimal +') y let e('+e+') es ' + multiplicacion + '.Este numero es tipo floar porque es un decimal.'); 
        alert('El resultado de la división de let a y let b es ' + division + '. El resultado es un integer'); 


    /*● De las variables declaradas anteriormente, identifica las que son de tipo texto y concatena dichas
        cadenas de texto.Deberás imprimir el resultado por la pantalla del navegador y la consola.
        */

        console.log('Esto es una concateneción de strings. "' + palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4 + '".')
        console.log('Esto es un string de varias palabras: "' + string + '.');
        alert('Esto es una concateneción de strings. "' + palabra1 + ' ' + palabra2 + ' ' + palabra3 + ' ' + palabra4 + '".')
        window. print('Esto es un string de varias palabras: "' + string + '.');

        console.log(boolean);
        console.log(boolean2);
        alert(boolean);
        alert(boolean2);




//FUNCIONES
    /*● Crear una función que imprima por la pantalla del navegador y la consola el mensaje "Hola, [nombre]"
        con un parámetro para el nombre.*/

        function saludito(nombre){
        return'Hola ' + nombre;
        }

        console.log(saludito(Lucía));


    /*● Crear función que reciba como parámetros dos números y que devuelva la suma de ellos. Deberás
        imprimir el resultado por la pantalla del navegador y la consola.*/

        function funcionSuma(a,b){
            return a + b; 
        }

        let resultado = funcionSuma(5,7);

        console.log(resultado);
        document.write('El resultado de la suma es: ' + resultado);

    /*● Crear función que determine si un número es par o impar. Deberás imprimir el resultado por la pantalla
        del navegador y la consola.*/

        function parImpar(numero){
            if (numero % 2 === 0) {
                return 'par';
            } else {
                return 'impar';
            }
        }
        let queEs10 = parImpar(10);
        console.log(QueEs10);
        document.write(queEs10);

        let queEs7 = parImpar(7);
        console.log(queEs7);
        document.write(queEs7);





/*OBJETOS
Todo lo que retorne cada función se debe imprimir el resultado por la pantalla del navegador y la consola.
● Crear un objeto carro haciendo la abstracción de sus atributos y un objeto anidado.*/
        // Crear objeto coche con atributos
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

        // Acceder a los atributos del objeto coche
            console.log('Marca: ' + coche.marca);
            console.log('Modelo: ' + coche.modelo);
            console.log('Motor: ' + coche.motor.tipo + ' (Híbrido: ' + coche.motor.hibrido + ')');
            console.log('Color: ' + coche.color);
            console.log('Precio: ' + coche.precio);
            console.log('Año: ' + coche.anyo);


//● Crear una función que devuelva la marca del carro.
            function marca(coche){
                return coche.marca;
            }
            //console.log('El coche es de la marca ' + marca(coche)) +'.';

//● Crear una función que devuelva la cantidad de puertas que tiene el carro.
            function puertas(coche){
                return coche.puertas; 
            }
             //console.log('El coche tiene ' + puertas(coche) + ' puertas.');

// Crear una función que devuelva un atributo del objeto anidado.*/
            function atributoAnidadoTipo (coche){
                return coche.motor.tipo  
            } 
             //console.log(atributoAnidadoTipo(coche))

//ARRAYS
// Crear un array de 10 números
    arrayNumerico = [2,4,6,8,10,12,14,16,18,20];
    console.log(arrayNumerico.length);

// Crear una función que imprima en consola todos los números de un array (Investigar ciclo for)
    function imprimirArray(array){
        for ( i=0; i<array.length; i++) {
        console.log(array)
        }}

    console.log(imprimirArray(arrayNumerico))
//● Crear una función que añada un número al array
    function anyadirNumero(array,numero){
        arrayNumerico.push(numero);
        return arrayNumerico
    }
    console.log(anyadirNumero(arrayNumerico,3))
//Crear una función que elimine los números pares de ese array.
     /*function quitarPares(array){
        const arrayImpar = [];
        for (i=0; i>array.length; i++){
            if (array[i] % 2 !== 0){
                arrayImpar.push(array[i]);
            }
        }
        return arrayImpar;
        }

        console.log(arrayImpar)*/


function sinParFilter(array){
    return array.filter(numero => numero % 2 !== 0);
}
console.log(sinParFilter(arrayNumerico));

// Crear una función que devuelva el número mayor de un array.
function elNumeroMayor(array) {
    let mayor = array[0]; 
    for (let i = 1; i < array.length; i++) {
      if (array[i] > mayor) {
        mayor = array[i];
        }
    }
    return mayor;
}
    console.log(elNumeroMayor(arrayNumerico))

//Crear una función que devuelva el número menor de un array.
    function elNumeroMenor(array) {
        let menor = array[0]; 
        for (let i = 1; i > array.length; i++) {
        if (array[i] < menor) {
            menor = array[i];
            }
        }
        return menor;
    }
        console.log(elNumeroMenor(arrayNumerico))
//Crear un función que convierta en minúsculas todas las letras de un texto.
let fraseEjemplo = 

//Crear una función que convierta en mayúsculas todas las letras de un texto.
//Crear una función que reciba un array de nombres y que convierta la primera letra de cada nombre en mayúscula.*/


/*MANIPULACIÓN DEL DOM
● Crear un botón en HTML y usar JavaScript para mostrar un mensaje cuando se hace clic.
● Cambiar el contenido de un elemento HTML mediante JavaScript.
● Ocultar y mostrar elementos HTML utilizando JavaScript.
●
● Crear un array de 10 nombres.
● Crear una función que imprima en pantalla una lista con los nombres del array de nombres.
● Crear un array de números.
● Crear una función que pinte en pantalla cuántos números tiene el array de números.
● Crea los nodos necesarios para imprimir un formulario.
● Crea los nodos necesarios para imprimir una tabla.
● Crea array de objetos 10 objetos con su respectivos key:value. Cada objeto deberá tener las siguientes
keys:
id, name, status, species, type, gender
El value de cada key lo asignas tú
● Imprime cada elemento del objeto dentro de la tabla que creaste anteriormente.*/