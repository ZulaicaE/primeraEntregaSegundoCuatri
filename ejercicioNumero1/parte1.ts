
class sistemaDeStock {

    private elementosDisponibles: productoKiosco[];
    private elementosVendidos: productoKiosco[];

    public constructor() {
        this.elementosDisponibles = [];
        this.elementosVendidos = [];
    }

    public agregaElemento(item: productoKiosco): void {
        this.elementosDisponibles.push(item);
    }

    public venderProducto(nombre: string, cantidad: number): void {
        for (let i: number = 0; i < this.elementosDisponibles.length; i++) {
            if (nombre == this.elementosDisponibles[i].obtenerNombreProducto()) {
                if (this.elementosDisponibles[i].obtenerCantidadProducto() >= cantidad) {
                    this.elementosDisponibles[i].reducirStock(cantidad);
                    this.agregaElementoVendido(this.elementosDisponibles[i], cantidad)
                } else {
                    console.log('No tenemos esa cantidad de producto');
                }
            } else if (i > this.elementosDisponibles.length) {
                console.log('No tenemos este producto');
            }
        }
    }

    public agregaElementoVendido(producto: productoKiosco, cantidad: number): void {
        let productoVendido: productoKiosco = new productoKiosco(producto.obtenerNombreProducto(), producto.obtenerPrecioProducto(), cantidad);
        this.elementosVendidos.push(productoVendido);
    }

    public obtenerElementosDisponibles(): productoKiosco[] {
        return this.elementosDisponibles;
    }

    public obtenerElementosVendidos(): productoKiosco[] {
        return this.elementosVendidos;
    }
}

class productoKiosco {

    private nombreProducto: string;
    private precioProducto: number;
    private cantidadProducto: number;

    public constructor(nombre: string, precio: number, stock: number) {
        this.nombreProducto = nombre;
        this.precioProducto = precio;
        this.cantidadProducto = stock;
    }

    public obtenerNombreProducto(): string {
        return this.nombreProducto;
    }

    public obtenerPrecioProducto(): number {
        return this.precioProducto;
    }

    public obtenerCantidadProducto(): number {
        return this.cantidadProducto;
    }

    public reducirStock(cantidad: number): void {
        this.cantidadProducto = this.cantidadProducto - cantidad;
    }

    public cambiarStock(cantidad: number): void {
        this.cantidadProducto = cantidad;
    }
}

let stockDeKiosquito = new sistemaDeStock();

let arrayDeStock: productoKiosco[] = [];

let cigarrilosMarlboro = new productoKiosco('Marlboro', 850, 10);
let alfajorGuaymallen = new productoKiosco('Guaymallen', 100, 20);
let surtidosBagley = new productoKiosco('Surtidos Bagley', 600, 5);

arrayDeStock.push(cigarrilosMarlboro);
arrayDeStock.push(alfajorGuaymallen);
arrayDeStock.push(surtidosBagley);

for (let i: number = 0; i < arrayDeStock.length; i++) {
    stockDeKiosquito.agregaElemento(arrayDeStock[i]);
}

console.log(stockDeKiosquito);

stockDeKiosquito.venderProducto('Marlboro', 4);

console.log(stockDeKiosquito);

