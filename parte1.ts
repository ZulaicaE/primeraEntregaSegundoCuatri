
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

    public agregaElementoVendido(item: productoKiosco): void {
        this.elementosVendidos.push(item);
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

    public obtenerCantidadProcuto(): number {
        return this.cantidadProducto;
    }
}


let stockDeKiosquito = new sistemaDeStock();

let cigarrilosMarlboro = new productoKiosco('Marlboro', 850, 10);

console.log(cigarrilosMarlboro);

stockDeKiosquito.agregaElemento(cigarrilosMarlboro);