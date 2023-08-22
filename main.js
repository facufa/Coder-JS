function carritoDeCompra(precio) {
    let pago = parseInt(prompt('METODO DE PAGO: \n 1. Contado\n 2. Credito\n 3. Mercado Pago'));
    let precioFinal = 0;

    if (pago == 1) {
        precioFinal = precio;
        alert('Monto a pagar: ' + precioFinal);
        convertir(precioFinal);
    } else if (pago == 2) {
        precioFinal = precio / 100 * 80 + precio;
        alert('Monto a pagar: ' + precioFinal);
        convertir(precioFinal);
    } else if (pago == 3) {
        precioFinal = precio / 100 * 60 + precio;
        alert('Monto a pagar: ' + precioFinal);
        convertir(precioFinal);
    } else {
        alert('Debes selecionar al menos un metodo de pago')
    }
};

function convertir(precioFinal) {
    let convertir = (prompt('DESEA CONVETIR EL MONTO A PESOS?\n SI\n NO'));
    if (convertir === 'si') {
        alert('$ ' + precioFinal * 720);
    } else {
        alert('Gracias por tu compra!');
    };
}


let idProducto = parseInt(prompt('ELEGIR PRODUCTO:\n1. IPhone\n2. McBook\n3. Ipad\n4. Accesorios\n5. Finalizar la compra'));

while (idProducto != 5) {

    switch (idProducto) {
        case 1:
            let iphone = parseInt(prompt('ELEGIR MODELO DEL CELULAR DISPONIBLE:\n1. IPhone XR 64gb    $360 USD\n2. IPhone 11 126gb    $700 USD\n3. IPhone 12 pro 256gb    $800 USD'));
            switch (iphone) {
                case 1:
                    carritoDeCompra(360);
                    break;
                case 2:
                    carritoDeCompra(700);
                    break;
                case 3:
                    carritoDeCompra(800);
                    break;
                default:
                    alert('Selecciona una opcion correcta');
                    break;
            }
            break;

        case 2:
            let mcBook = parseInt(prompt('ELEGIR MODELO DE MCBOOK:\n1. McBook pro 11 Gen. 256gb    $990 USD\n2. McBook chip 2 256gb    $620 USD'));
            switch (mcBook) {
                case 1:
                    carritoDeCompra(990);
                    break;
                case 2:
                    carritoDeCompra(620);
                    break;
                default:
                    alert('Selecciona una opcion correcta');
                    break;
            }
            break;

        case 3:
            let ipad = parseInt(prompt('ELEGIR MODELO DE IPAD:\n1. Ipad pro M1 11 pulgadas    $1000 USD\n2. Ipad pro M2 12,9 pulgadas    $1400 USD'));
            switch (ipad) {
                case 1:
                    carritoDeCompra(1000);
                    break;
                case 2:
                    carritoDeCompra(1400);
                    break;
                default:
                    alert('Selecciona una opcion correcta');
                    break;
            }
            break;

        case 4:
            let accesorios = parseFloat(prompt('ELEGIR ACCESORIO:\n1. Cable 1mt    $2,55 USD\n2. Cable tipo C    $3,32 USD\n3. Fuente de carga 20W pata recta    $11,48 USD\n4. Battery pack    $36,20 USD\n5. Leather wallet    $10 USD\n6. Silicone case    $4 USD'));
            switch (accesorios) {
                case 1:
                    carritoDeCompra(2, 55);
                    break;
                case 2:
                    carritoDeCompra(3, 32);
                    break;
                case 3:
                    carritoDeCompra(11, 48);
                    break;
                case 4:
                    carritoDeCompra(36, 20);
                    break;
                case 5:
                    carritoDeCompra(10);
                    break;
                case 6:
                    carritoDeCompra(4);
                    break;
                default:
                    alert('Selecciona una opcion correcta');
                    break;
            }
            break;

        default:
            alert('Selecciona una opcion correcta')
            break;
    }

    idProducto = parseInt(prompt('ELEGIR PRODUCTO:\n1. IPhone\n2. McBook\n3. Ipad\n4. Accesorios\n5. Finalizar la compra'));
}



