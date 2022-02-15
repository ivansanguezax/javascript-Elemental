# Javascript
## Caracteristicas
- Lenguaje interpretado
- Orientado a objetos
- Debilmente tipado
```javascript
4+"7"; // 47
4*"7"; // 28
2+true; // 3
false-3; // -3
```
- **Dinamico** porque ejecuta en tiempo de ejecución.
- Motor de Javascript V8

## Backwards & Forwards
- **Forwards** ser compatible con versiones futuras significa que incluir alguna feature al lenguaje. 
En un programa no causaria que se rompa si se ejecuta en un motor JS anterior. JS no es compatible con versiones futuras.
- **Js es Backforwards compatible** La compatibilidad con versiones anteriores significa que cuando se acepta como JS valido, 
no habra un cambio futuro que haga que el codigo deje de funcionar.
**Nota** para poder utilizar las nuevas funcionalidades se utiliza compiladores como Babel.

## Porque JavaScript
- La belleza de javascript es que puedes construir cualquier cosa con el.
- WebAssembly: Para crear productos web.
- Desarrollo web
    - Angular
    - React
    - Vue
    - litelement - Polymer
- Desarrollo de apps
    - Ionic
    - React Native
    - NativeScript
    - Quasar
- Desarrollo de apps para Desktop
    - Electron
- Desarrollo en el Backend/ IOT(Internet of Things)
    - Nodejs

## Componentes principales
- **Data** que guardamos en memoria
- **Tareas** (funciones) que haremos con esta data

## JavaScrip y Java
- Java y Javascript son dos lenguajes de programación diferentes.
- Ambos tienes sus propias ventajas y desventajas.

## Quines usan Javascript
- JavaScript es utilizado por Google, Facebook, Microsoft, Uber y cualquier otra compañia que se te ocurra.

# Conceptos basicos

## Valores y Tipos de datos
### Valores
- Valores primitivos
    - Valor tipo numero
        - 40
        - 4.5
    - Valor tipo cadena
        - "Sergio Ochoa"
    - Valor tipo booleano
        - true
        - false    
    - Valores vacios(hay que evitarlo)
        - null
        - undefined
- Valores no primitivos o tipo Objeto
    - Valor tipo array
        - [1,2,3]
    - Valor tipo objeto
        - { firstName: "Sergio Antonio" }
```javascript
// Utilizar en consola
typeof 40
"number"
typeof "Sergio Ochoa"
"string"
typeof true
"boolean"
typeof null
"object"
typeof undefined
"undefined"
typeof [1,2,3]
"object"
typeof {name: "Sergio"}
"object"
```
### Tipos de  datos
- Tipo de datos primitivos       
    - number
    - string
    - boolean
- Tipo de datos Objecto
    - Array []
      - Es una estructura de datos 
      - Es un objeto de tipo lista de alto nivel
      - Los arrays son objetos de tipo lista cuyo prototipo
        tiene metodos para realizar operaciones de recorrido
        y mutación
    - Object {}
        - Un objeto es una coleccion de propiedades(Propiedad es una asociación
          de clave y valor)
        - JavaScript esta diseñado en un paradigma de Objetos

## Variables
- Para crear variables en javascript se utiliza el formato CamelCase.
- Variable: Espacios en memoria para almacenar un valor
- Las variables tienen que tener nombre significativos
- Una variable no puedo comenzar por numeros
- Una variable no puedo contener espacios y tampoco simbolos especiales
- No deben ser keywords(palabras reservadas)
- keywords para declarar variables
    - `var`
    - `let`


# Operadores
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Operadores Aritmeticos
- En que orden se evaluan las matematicas operaciones complejas
    1. Parentesis
    2. Exponenetes
    3. Multiplicacion/Division
    4. Adición/Sustracción
- Una forma facil de recordar este orden es usando el acronimo PEMDAS
    - Parentesis
    - Exponentes
    - Multiplicación
    - División
    - Adición
    - Sustracción
- Suma `+`
- Resta `-`
- Multiplicación `*`
- División `/`
- Modulo `%` es el restante de una división
- Potencia `**` calcula la potencia de un numero

## Operadores de comparación
- `==` igual, compara el valor
- `!=` No igual o diferente, compara el valor
- `===` Igual estricto, compara el tipo y el valor
- `!==` No igual estricto, compara el tipo y el valor
- `<` menor que
- `>` mayor que
- `<=` menor o igual que
- `>=` mayor o igual que

## Operadores de Asignación
- Un operador de asignación asigna un valor a su operando izquierdo en funcion de su valor de su operando derecho.
```javascript
// Asignación
var x = y;

// Asignacion de Suma
var x += y; 	// short
var x = x + y; // full

// Asignacion de resta
var x -= y; 	//short
var x = x - y; // full

// Asignación de multiplicación
var x *= y; // short
var	x = x * y; // full

// Asignación de División
var x /= y; // Short 	
var x = x / y; // full

// Asignación de residuo
var x %= y; // short
var	x = x % y; // full

// Asignación de exponenciación
var x **= y; // short
var	x = x ** y; // full

// Asignación a la izquierda
var x <<= y;
var x = x << y;

// Asignación a la derecha
var x >>= y; 	
var x = x >> y;

// Asignación de desplazamiento a la derecha sin firmar
var x >>>= y;
var	x = x >>> y;

// Asignación AND a nivel de bit
var x &= y;
var x = x & y;

// Asignación XOR a nivel de bit
var x ^= y ;
var x = x ^ y;

// Asignación OR a nivel de bit
var x |= y;
var x = x | y;
```


## Operadores Logicos
- `!expresion` Realiza una negación en la expresión
- `&&` AND
- `||` OR

## Operadores de incremento y decremento
- `++i` Pre incremento
- `i++` Post incremento
- `--i` Pre decremento
- `i--` Post decremento


## Operador Ternario
- El operador tenerario si lo utilizo en java, php, dart y podra utilizarlo en javascript de la misma forma.
- `condition ? (statement if true) : (statement if false);`


## 'use strict'
- Es ingnorado por navegadores antiguos porque esta entre comillas simples y es manejado como una expresion.
- Forzar que todas la variables sean declaradas, antes de que se usen.
- Las variables mas escritas son creadas en el scope global sino no se usa `use strict`
- Usar **use strict** es una buena practica en JavaScript.
- No puedes crear una variable con palabras reservadas.
- No puedes eliminar una variable con el keyword `delete`
- No puedes elminar una funcion con el keyword `delete`

