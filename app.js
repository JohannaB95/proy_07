require('colors');

const functions = require('./proy_modules/functions.js')

const main = async ( ) => {

    console.clear( );

    const numero = -15;
    functions.interfazSigno(numero);

    const caracter = 'X';
    functions.interfazEncontroCaracter(caracter);

   const bebida = 'Cerveza ';
    functions.interfazBusquedaBebida(bebida);

    const medio = 'bicicleta'
    functions.interfazMedioTransporte(medio);

    const cantidad = 1;
    const precio = 500;
    const descuento = 5;
    const total = functions.facturaProducto(cantidad, precio, descuento);
    functions.interfazFacturaProducto(cantidad, precio, descuento, total);

    const menu = 'pescado';
    functions.interfazBebidaComida(menu);

    const pago = 4000;
    functions.interfazSalaJuegos(pago);

    const numero1 =7;
    functions.interfazContarNumero(numero1);

    const numero2 = 10;
    functions.interfazNumerosPares(numero2);

    const numero3 = 8;
    functions.interfazTablaMultiplicar(numero3);

    const caracter1 = 'f';
    const numero4 = 3;
    functions.interfazRepetirCaracter(caracter1, numero4);

    const base = 20;
    functions.interfazContarBase(base);

    const clave = ['keywrd1','keywor6', 'keyword3'];
    functions.interfazInicioSesion(clave);

    const numeros = [1,2,5,250,62,];
    functions.interfazMinimoMaximo(numeros);

    const numeros1 = [2, 5, 4, 8, 7, 6];
    functions.interfazNumerosPares2(numeros1)

};

main ( );