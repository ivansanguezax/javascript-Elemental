function miFuncion(){ // Declarando la funcion
    return 3; // Bloque de Codigo o instrucciones
}

miFuncion(); // llamar a la funcion

//ejemplo de una funcion

function love(param1, param2){
    var a= param1 + " love " + param2;
    return a;
}

love("me", "you");


function suma(a,b){
    var resultado = a + b;
    return resultado;
}

suma(20,30);


// Funciones expresivas

var miFuncionExpresiva = function(a,b){
    return a + b;
}

miFuncionExpresiva(); // llamar a la funcion

// Funcion que nos devuelva numero random 1 al 5

function random(){
    return  1 + Math.random() *4;
}


function mutantes(){
    const mutante = 'Wolverine';
    if(true){
        const mutante = 'Ciclope';
        console.log(mutante);
    }
    console.log(mutante);
}

mutantes();


console.log("---------");

// var miNombre = 'Ivan';

// function nombre(usuario){
//     var miNombre = usuario;
//     console.log(miNombre);
// }

// nombre("Oscar");

// console.log(`Hola ${miNombre}, como estas?`);


// como si creamos un scope local, y mandamos a llamar una variable fuera de la funcion

function nombre(usuario){
    var miNombre = usuario;
    console.log(miNombre);
}

nombre('Jose');
console.log(`Hola ${miNombre}, como estas`);