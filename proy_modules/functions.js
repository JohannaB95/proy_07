//Se declara una variable constante llamada functions que se inicializa como un objeto vacío.
const functions = {};

//Se declara una función flecha de tipo constante llamada signo con un parámetro numero.
const signo = (numero) => {
    //Se usa un condicional if para crear una condición en la que se específica que numero debe ser mayor o igual a 0
    if (numero >= 0) {
        //Si se cumple la condición, se retornara un mensaje diciendo positivo
        return 'Positivo'
    } else {
        //Por el contrario, si la condición no se cumple, se retornara un mensaje diciendo negativo
        return 'negativo'
    }
};

//Se declara una función flecha de tipo constante llamada interfazSigno con un parámetro numero.
const interfazSigno = (numero) => {
    /*Se imprime en la consola una interfaz con un título que además muestra un mensaje en el que se dice si 
    determinado número es negativo o positivo*/
    console.log(`***********************************************`.blue);
    console.log(`*                `.blue + `FUNCIÓN SIGNO`.bgBlue + `                *`.blue);
    console.log(`***********************************************`.blue);
    console.log(`*         `.blue + `El número ${numero} es ` + " " + functions.signo(numero) + `          *`.blue);
    console.log(`***********************************************\n`.blue);
};

//Se declara una función flecha de tipo constante llamada encontroCaracter con un parámetro caracter.
const encontroCaracter = (caracter) => {
    //Se declara una variable constante llamada datos que se inicializa con un arreglo de strings
    const datos = ['A', 'B', 'C', 'D', 'E'];
    //Se usa un condicional if para crear una condición en la que se específica si en datos se incluye a caracter
    if (datos.includes(caracter)) {
        //Si la condición se cumple, se retornara un mensaje diciendo que si se encuentra en el arreglo
        return 'Se encuentra en el arreglo';
    } else {
        //Si el caracter no está, se retornara un mensaje que indica que el caracter no se encuentra en el arreglo
        return 'No se encuentra en el arreglo';
    }
};

//Se declara una función flecha de tipo constante llamada interfazEncontroCaracter con un parámetro caracter.
const interfazEncontroCaracter = (caracter) => {
    /*Se imprime en la consola una interfaz con un título que además muestra un mensaje en el que se dice si 
    determinado caracter se encuentra o no en un arreglo*/
    console.log(`*********************************************`.red);
    console.log(`*         `.red + `FUNCIÓN ENCONTRO CARACTER`.bgRed + `         *`.red);
    console.log(`*********************************************`.red);
    console.log(`*`.red + `El caracter ${caracter.toUpperCase()}` + " " + functions.encontroCaracter
        (caracter.toUpperCase()) + `*`.red);
    console.log(`*********************************************\n`.red);
};

//Se declara una función flecha de tipo constante llamada busquedaBebida con un parámetro bebida.
const busquedaBebida = (bebida) => {
    //Se usa un condicional switch que tiene como parámetro a bebida
    switch (bebida) {
        //El primer caso a evaluar es 'cerveza'
        case 'cerveza':
            //Si la bebida es cerveza, se retorna un mensaje que indica dirigirse a la barra
            return `Dirijase a la barra`;
            //Se usa break para salir del caso cerveza
            break;
        //El segundo caso a evaluar es 'vino'
        case 'vino':
            //Si la bebida es vino, se retorna un mensaje que indica dirigirse a la barra
            return `Dirijase a la barra`;
            //Se usa break para salir del caso vino
            break;
        //El tercer caso a evaluar es 'gaseosa'
        case 'gaseosa':
            //Si la bebida es gaseosa, se retorna un mensaje que indica dirigirse a la barra
            return `Dirijase a la barra`;
            //Se usa break para salir del caso gaseosa
            break;
        //El tercer caso a evaluar es 'agua'
        case 'agua':
            //Si la bebida es agua, se retorna un mensaje que indica dirigirse a la barra
            return `Dirijase a la barra`;
            //Se usa break para salir del caso agua
            break;
        //Si la bebida escogida no es ninguna de las anteriores, es una diferente
        default:
            //Se retorna un mensaje que indica dirigirse a la tienda
            return `Dirijase a la tienda`;
            //Se usa break para salir del switch
            break;

    }
};

//Se declara una función flecha de tipo constante llamada interfazBusquedaBebida con un parámetro bebida.
const interfazBusquedaBebida = (bebida) => {
    /*Se imprime en la consola una interfaz con un título que además muestra un mensaje en el que se dice 
    que si determinado caso se cumple, debe dirigirse a un lugar*/
    console.log(`******************************************`.yellow);
    console.log(`*        `.yellow + `FUNCIÓN BUSQUEDA BEBIDA`.bgYellow + `         *`.yellow);
    console.log(`******************************************`.yellow);
    console.log(`*      `.yellow + `${bebida}` + functions.busquedaBebida(bebida) + `      *`.yellow);
    console.log(`******************************************\n`.yellow);
};

//Se declara una función flecha de tipo constante llamada medioTransporte con un parámetro medio.
const medioTransporte = (medio) => {
    /*Se usa un condicional if para crear una condición en la que se específica que si medio es igual a avion o 
    medio es igual a flota*/
    if (medio == 'avion' || medio == "flota") {
        //Si la condición se cumple, se retornara un mensaje diciendo que recuerde tener dinero para el pasaje
        return `Recuerda tener dinero para el pasaje`;
     //Y si medio es igual a carro o medio es igual a bicicleta
    } else if (medio == "carro" || medio == "bicicleta") {
        //Se retornara un mensaje diciendo que recuerde llevar ropa apropiada
        return 'Recuerda llevar ropa apropiada';
    }
};

//Se declara una función flecha de tipo constante llamada interfazMedioTransporte con un parámetro medio.
const interfazMedioTransporte = (medio) => {
    /*Se imprime en la consola una interfaz con un título que además muestra un mensaje en el que se dice 
    que dependiendo del medio de transporte se debe llevar dinero o ropa cómoda*/
    console.log(`******************************************`.cyan);
    console.log(`*      `.cyan + `FUNCION MEDIO DE TRANSPORTE`.bgCyan + `       *`.cyan);
    console.log(`******************************************`.cyan);
    console.log(`*`.cyan + `${medio} ` + functions.medioTransporte(medio) + `*`.cyan);
    console.log(`******************************************\n`.cyan);
};

//Se declara una función flecha de tipo constante llamada facturaProducto con parámetros cantidad, precio, descuento.
const facturaProducto = (cantidad, precio, descuento) => {
    /*Se usa un condicional if para crear una condición en la que se específica que si cantidad es igual o menor 
    a 0 o precio es igual o menor a 0 o descuento es menor a 0 o igual o mayor a 100*/
    if (cantidad <= 0 || precio <= 0 || descuento < 0 || descuento >= 100) {
        //Se retornara un mensaje diciendo que son valores no válidos
        return 'No se puede realizar la operación'
    }

    //Se declara una variable llamada total que almacenara el resultado de la multiplicación de la cantidad x precio
    let total = cantidad * precio;
    /*Se declara una variable llamada descuentoAplicado en la que se almacenara el resultado del total del 
    descuento que se realizara al valor inicial*/
    let descuentoAplicado = (total * descuento) / 100;
    /*Se declara una variable llamada totalDescuento que almacenara el resultado de la operación de restar 
    del precio total el valor del descuento*/
    let totalDescuento = total - descuentoAplicado;
    //Se retorna el precio final de compra
    return totalDescuento;
};

/*Se declara una función flecha de tipo constante llamada interfazFacturaProducto con parámetros cantidad, 
precio, descuento, total.*/
const interfazFacturaProducto = (cantidad, precio, descuento, total) => {
    /*Se imprime en la consola una interfaz con un título que además muestra los valores de cada uno de los
    parámetros dados a la función*/
    console.log(`******************************************`.magenta);
    console.log(`*      `.magenta + `FUNCION FACTURA DE UN PRODUCTO`.bgMagenta + `    *`.magenta);
    console.log(`******************************************`.magenta);
    console.log(`*              `.magenta + `Cantidad: ${cantidad}` + `               *`.magenta);
    console.log(`*              `.magenta + `Precio: ${precio}` + `              *`.magenta);
    console.log(`*              `.magenta + `Descuento: ${descuento}` + `              *`.magenta);
    console.log(`*             `.magenta + `Total: ${total}` + `                *`.magenta);
    console.log(`******************************************\n`.magenta);
};

//Se declara una función flecha de tipo constante llamada bebidaComida con un parámetro menu.
const bebidaComida = (menu) => {
    //Se usa un condicional switch que tiene como parámetro a menu
    switch (menu) {
        //El primer caso a evaluar es 'pescado'
        case 'pescado':
            //Si se elige el pescado, se retorna un mensaje que indica que la bebida es vino blanco
            return `Vino blanco`;
            //Se usa break para salir del caso pescado
            break;
        //El primer caso a evaluar es 'verdura'
        case 'verdura':
            //Si se elige la verdura, se retorna un mensaje que indica que la bebida es agua
            return `Agua`;
            //Se usa break para salir del caso verdura
            break;
        //El primer caso a evaluar es 'carne'
        case 'carne':
            //Si se elige la carne, se retorna un mensaje que indica que la bebida es vino tinto
            return `Vino tinto`;
            //Se usa break para salir del caso carne
            break;
        //Si el menu escogido no es ninguno de los anteriores y es uno diferente
        default:
            //Se retorna un mensaje que indica que la bebida es agua
            return `Agua`;
            //Se usa break para salir del switch
            break;
    }
};

//Se declara una función flecha de tipo constante llamada interfazBebidaComida con un parámetro menu
const interfazBebidaComida = (menu) => {
    /*Se imprime en la consola una interfaz con un título que además muestra el menú elegido y la bebida que
    lo acompaña */
    console.log(`******************************************`.green);
    console.log(`*         `.green + `FUNCIÓN BEBIDA COMIDA`.bgGreen + `          *`.green);
    console.log(`******************************************`.green);
    console.log(`*         `.green + `${menu}` + "  " + functions.bebidaComida(menu) + `           *`.green);
    console.log(`******************************************\n`.green);
};

//Se declara una función flecha de tipo constante llamada salaJuegos con un parámetro pago.
const salaJuegos = (pago) => {
     //Se usa un condicional switch que tiene como parámetro a pago
     switch (pago) {
        //El primer caso a evaluar es 4000
        case 4000:
            //Si se pagan 4000, se retorna un mensaje que indica que puede acceder a todos los juegos
            return "Accede a todos los juegos: consolas, juegos 3D, juegos 2D y realidad Virtual";
            //Se usa break para salir del caso pago == 4000
            break;
        //El primer caso a evaluar es 3000
        case 3000:
            //Si se pagan 3000, se retorna un mensaje que indica que puede acceder a 3 juegos
            return "Accede a los siguientes juegos: juegos 2D, juegos 3D y consolas";
            //Se usa break para salir del caso pago == 3000
            break;
        //El primer caso a evaluar es 2000
        case 2000:
            //Si se pagan 2000, se retorna un mensaje que indica que puede acceder a 2 juegos
            return "Accede a consolas y juegos 2D";
            //Se usa break para salir del caso 2000
            break;
        case 1000:
            //Si se elige pagar 1000, se retorna un mensaje que indica que puede acceder a un juego
            return "Accede solo a las consolas";
            //Se usa break para salir del caso 1000
            break;
        //Si el dinero pagado no es suficiente o es una cantidad diferente a la de los casos anteriores
        default:
            //Se retorna un mensaje que indica que se debe pagar más para poder acceder a los juegos
            return "Debe ingresar más dinero para acceder a los juegos.";
            //Se usa break para salir del switch
            break;
    }
};

//Se declara una función flecha de tipo constante llamada interfazSalaJuegos con un parámetro pago
const interfazSalaJuegos = (pago) => {
    /*Se imprime en la consola una interfaz con un título que además muestra cuanto se pago y a cuales juegos
    se puede acceder */
    console.log(`************************************************************************************`.gray);
    console.log(`*                              `.gray + `FUNCIÓN SALA DE JUEGOS` + `                              *`.gray);
    console.log(`************************************************************************************`.gray);
    console.log(`*`.gray + `${pago}` + "  " + functions.salaJuegos(pago) + `*`.gray);
    console.log(`************************************************************************************\n`.gray);
};

//Se declara una función flecha de tipo constante llamada contarNumero con un parámetro numero1.
const contarNumero = (numero1) => {
    //Se declara una variable llamada contador y que se inicializa en 0.
    let contador = 0;

    //Se usa while con una condición que indica que el bucle se ejecutara mientras contador sea menor o igual a numero1
    while (contador <= numero1) {
        //Contador aumentara en cada iteración 1
        contador++;
        //Se imprimen los números del contador
        console.log(`*                    `.blue + `${contador}` + `                  *`.blue);
    }
    //Se retorna un string vacío
    return ' ';
};

//Se declara una función flecha de tipo constante llamada interfazContarNumero con un parámetro numero1
const interfazContarNumero = (numero1) => {
    /*Se imprime en la consola una interfaz con un título que además muestra los números hasta un número
    determinado*/
    console.log(`******************************************`.blue);
    console.log(`*        `.blue + `FUNCIÓN CONTAR NÚMEROS`.bgBlue + `          *`.blue);
    console.log(`******************************************`.blue);
    console.log(`*    `.blue + `Cantidad de números hasta el ${numero1}` + functions.contarNumero(numero1)
        + `     *`.blue);
    console.log(`******************************************\n`.blue);
};

//Se declara una función flecha de tipo constante llamada numerosPares con un parámetro numero2 .
const numerosPares = (numero2) => {
    /*Se utiliza un ciclo for en el que se declara una variable contador que se inicializa en 0, que tiene como 
    condición que se ejecutara mientras contador sea menor o igual a 0 y el contador irá aumentando de a 1 en
    cada iteración*/
    for (let contador = 0; contador <= numero2; contador++) {
        /*Se verifica si el valor actual del contador es par utilizando el operador % (módulo). Si contador % 2 es 
        igual a 0, entonces el número es par*/
        if (contador % 2 === 0)
            //Se imprime en la consola un mensaje con los números pares
            console.log(`*                    `.red + `${contador}` + `                  *`.red);
    }
    //Se retorna un string vacío
    return ' ';
};

//Se declara una función flecha de tipo constante llamada interfazNumerosPares con un parámetro numero2
const interfazNumerosPares = (numero2) => {
    /*Se imprime en la consola una interfaz con un título que además muestra los números pares hasta un 
    número determinado*/
    console.log(`******************************************`.red);
    console.log(`*         `.red + `FUNCIÓN NÚMEROS PARES`.bgRed + `          *`.red);
    console.log(`******************************************`.red);
    console.log(`*`.red + `  Cantidad de números pares hasta el ${numero2}` + functions.numerosPares(numero2) + `*`.red);
    console.log(`******************************************\n`.red);
};

//Se declara una función flecha de tipo constante llamada tablaMultiplicar con un parámetro numero3.
const tablaMultiplicar = (numero3) => {
    //Se declara una variable llamada multiplicador que se inicializa en 1.
    let multiplicador = 1;

     /*Se utiliza un ciclo for en el que se llama a la varibale multiplicador que se inicializa en 1, que tiene como 
    condición que se ejecutara mientras multiplicador sea menor o igual a 10 y que el multiplicador irá 
    aumentando de a 1 en cada iteración*/
    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
        /*Se declara una variable llamada resultado que almacena el resultado de la multiplicación entre numero3
        y multiplicador*/
        let resultado = numero3 * multiplicador;
        //Se imprime en la consola el número seleccionado, el multiplicador y el resultado de la multiplicación
        console.log(`*             `.yellow + `${numero3} X ${multiplicador} = ${resultado}` + `           *`.yellow);
    }
    //Se retorna un string vacio
    return ' ';
};

//Se declara una función flecha de tipo constante llamada interfazTablaMultiplicar con un parámetro numero3
const interfazTablaMultiplicar = (numero3) => {
    /*Se imprime en la consola una interfaz con un título que además muestra un mensaje que indica de que
    número es la tabla de multiplicar que se imprimió*/
    console.log(`*************************************`.yellow);
    console.log(`*    `.yellow + `FUNCIÓN TABLA DE MULTIPLICAR`.bgYellow + `   *`.yellow);
    console.log(`*************************************`.yellow);
    console.log(`*`.yellow + `Tabla de multiplicar del número ${numero3}` + functions.tablaMultiplicar(numero3) + `*`.yellow);
    console.log(`*************************************\n`.yellow);
};

//Se declara una función flecha de tipo constante llamada repetirCaracter con parámetros caracter1 y numero4
const repetirCaracter = (caracter1, numero4) => {
    //Se declara una variable llamada caracterRepetido que se inicializa con un string vacio.
    let caracterRepetido = ' ';

    /*Se utiliza un ciclo for en el que se declara una variable llamada x que se inicializa en 0, que tiene como 
    condición que se ejecutara mientras x sea menor a numero4 y que x irá aumentando de a 1 en cada iteración*/
    for (let x = 0; x < numero4; x++) {
        //En cada iteración, el carácter (caracter1) se agrega a la variable caracterRepetido.
        caracterRepetido += caracter1;
    }
    //Se retorna el caracter repetido
    return caracterRepetido;
};

//Se declara una función flecha de tipo constante llamada interfazRepetirCaracter con parámetros caracter1 y numero4
const interfazRepetirCaracter = (caracter1, numero4) => {
    /*Se imprime en la consola una interfaz con un título que además muestra un mensaje que cual es el caracter 
    que se repetira y el número de veces que lo hará*/
    console.log(`****************************************************************`.cyan);
    console.log(`*                   `.cyan + `FUNCIÓN REPETIR CARACTER`.bgCyan + `                   *`.cyan);
    console.log(`****************************************************************`.cyan);
    console.log(`*`.cyan + `El caracter es ${caracter1} y el número de veces que se repite es ${numero4} :` +
        functions.repetirCaracter(caracter1, numero4) + `*`.cyan);
    console.log(`****************************************************************\n`.cyan);
};

//Se declara una función flecha de tipo constante llamada contarBase con parámetro base
const contarBase = (base) => {
    //Se declara una variable constante llamada numeros con un arreglo vacio
    const numeros = [];

    /*Se utiliza un ciclo for en el que se declara una variable llamada i que se inicializa en 0, que tiene como 
    condición que se ejecutara mientras i sea menor a base y que i irá aumentando de a 1 en cada iteración.
    Este bucle controla la posición del primer dígito en los números generados.*/
    for (let i = 0; i < base; i++) {
        /*Se utiliza un ciclo for en el que se declara una variable llamada j que se inicializa en 0, que tiene como 
        condición que se ejecutara mientras j sea menor a base y que j irá aumentando de a 1 en cada iteración.
        Este bucle controla la posición del segundo dígito en los números generados.*/
        for (let j = 0; j < base; j++) {

            /*Se utiliza i.toString(base) y j.toString(base) para convertir los valores de i y j a cadenas en la base 
            dada. Luego, se concatenan para formar un nuevo número en la base especificada, y se almacena el 
            resultado en la variable constante llamada numero*/
            const numero = i.toString(base) + j.toString(base);
            //Se utiliza .push para añadir al arreglo numeros cada número generado con la base dada
            numeros.push(numero);
        }
    }
    //Se retorna el arreglo de numeros separados con un coma
    return numeros.join(', ');
};

//Se declara una función flecha de tipo constante llamada interfazContarBase con un parámetro base
const interfazContarBase = (base) => {
    /*Se imprime en la consola una interfaz con un título que además muestra todos los números resultantes 
    en la base solicitada*/
    console.log(`******************************************************************`.magenta);
    console.log(`*                       `.magenta + `FUNCIÓN CONTAR BASE`.bgMagenta + `                      *`.magenta);
    console.log(`******************************************************************`.magenta);
    //Se llama a la función contarBase con el parámetro base para obtener un conjunto de números en la base especificada.
    const numerosBase = contarBase(base);
    //Se utiliza typeof para verificar el tipo de la respuesta devuelta por la función contarBase(base).
    if (typeof numerosBase === 'string') {
        //Si la respuesta es una cadena, se imprime esa cadena
        console.log(`*`.magenta + ` ${numerosBase}` + ` *`.magenta);
    } else {
        //Si la respuesta es un array, se imprime el array unido por comas
        console.log(`*`.magenta + ` ${numerosBase.join(', ')}` + ` *`.magenta);
    }
    console.log(`******************************************************************\n`.magenta);
};

//Se declara una función flecha de tipo constante llamada inicioSesion con parámetro clave
const inicioSesion = (clave) => {
    //Se declara una variable llamada contraseñas que se inicializa con un arreglo de tres strings
    let contrasenias = ['keyword1', 'keyword2', 'keyword3'];
    //Se declara una variable llamada intento que se inicializa en 0.
    let intento = 0

    //Se utiliza un bucle for...of para iterar sobre cada elemento (claves) en el array clave.
    for (const claves of clave) {
        //Se incrementa el contador de intentos en 1.
        intento++;
        //Se utiliza includes para verificar si la contraseña actual (claves) está incluida en el array de contraseñas (contraseñas).
        if (contrasenias.includes(claves)) {
            //Si la contraseña es correcta, se imprime un mensaje de acceso permitido
            console.log(`*`.green + `La contraseña es correcta, acceso permitido.` + `*`.green);
            //Se retorna una cadena vacía
            return "";
        } else {
            //Si la contraseña no es correcta, se imprime un mensaje de intento fallido junto con el número de intento
            console.log(`*`.green + `La contraseña no es correcta, intento ${intento} de 3` + `*`.green);
        }
    }
    //Si se agotan todos los intentos y ninguna contraseña es correcta, se imprime un mensaje de alerta intruso
    console.log(`*              `.green + "¡Alerta intruso!" + `             *`.green);
    //Se retorna una cadena vacía indicando que la función ha terminado su ejecución
    return "";
}

//Se declara una función flecha de tipo constante llamada interfazInicioSesion con un parámetro clave
const interfazInicioSesion = (clave) => {

    /*Se imprime en la consola una interfaz con un título que muestra diferentes mensajes dependiendo de la 
    contraseña que se haya introducido y el número de intento*/
    console.log(`**********************************************`.green);
    console.log(`*          `.green + `FUNCIÓN INICIO DE SESIÓN`.bgGreen + `          *`.green);
    console.log(`**********************************************`.green);
    console.log(`*          `.green + `${clave}` + "  " + functions.inicioSesion(clave) + `         *`.green);
    console.log(`**********************************************\n`.green);
};

//Se declara una función flecha de tipo constante llamada minimoMaximo con parámetro numeros
const minimoMaximo = (numeros) => {

    /*Se declara una variable llamada minimo que se inicializa con el primer elemento del array numeros. Esto 
    proporciona un valor inicial que luego se comparará con los demás elementos del array para determinar el 
    valor mínimo.*/
    let minimo = numeros[0]
    /*Se declara una variable llamada maximo que se inicializa con el primer elemento del array numeros. Esto 
    proporciona un valor inicial que luego se comparará con los demás elementos del array para determinar el 
    valor máximo.*/
    let maximo = numeros[0]
    /*Se declara una variable llamada maximo que se inicializa con el primer elemento del array numeros. Esto 
    establece un valor inicial para la suma total que se acumulará a medida que se recorren los elementos del array.*/
    let suma = numeros[0];

    /*Se utiliza un ciclo for en el que se declara una variable llamada i que se inicializa en 0, que tiene como 
    condición se ejecutará mientras i sea menor a la longitud del arreglo numeros y que i irá aumentando 
    de a 1 en cada iteración.*/
    for (let i = 0; i < numeros.length; i++) {
        //En cada iteración del bucle, se compara el valor actual del arreglo (numeros[i]) con el valor mínimo actual.
        if (minimo > numeros[i]) {
            // Si el valor actual es menor que el valor mínimo actual, se actualiza el valor mínimo.
            minimo = numeros[i];
        }
        //En cada iteración del bucle, se compara el valor actual del arreglo (numeros[i]) con el valor máximo actual.
        if (maximo < numeros[i]) {
            //Si el valor actual es mayor que el valor máximo actual, se actualiza el valor máximo.
            maximo = numeros[i];
        }
        //Se acumula la suma de todos los elementos del arreglo en la variable suma.
        suma += numeros[i];
    }
    /*Se declara una variable constante llamada promedio que almacena el resultado de calcular el promedio 
    dividiendo la suma entre la longitud del arreglo.*/
    const promedio = suma / numeros.length;

    //Se retorna el número mínimo, el número máximo y el promedio.
    return (`*       `.gray + `El número mínimo es: ${minimo}` + `     *\n`.gray + `*         `.gray + `El número máximo es: ${maximo}`
        + `        *\n`.gray + `*   `.gray + `El promedio es: ${promedio}` + `    *`.gray);
};

//Se declara una función flecha de tipo constante llamada interfazMinimoMaximo con un parámetro numeros
const interfazMinimoMaximo = (numeros) => {
    /*Se imprime en la consola una interfaz con un título que muestra el arreglo de números del cual se sacara 
    el número máximo y mínimo*/
    console.log(`*******************************************`.gray);
    console.log(`*    `.gray + `FUNCIÓN MÍNIMO, MÁXIMO Y PROMEDIO` + `    *`.gray);
    console.log(`*******************************************`.gray);
    console.log(`*`.gray + `El arreglo de números es: ${numeros}` + `*  \n `.gray + "  " + functions.minimoMaximo(numeros));
    console.log(`*******************************************\n`.gray);
};

//Se declara una función flecha de tipo constante llamada numerosPares2 con parámetro numeros1
const numerosPares2 = (numeros1) => {
    //Se declara una variable constante llamada pares que se inicializa con arreglo vacio
    const pares = [];
    //Se declara una variable llamada c que se inicializa en 0
    let c = 0;

    /*Se usa un bucle while y se le da una condición que indica que el bucle se ejecutara mientras c sea menor 
    que la longitud del arreglo numeros1*/
    while (c < numeros1.length) {
        //Se verifica si el elemento en la posición c es un número par usando la condición numeros1[c] % 2 === 0
        if (numeros1[c] % 2 === 0) {
            //Si el número es par, se agrega a un nuevo arreglo llamado pares.
            pares.push(numeros1[c]);
        }
        //La variable c se ira aumentando en 1
        c++;
    }
    //Se retorna un objeto con: 
    return {
        //La cantidad total de números pares encontrados en el arreglo. 
        cantidad: pares.length,
        //Un arreglo que contiene todos los números pares encontrados en el arreglo original.
        numerosPares: pares
    };
};

//Se declara una función flecha de tipo constante llamada interfazNumerosPares2 con un parámetro numeros
const interfazNumerosPares2 = (numeros1) => {
    /*Se imprime en la consola una interfaz con un título que muestra el arreglo de números del cual se sacaran 
    los números pares, la cantidad de números pares totales en el arreglo y todos los números pares encontrados*/
    console.log(`************************************************`.blue);
    console.log(`*  `.blue + `FUNCIÓN CONTAR NÚMEROS PARES DE UN ARREGLO`.bgBlue + `  *`.blue);
    console.log(`************************************************`.blue);
    console.log(`*`.blue + `El arreglo de números es: ${numeros1}` + `*\n`.blue + `*         `.blue +
        `Cantidad de números pares: ${numerosPares2(numeros1).cantidad}` + `         *`.blue);
    console.log(`*   `.blue + `Los números pares son: ${numerosPares2(numeros1).numerosPares.join(', ')}` + `   *`.blue);
    console.log(`************************************************\n`.blue);
};

//Se exportan cada una de las funciones bajo el objeto functions al módulo que las solicite
functions.signo = signo;
functions.interfazSigno = interfazSigno;
functions.encontroCaracter = encontroCaracter;
functions.interfazEncontroCaracter = interfazEncontroCaracter;
functions.busquedaBebida = busquedaBebida;
functions.interfazBusquedaBebida = interfazBusquedaBebida;
functions.medioTransporte = medioTransporte;
functions.interfazMedioTransporte = interfazMedioTransporte;
functions.facturaProducto = facturaProducto;
functions.interfazFacturaProducto = interfazFacturaProducto;
functions.bebidaComida = bebidaComida;
functions.interfazBebidaComida = interfazBebidaComida;
functions.salaJuegos = salaJuegos;
functions.interfazSalaJuegos = interfazSalaJuegos;
functions.contarNumero = contarNumero;
functions.interfazContarNumero = interfazContarNumero;
functions.numerosPares = numerosPares;
functions.interfazNumerosPares = interfazNumerosPares;
functions.tablaMultiplicar = tablaMultiplicar;
functions.interfazTablaMultiplicar = interfazTablaMultiplicar;
functions.repetirCaracter = repetirCaracter;
functions.interfazRepetirCaracter = interfazRepetirCaracter;
functions.contarBase = contarBase;
functions.interfazContarBase = interfazContarBase;
functions.inicioSesion = inicioSesion;
functions.interfazInicioSesion = interfazInicioSesion;
functions.minimoMaximo = minimoMaximo;
functions.interfazMinimoMaximo = interfazMinimoMaximo;
functions.numerosPares2 = numerosPares2;
functions.interfazNumerosPares2 = interfazNumerosPares2;

/*Todas las funciones mencionadas se exportan bajo el objeto functions. Esto significa que, cuando se importa
este módulo en otro archivo, se puede acceder a estas funciones a través de functions.nombreDeLaFuncion. */
module.exports = functions;