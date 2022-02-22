// Sintaxis
if(true){
    console.log("Hola mundo");
}else{
    console.log("Chau mundo");
}

// Ejemplo1
var num = 10;

if(num<=10){
    console.log("El numero es menor a 10");
}else{
    console.log("El numero es igual o mayor a 10");
}

console.log("----------------");


// Ejemplo 2
// Condiciones Anidadas

var num2 = 10;

if(num2<10){
    console.log("El numero es menor a 10");
}else{
    if(num2>10){
        console.log("El numero es mayor a 10");
    }else{
        console.log("El numero es igual a 10");
    }
}

console.log("----------------");

// Ejemplo 3
// Else if

var num3 = 99;

if(num3<100){
    console.log("El numero es menor a 10");
}else if (num3>100){
    console.log("El numero es mayor a 10");
}else{
    console.log("El numero es igual a 10");
}

console.log("----------------");

// Ejemplo 4
// Condicionales Compuestas

var num4 = 25;

if(num4 >= 10 && num4 <=20){
    console.log("El numero esta entre 10 y 20");
}else{
    console.log("El numero no esta entre 10 y 20");
}

console.log("----------------");


// Ejemplo 5
//Condicionales Compuestas

var color = "Rojo";

if(color === "rojo" || color === "negro" || color === "Rojo"){
    console.log("Excelente eleccion");
}else{
    console.log("No cambia de color")
}


console.log("----------------");

//Piedra Papel o Tijera

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

function resultado (usuario, cpu){
    if(usuario != cpu){
        if(usuario === op1 && cpu === op3){
            console.log("el usuario GANO con " + op1);
        }else if(usuario === op2 && cpu === op1){
            console.log("el usuario GANO con " + op2);
        }else if(usuario === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3);
        }else{
            console.log("La CPU Gano!!");
        }
    }else if(usuario === cpu){
        console.log("Empate!!");
    }
}
resultado(op2, op3);

console.log("----------------");

// Ciclos

console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");



//While
var i = 0;

while (i<200){
    console.log("Hola Amigo");
    i=i+1;
}

//For

for(i=0; i<10; i++){
    console.log("Este es un for")
}

// Ejemplo For

// La tarea es que nuestro loop salude a todos los estudiantes

var estudiantes = ['Jaime', 'Andrea', 'Cristian', 'Ariel',       'Israel', 'Alejandro'];

function saludarEstudiantes(estudiante){
    console.log(`Hola querid@ estudiante ${estudiante}`);
}

// For que se divide en 3 pasos
// 1. generar la variable a cero
// 2. variable mientras sea menor que el array del estudiante
// 3. i se va aumentar por un numero

for(var i=0; i<estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]); //imprimir el array estudiante
}

// Otra forma de trabajar el for, recorrer por elemento

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

