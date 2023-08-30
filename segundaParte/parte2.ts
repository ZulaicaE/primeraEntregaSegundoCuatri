class datosAlumno {

    private nombre: string;
    private apellido: string;
    private edad: number;
    private DNI: number;

    public constructor(nombre: string, apellido: string, edad: number, DNI: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = DNI;
    }

    public obtenerNombre(): string {
        return this.nombre;
    }

    public obtenerApellido(): string {
        return this.apellido;
    }

    public obtenerEdad(): number {
        return this.edad;
    }

    public obtenerDNI(): number {
        return this.DNI;
    }
}

class examen {

    private nombreMateria: string;
    private notaExamen: number;

    constructor(nombre: string, nota: number) {
        this.nombreMateria = nombre;
        this.notaExamen = nota;
    }

    public obtenerNombreMateria(): string {
        return this.nombreMateria;
    }

    public obtenerNotaExamen(): number {
        return this.notaExamen;
    }
}

class alumno {

    private datosPersonales: datosAlumno;
    private examenes: examen[];

    public constructor(alumno: datosAlumno, examen: examen) {
        this.datosPersonales = alumno;
        this.examenes.push(examen);
    }

    public obtenerDatosPersonales(): datosAlumno {
        return this.datosPersonales;
    }

    public obtenerExamenes(): examen[] {
        return this.examenes;
    }

    public agregarExamen(examen: examen): void {
        this.examenes.push(examen);
    }

    public calcularPromedio(): number {
        return 0;
    }
}