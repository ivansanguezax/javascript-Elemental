//Sintaxis de un Arreglo

var array = ["Ivan", 23, true, "Elemental"];

//Recorriendo un arreglo

for(var i=0; i<array.length; i++){
    console.log(array[i]);
}

//Reemplando elementos

array[0] = "Cristian";

console.log(array);

//Insertando nuevos elementos

var emojis = ["😀", "😊", "🤓"];
console.log(emojis);

emojis.push("🥳");
console.log(emojis);

emojis.push(23);
console.log(emojis);


//Eliminando elementos

emojis.splice(0,1);
console.log('Eliminando');
console.log(emojis);