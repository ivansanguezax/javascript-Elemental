function perimetroCuadrado(lado){
    return lado*4;
}

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

//Interactuando con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("Tu perimetro Cuadrado es: " + perimetro);
}


function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("inputTriangulo1");
    const valueT1 = Number(lado1.value);

    const lado2 = document.getElementById("inputTriangulo2");
    const valueT2 = Number(lado2.value);

    const lado3 = document.getElementById("inputTriangulo3");
    const valueT3 = Number(lado3.value);

    const perimetroT = perimetroTriangulo(valueT1, valueT2, valueT3);
    alert("El perimetro del triangulo es: " + perimetroT);
}