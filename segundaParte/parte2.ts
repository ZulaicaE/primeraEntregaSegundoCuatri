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
        let promedio: number = 0;
        let suma: number = 0;
        let divisor: number = 0;
        for (let i: number = 0; i < this.examenes.length; i++) {
            suma += this.examenes[i].obtenerNotaExamen();
            divisor++;
        }
        promedio = suma / divisor;
        return promedio;
    }
}

class gestionDeAlumnos {

    private alumnos: alumno[]

    public constructor() {
        this.alumnos = [];
    }

    public obtenerAlumnos(): alumno[] {
        return this.alumnos;
    }

    public agregarAlumno(alumno: alumno): void {
        this.alumnos.push(alumno);
    }

    public obtenerPromedioGeneral(): number {
        return 0;
    }
}


let escuelaSecundaria: gestionDeAlumnos = new gestionDeAlumnos();

let datosUno: datosAlumno = new datosAlumno('Emiliano', 'Zulaica', 17, 30202020);
let examenMat: examen = new examen('Matematicas', 10);
let alumnoUno: alumno = new alumno(datosUno, examenMat);

let datosDos: datosAlumno = new datosAlumno('Emmanuel', 'Spinella', 18, 30101100);
let examenLit: examen = new examen('Literatura', 8);
let alumnoDos: alumno = new alumno(datosDos, examenLit);



