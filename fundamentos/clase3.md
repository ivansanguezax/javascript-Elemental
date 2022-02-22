# Estructuras de seleccion

## if-else

- Esta estructura de control es igual a java, c++, c#, dart.
- Las sintaxis basico para utilizar if-else:

```javascript
if (condicion) {
    //Codigo al cumplir condicion
} else {
    //Codigo al No cumplirse
} 
```

- If-else en escalera

```javascript
if (condicion1) {
    // codigo
} else if (condicion2) {
    //codigo
} else if (condicion3) {
    //codigo
} else {
    // codigo
}
```

### Con esta estructura se pueden utilizar los siguientes operadores

- Operadores de igualdad y relacionales
    - `==` igualdad
    - `!=` No igual o diferente
    - `<` menor que
    - `>` mayor que
    - `<=` menor igual que
    - `>=` mayor igual que

- Operadores Logicos
    - `!expr` Realiza una negación en la expresión
    - `&&` AND
    - `||` OR

## Switch/Case

- **switch/Case** esta una estructura de control para multiplos desiciones es un replazo al `if-else en cascada`.
- Puedes utilizar `int` y `String` para evaluar la condicion en `case`.
- La keyword `case` no puede terminar vacia, debe finalizar con `break` o puede tambien terminar con `continue`, `throw`
  o `return`.
- Si no encuentra un valor en el `switch` se utiliza el keyword `default`.
- Esta estructura de control es igual a java, c++, c#, dart.
- La sintaxis basica seria:

```javascript
switch (valor) {
    case expresion1: {
        // acciones; 
    }
        break;
    case expresion2: {
        //acciones; 
    }
        break;

    default: {
        //acciones si no aplican las demás;  
    }
        break;
} 
```


# Estructuras repetitivas

## for/for...in/for...of

- Esta estructura de control es igual o parecida a java, c++, c#, dart.
- **for** Se utiliza cuando se conoce el tamaño de la lista o arreglo.
- **for...in** Se utiliza para recorrer un objecto con sus propiedades
- **for...of** Se utiliza para recorrer listas mas facilmente y no se necesita saber el tamaño.
- **foreach** solo se puede utilizar en las listas
- La estructura del ciclo **for** es:

```javascript
for (inicializador, condicion, incrementar / decrementar) {
    //codigo
}
```

- Estructura `for...in`

```javascript
let developer = {
    firstName: 'Sergio',
    lastName: 'Ochoa',
    fullName: function () {
        return `${firstName} + ${lastName}`;
    }
};
for (const key in developer) {
    console.log(developer[key]);
}
```

- Estructura `for...of`
  - Para interar una listas
  - Para interar una cadena

```javascript
var lista = ['a', 'b', 'c', 'd'];
for (const nombreVariable of lista) {
    console.log(nombreVariable);
}
```



## while/do-while

- Se utiliza para hacer repeticiones con una condicion.
- Tener cuidado que el ciclo infinitamente.
- **while** evalua la condición sino se cumple no ejecuta el código
- **do while** ejecuta el codigo primero y luego evalúa la condición.
- La estructura del ciclo **while** es:

```dart
while(condicion) {
//codigo
}
```

- La estructura del ciclo **do while** es:

```dart
do {

} while
(condicion);
```



## Declaracion de break y continue
- break: ruptura en un bucle
- continue: continue le permite volver a la parte superior del bucle.

## Declaración de etiquetas
- Estas etiquetas no es recomendable usuario 
- Se lo indica para que sepa como funciona y poder asi cambiar su implementación a otro tipo de declaración.