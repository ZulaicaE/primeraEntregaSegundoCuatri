/*
Como formatie, tuve que vincular todo de nuevo, esto es una prueba de commit and push
*/

class sistemaDeStock { 

    private elementosDisponibles: string[];
    private elementosVendidos: string[] ;

    public constructor() {
        this.elementosDisponibles = [];
        this.elementosVendidos = [];
    }

    public agregaElemento(item: string): void {
        this.elementosDisponibles.push(item);
    }

    public agregaElementoVendido(item: string): void {
        this.elementosVendidos.push(item);
    }

    public obtenerElementosDisponibles(): string[] {
        return this.elementosDisponibles;
    }

    public obtenerElementosVendidos(): string[] {
        return this.elementosVendidos;
    }
}

class productoKiosco {

    private nombreProducto: string;

    public constructor() {
        this.nombreProducto = '';
    }

    public obtenerNombreProducto(): string {
        return this.nombreProducto;
    }
}