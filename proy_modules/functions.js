const functions = { };

const signo = (numero) => {
    if (numero >= 0) {
        return 'Positivo'
    } else {
        return 'negativo'
    }
};

const interfazSigno = (numero) => {
    console.log(`***********************************************`.blue);
    console.log(`*                ` .blue    +    `FUNCIÓN SIGNO` .bgBlue         +  `                *`.blue);
    console.log(`***********************************************`.blue);
    console.log(`*         `.blue   +  `El número ${numero} es ` + " " + functions.signo(numero)     +  `          *`.blue);
    console.log(`***********************************************\n`.blue);
};

const encontroCaracter = (caracter) => {
    const datos = ['A', 'B', 'C', 'D', 'E'];
    if (datos.includes(caracter)) {
        return 'Se encuentra en el arreglo';
    }else {
        return 'No se encuentra en el arreglo';
    }
};

const interfazEncontroCaracter = (caracter) =>{
    console.log(`*********************************************`.red);
    console.log(`*         `.red +        `FUNCIÓN ENCONTRO CARACTER`.bgRed  +   `         *`.red);
    console.log(`*********************************************`.red);
    console.log(`*`.red  +     `El caracter ${caracter.toUpperCase( )}` + " " + functions.encontroCaracter
    (caracter.toUpperCase( )) + `*`.red);
    console.log(`*********************************************\n`.red);
};

const busquedaBebida = (bebida) => {
    switch (bebida) {
         case 'cerveza' :
             return `Dirijase a la barra`;
             break;
         case 'vino' :
             return `Dirijase a la barra`;
             break;
         case 'gaseosa' :
             return `Dirijase a la barra`;
             break;
         case 'agua' :
             return `Dirijase a la barra`;
             break;
         default:
             return `Dirijase a la tienda`;
             break;
   
     }
 };
 
 const interfazBusquedaBebida = (bebida) =>{
     console.log(`******************************************`.yellow);
     console.log(`*        `.yellow      +   `FUNCIÓN BUSQUEDA BEBIDA`.bgYellow +`         *`.yellow);
     console.log(`******************************************`.yellow);
     console.log(`*      `.yellow + `${bebida}` +  functions.busquedaBebida(bebida ) + `      *`.yellow);
     console.log(`******************************************\n`.yellow);
 };

 const medioTransporte = (medio) =>{
 if (medio === 'avion' || medio === "flota") {
             return `Recuerda tener dinero para el pasaje`;
         } else if (medio == "carro" || medio == "bicicleta")
          {
             return 'Recuerda llevar ropa apropiada' ;
         } 
};
     
const interfazMedioTransporte = (medio) => {
         console.log(`******************************************`.cyan);
         console.log(`*      `.cyan     + `FUNCION MEDIO DE TRANSPORTE`.bgCyan +     `       *`.cyan);
         console.log(`******************************************`.cyan);
         console.log(`*`.cyan  + `${medio} ` +  functions.medioTransporte(medio) + `*`.cyan);
         console.log(`******************************************\n`.cyan);
};

const facturaProducto = (cantidad, precio, descuento) => {

    if(cantidad <= 0 || precio <= 0 || descuento < 0 || descuento >= 100){
        return 'Valores no válidos'
    }
    const total = Math.abs(cantidad * precio * descuento / 100 - precio);
    return total;
};

const interfazFacturaProducto = (cantidad, precio,descuento, total) => {
    console.log(`******************************************`.magenta);
    console.log(`*      `.magenta + `FUNCION FACTURA DE UN PRODUCTO`.bgMagenta + `    *`.magenta);
    console.log(`******************************************`.magenta);
    console.log(`*              `.magenta +  `Cantidad: ${cantidad}` + `               *`.magenta);
    console.log(`*              `.magenta +  `Precio: ${precio}` + `              *`.magenta);
    console.log(`*              `.magenta +  `Descuento: ${descuento}` + `              *`.magenta);
    console.log(`*             `.magenta +  `Total: ${total}` + `                *`.magenta);
    console.log(`******************************************\n`.magenta);
};

const bebidaComida = (menu) => {
        switch (menu) {
            case 'pescado':
                return `Vino blanco`;
                break;
            case 'verdura':
                return `Agua`;
                break;
            case 'carne':
                return `Vino tinto`;
                break;
            default:
                return `Agua`;
                break;
        }
    };

const interfazBebidaComida = (menu) =>{
    console.log(`******************************************`.green);
    console.log(`*         `.green     +   `FUNCIÓN BEBIDA COMIDA`.bgGreen +`          *`.green);
    console.log(`******************************************`.green);
    console.log(`*         `.green + `${menu}`+ "  " +  functions.bebidaComida(menu) + `           *`.green);
    console.log(`******************************************\n`.green);
};

const salaJuegos = (pago) =>{
    if (pago === 4000) {
        return "Accede a todos los juegos: consolas, juegos 3D, juegos 2D y realidad Virtual";
    } else if (pago === 3000) {
        return "Accede a los siguientes juegos: juegos 2D, juegos 3D y consolas";
    } else if (pago === 2000) {
        return "Accede a consolas y juegos 2D";
    } else if (pago === 1000) {
        return "Accede solo a las consolas";
    } else {
        return "Debe ingresar más dinero para acceder a los juegos.";
    }
};

const interfazSalaJuegos = (pago) =>{
    console.log(`************************************************************************************`.gray);
    console.log(`*                              `.gray    +   `FUNCIÓN SALA DE JUEGOS` +`                              *`.gray);
    console.log(`************************************************************************************`.gray);
    console.log(`*`.gray + `${pago}`+ "  " +  functions.salaJuegos(pago) + `*`.gray);
    console.log(`************************************************************************************\n`.gray);
};

const contarNumero = (numero1) => {
    let contador = 0;
 
    while (contador <= numero1) {
        contador++;
        console.log(`*                    `.blue + `${contador}` +`                  *`.blue);
    }
    return ' ';
};

const interfazContarNumero = (numero1) =>{
    console.log(`******************************************`.blue);
    console.log(`*        `.blue     +   `FUNCIÓN CONTAR NÚMEROS`.bgBlue +`          *`.blue);
    console.log(`******************************************`.blue);
    console.log(`*    `.blue + `Cantidad de números hasta el ${numero1}` +  functions.contarNumero(numero1)
     + `     *`.blue);
    console.log(`******************************************\n`.blue);
};

const numerosPares = (numero2) => {
    for(let contador = 0; contador <= numero2; contador ++) {
         if(contador % 2 === 0)
        console.log(`*                    `.red + `${contador}` +`                  *`.red);
        }
        return ' ';
    };
   
const interfazNumerosPares = (numero2) =>{
    console.log(`******************************************`.red);
    console.log(`*         `.red     +   `FUNCIÓN NÚMEROS PARES`.bgRed +`          *`.red);
    console.log(`******************************************`.red);
    console.log(`*`.red + `  Cantidad de números pares hasta el ${numero2}` +  functions.numerosPares(numero2) + `*`.red);
    console.log(`******************************************\n`.red);
};

const tablaMultiplicar = (numero3) => {
    let multiplicador=1;
    
    for (multiplicador = 1; multiplicador <= 10; multiplicador++) {
        let resultado = numero3 * multiplicador;
        console.log(`*             `.yellow + `${numero3} X ${multiplicador} = ${resultado}`+ `           *`.yellow);
    }
    return ' ';
};

const interfazTablaMultiplicar = (numero3) =>{
    console.log(`*************************************`.yellow);
    console.log(`*    `.yellow    +   `FUNCIÓN TABLA DE MULTIPLICAR`.bgYellow +`   *`.yellow);
    console.log(`*************************************`.yellow);
    console.log(`*`.yellow + `Tabla de multiplicar del número ${numero3}`+functions.tablaMultiplicar(numero3)+`*`.yellow);
    console.log(`*************************************\n`.yellow);
};

const repetirCaracter = (caracter1, numero4) => {
    let caracterRepetido =' ';
  
    for (let x = 0; x < numero4; x++) {
      caracterRepetido += caracter1;
    }
    return caracterRepetido;
  };

const interfazRepetirCaracter = (caracter1,numero4) =>{
    console.log(`****************************************************************`.cyan);
    console.log(`*                   `.cyan    +   `FUNCIÓN REPETIR CARACTER`.bgCyan +`                   *`.cyan);
    console.log(`****************************************************************`.cyan);
    console.log(`*`.cyan + `El caracter es ${caracter1} y el número de veces que se repite es ${numero4} :` +
    functions.repetirCaracter(caracter1, numero4)+`*`.cyan);
    console.log(`****************************************************************\n`.cyan);
};

const contarBase = (base) => {
    for(let contador = 10; contador <= base; contador ++) {
         if(contador >= 10 && contador < 100)
        console.log(`*                            `.magenta + `${contador}` +`                          *`.magenta);
        }
        return ' ';
    };

const interfazContarBase = (base) => {
    console.log(`**********************************************************`.magenta);
    console.log(`*                   `.magenta    +   `FUNCIÓN CONTAR BASE`.bgMagenta +`                  *`.magenta);
    console.log(`**********************************************************`.magenta);
    console.log(`*`.magenta + `Estos son los números de dos digitos hasta el número ${base}`+functions.contarBase(base)+`*`.magenta);
    console.log(`**********************************************************\n`.magenta);
};

const inicioSesion = (clave) => {
    let contraseñas = ['keyword1','keyword2', 'keyword3'];
    let intento = 0
    for (const claves of clave) {
        intento++ 
               
        if (contraseñas.includes(claves)) {
            console.log(`*`.green +`La contraseña es correcta, acceso permitido.`+ `*`.green)
            return "";
        } else {
            console.log (`*`.green +`La contraseña no es correcta, intento ${intento} de 3`+ `*`.green);
        }
    }
    console.log(`*              `.green +"¡Alerta intruso!"+ `             *`.green)
    return "";
}

const interfazInicioSesion = (clave) =>{
    console.log(`**********************************************`.green);
    console.log(`*          `.green     +   `FUNCIÓN INICIO DE SESIÓN`.bgGreen +`          *`.green);
    console.log(`**********************************************`.green);
    console.log(`*          `.green + `${clave}`+ "  " +  functions.inicioSesion(clave) + `         *`.green);
    console.log(`**********************************************\n`.green);
};

const minimoMaximo = (numeros) => {

    let min = numeros[0]
    let max = numeros[0]
    let suma = numeros[0];

    for(let i = 0; i<numeros.length; i++){
        if(min > numeros[i]){
            min = numeros[i];
        }
        if(max < numeros[i]){
            max = numeros[i];
     }
    suma += numeros[i];
    }
    const promedio = suma / numeros.length;

    return (`*`.gray + `El número mínimo es: ${min}` + `     *\n`.gray + `*       `.gray+ `El número máximo es: ${max}`
    +`      *\n`.gray + `*        `.gray + `El promedio es: ${promedio}` + `         *`.gray);
};

const interfazMinimoMaximo = (numeros) =>{
    console.log(`***************************************`.gray);
    console.log(`*  `.gray    +   `FUNCIÓN MÍNIMO, MÁXIMO Y PROMEDIO` +`  *`.gray);
    console.log(`***************************************`.gray);
    console.log(`*     `.gray + `El arreglo es: ${numeros}` + `     *  \n `.gray + "  " +  functions.minimoMaximo(numeros));
    console.log(`***************************************\n`.gray);
};

const numerosPares2 = (numeros1) => {
    const pares = [];
    let i = 0;
    
    while (i < numeros1.length) {
        if (numeros1[i] % 2 === 0) {
            pares.push(numeros1[i]);
        }
        i++;
    }

    return {
        cantidad: pares.length,
        numerosPares: pares
    };
};

const interfazNumerosPares2 = (numeros1) => {
    console.log(`********************************************`.blue);
    console.log(`*`.blue + `FUNCIÓN CONTAR NÚMEROS PARES DE UN ARREGLO`.bgBlue + `*`.blue);
    console.log(`********************************************`.blue);
    console.log(`*        `.blue + `El arreglo es: ${numeros1}` + `        *\n`.blue + `*       `.blue + `Cantidad de números pares: ${numerosPares2(numeros1).cantidad}` + `       *`.blue);
    console.log(`********************************************\n`.blue);
};

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
functions. interfazContarNumero =  interfazContarNumero;
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

module.exports = functions;
