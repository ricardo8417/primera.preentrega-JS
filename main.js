alert("Bienvenido al Simulador de Inventarios")

//Variables Globales

let pregunta = 0;
let totalProductoAlta = 0
let totalProductoBaja = 0


do {
    pregunta = parseInt(prompt("Presione la opción de la operación que desea realizar: 1) Alta de producto, 2) Baja del producto, 3) Detalle de existencias del producto, 4)Salir"))
    if (pregunta == 1) {
        agregarArticulos();
        alert('Productos o Producto ingresado con exito.');
    } else if (pregunta == 2) {
        darBajaProducto()
        alert('Productos o Producto dados de baja con exito.');
    } else if (pregunta == 3) {
        existencia(totalProductoAlta, totalProductoBaja)

    } else if (pregunta == 4) {
        pregunta = false;
        alert('Ha seleccionado salir.')
    } else {
        alert('Error!, Ingreso una opción incorrecta, favor de seleccionar la opción correcta.');
    }
} while (pregunta);


//función dar alta al producto

function agregarArticulos() {

    let cantidad = 0



    do {
        producto = prompt('¿Que producto deseas dar de alta, ejemplo: Escoba, Plumones,Computadora,Escritorios '.toLowerCase())
        cantidad = parseInt(prompt('Agrega la cantidad del producto a dar de alta'))
        anaquel = prompt('Escribe el anaquel al que corresponde tu producto, ejemplo: Limpieza,moviliario, Computo o Papeleria'.toLowerCase())

        totalProductoAlta += cantidad
        agregarProducto = confirm('¿Desea dar de alta otro producto?')
    } while (agregarProducto);
    return totalProductoAlta

};

//función dar baja al producto

function darBajaProducto() {
    let cantidadBaja = 0

    let continuarBaja = false

    do {
        productoBaja = prompt(' Selecciona el producto que deseas dar de alta, cátalogo: Escoba, Plumones,Computadora,Escritorios '.toLowerCase())
        cantidadBaja = parseInt(prompt('Cantidad de producto a utilizar'))
        totalProductoBaja += cantidadBaja
        continuarBaja = confirm('Desea utilizar otro producto')

    } while (continuarBaja)
    return totalProductoBaja
};

//función calculo existencias

function existencia(totalProductoAlta, totalProductoBaja) {
    let existencias = 0


    existencias = totalProductoAlta - totalProductoBaja;

    alert('Actualmente cuentas con: ' + existencias)

}