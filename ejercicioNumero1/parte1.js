// Creo el sitema de stock que va a utilizar la clase productoKiosco.
var sistemaDeStock = /** @class */ (function () {
    function sistemaDeStock() {
        this.elementosDisponibles = [];
        this.elementosVendidos = [];
    }
    sistemaDeStock.prototype.agregaElemento = function (item) {
        this.elementosDisponibles.push(item);
    };
    sistemaDeStock.prototype.venderProducto = function (nombre, cantidad) {
        for (var i = 0; i < this.elementosDisponibles.length; i++) {
            if (nombre == this.elementosDisponibles[i].obtenerNombreProducto()) {
                if (this.elementosDisponibles[i].obtenerCantidadProducto() >= cantidad) {
                    this.elementosDisponibles[i].reducirStock(cantidad);
                    this.agregaElementoVendido(this.elementosDisponibles[i], cantidad);
                }
                else {
                    console.log('No tenemos esa cantidad de producto');
                }
            }
            else if (i > this.elementosDisponibles.length) {
                console.log('No tenemos este producto');
            }
        }
    };
    sistemaDeStock.prototype.agregaElementoVendido = function (producto, cantidad) {
        var productoVendido = new productoKiosco(producto.obtenerNombreProducto(), producto.obtenerPrecioProducto(), cantidad);
        this.elementosVendidos.push(productoVendido);
    };
    sistemaDeStock.prototype.obtenerElementosDisponibles = function () {
        return this.elementosDisponibles;
    };
    sistemaDeStock.prototype.obtenerElementosVendidos = function () {
        return this.elementosVendidos;
    };
    return sistemaDeStock;
}());
// Clase producto kiosco.
var productoKiosco = /** @class */ (function () {
    function productoKiosco(nombre, precio, stock) {
        this.nombreProducto = nombre;
        this.precioProducto = precio;
        this.cantidadProducto = stock;
    }
    productoKiosco.prototype.obtenerNombreProducto = function () {
        return this.nombreProducto;
    };
    productoKiosco.prototype.obtenerPrecioProducto = function () {
        return this.precioProducto;
    };
    productoKiosco.prototype.obtenerCantidadProducto = function () {
        return this.cantidadProducto;
    };
    productoKiosco.prototype.reducirStock = function (cantidad) {
        this.cantidadProducto = this.cantidadProducto - cantidad;
    };
    productoKiosco.prototype.cambiarStock = function (cantidad) {
        this.cantidadProducto = cantidad;
    };
    return productoKiosco;
}());
// Creo el sistema de stock.
var stockDeKiosquito = new sistemaDeStock();
// Creo un array con productos.
var arrayDeStock = [];
var cigarrilosMarlboro = new productoKiosco('Marlboro', 850, 10);
var alfajorGuaymallen = new productoKiosco('Guaymallen', 100, 20);
var surtidosBagley = new productoKiosco('Surtidos Bagley', 600, 5);
arrayDeStock.push(cigarrilosMarlboro);
arrayDeStock.push(alfajorGuaymallen);
arrayDeStock.push(surtidosBagley);
// Y los ingreso al sistema.
for (var i = 0; i < arrayDeStock.length; i++) {
    stockDeKiosquito.agregaElemento(arrayDeStock[i]);
}
console.log(stockDeKiosquito);
console.log('**********************');
console.log('Dame 4 Marlboro de 20.');
console.log('**********************');
// Realizo una venta y verifico que los elementos disponibles y los vendidos.
stockDeKiosquito.venderProducto('Marlboro', 4);
console.log('**********************');
console.log('Gracias (FUMAR ES MALO).');
console.log('**********************');
console.log(stockDeKiosquito);
