//Se carga la libreria colors para permitir el uso de estilos de colores en la terminal
require('colors');

/*Se declara una constante llamada functions que almacena y carga el código que contiene el archivo 
functions.js en la carpeta proy_modules*/
const functions = require('./proy_modules/functions.js')

//Se declara una función flecha constante llamada main que es asincrónica 
const main = async ( ) => {

   //Se limpia la consola
    console.clear( );

    //Se declara una variable constante llamada numero que se inicializa con un valor numérico
    const numero = -15;
    //Se llama a la función interfazSigno que se encuentra en el objeto functions con un parámetro numero
    functions.interfazSigno(numero);

    //Se declara una variable constante llamada caracter que se inicializa con un valor de un string
    const caracter = 'X';
    //Se llama a la función interfazEncontroCaracter que se encuentra en el objeto functions con un parámetro caracter
    functions.interfazEncontroCaracter(caracter);

    //Se declara una variable constante llamada bebida que se inicializa con un valor de un string
    const bebida = 'Cerveza ';
    //Se llama a la función interfazBusquedaBebida que se encuentra en el objeto functions con un parámetro bebida
    functions.interfazBusquedaBebida(bebida);

    //Se declara una variable constante llamada medio que se inicializa con un valor de un string
    const medio = 'bicicleta';
    //Se llama a la función interfazMedioTransporte que se encuentra en el objeto functions con un parámetro medio
    functions.interfazMedioTransporte(medio);

    //Se declara una variable constante llamada cantidad que se inicializa con un valor numérico
    const cantidad = 2;
    //Se declara una variable constante llamada precio que se inicializa con un valor numérico
    const precio = 2500;
    //Se declara una variable constante llamada descuento que se inicializa con un valor numérico
    const descuento = 10;
    /*Se declara una variable constante llamada total que estará llamando a la función facturaProducto que 
    tiene como parámetros a cantidad, precio y descuento y estará almacenando resultado de la función */
    const total = functions.facturaProducto(cantidad, precio, descuento);
    //Se llama a la función interfazFacturaProducto que se encuentra en el objeto functions
    functions.interfazFacturaProducto(cantidad, precio, descuento, total);

    //Se declara una variable constante llamada menu que se inicializa con un valor de un string
    const menu = 'pescado';
    //Se llama a la función interfazBebidaComida que se encuentra en el objeto functions con un parámetro menu
    functions.interfazBebidaComida(menu);

    //Se declara una variable constante llamada pago que se inicializa con un valor numérico
    const pago = 4000;
    //Se llama a la función interfazSalaJuegos que se encuentra en el objeto functions con un parámetro pago
    functions.interfazSalaJuegos(pago);

    //Se declara una variable constante llamada numero1 que se inicializa con un valor numérico
    const numero1 =7;
    //Se llama a la función interfazContarNumero que se encuentra en el objeto functions con un parámetro numero1
    functions.interfazContarNumero(numero1);

    //Se declara una variable constante llamada numero2 que se inicializa con un valor numérico
    const numero2 = 10;
    //Se llama a la función interfazNumerosPares que se encuentra en el objeto functions con un parámetro numero2
    functions.interfazNumerosPares(numero2);

    //Se declara una variable constante llamada numero3 que se inicializa con un valor numérico
    const numero3 = 8;
    //Se llama a la función interfazTablaMultiplicar que se encuentra en el objeto functions con un parámetro numero3
    functions.interfazTablaMultiplicar(numero3);

    //Se declara una variable constante llamada caracter1 que se inicializa con un valor de un string
    const caracter1 = 'f';
    //Se declara una variable constante llamada numero4 que se inicializa con un valor numérico
    const numero4 = 3;
    //Se llama a la función interfazRepetirCaracte que se encuentra en el objeto functions con dos parámetros caracter1 y numero4
    functions.interfazRepetirCaracter(caracter1, numero4);

    //Se declara una variable constante llamada base que se inicializa con un valor numérico
    const base = 4;
    //Se llama a la función interfazContarBase que se encuentra en el objeto functions con un parámetro base
    functions.interfazContarBase(base);

    //Se declara una variable constante llamada clave que se inicializa con un arreglo de strings
    const clave = ['keywrd1','keywor6', 'keyword3'];
    //Se llama a la función interfazInicioSesion que se encuentra en el objeto functions con un parámetro clave
    functions.interfazInicioSesion(clave);

    //Se declara una variable constante llamada numeros que se inicializa con un arreglo de números
    const numeros = [5, 8, 6, 22, 33, 270];
    //Se llama a la función interfazMinimoMaximo que se encuentra en el objeto functions con un parámetro numeros
    functions.interfazMinimoMaximo(numeros);

    //Se declara una variable constante llamada numeros1 que se inicializa con un arreglo de números
    const numeros1 = [22, 33, 5, 8, 1, 14, 86, 36];
    //Se llama a la función interfazNumerosPares2 que se encuentra en el objeto functions con un parámetro llamado medio
    functions.interfazNumerosPares2(numeros1)

};

//Se llama a la función main
main();