var sistemaDeStock = /** @class */ (function () {
    function sistemaDeStock() {
        this.elementosDisponibles = [];
        this.elementosVendidos = [];
    }
    sistemaDeStock.prototype.agregaElemento = function (item) {
        this.elementosDisponibles.push(item);
    };
    sistemaDeStock.prototype.agregaElementoVendido = function (item) {
        this.elementosVendidos.push(item);
    };
    sistemaDeStock.prototype.obtenerElementosDisponibles = function () {
        return this.elementosDisponibles;
    };
    sistemaDeStock.prototype.obtenerElementosVendidos = function () {
        return this.elementosVendidos;
    };
    return sistemaDeStock;
}());
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
    productoKiosco.prototype.obtenerCantidadProcuto = function () {
        return this.cantidadProducto;
    };
    return productoKiosco;
}());
var cigarrilosMarlboro = new productoKiosco('Marlboro', 850, 10);
console.log(cigarrilosMarlboro);
