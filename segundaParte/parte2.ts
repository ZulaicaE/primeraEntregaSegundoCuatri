// Clase con informacion del almuno.

class datosPersonales {

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

// Clase examen con nombre y nota de la materia.

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

// Clase alumno, requiere las clases datosAlumnos y examen.

class alumno {

    private datosPersonales: datosPersonales;
    private examenes: examen[];

    public constructor(alumno: datosPersonales, examen: examen[]) {
        this.datosPersonales = alumno;
        this.examenes = examen;
    }

    public obtenerDatosPersonales(): datosPersonales {
        return this.datosPersonales;
    }

    public obtenerExamenes(): examen[] {
        return this.examenes;
    }

    public agregarExamen(examen: examen): void {
        this.examenes.push(examen);
    }

    public calcularPromedio(): number {
        if (this.examenes.length > 0) {
        let promedio: number = 0;
        let suma: number = 0;
        let divisor: number = 0;
        for (let i: number = 0; i < this.examenes.length; i++) {
            suma += this.examenes[i].obtenerNotaExamen();
            divisor++;
        }
        promedio = suma / divisor;
        return promedio;
        } else {
            return 0;
        }
    }
}

// Clase gestion, obtiene los metodos de la clase alumno y agrega funcionalidad.

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
        if (this.alumnos.length > 0) {
        let suma: number = 0;
        let divisor: number = 0;
        let promedioGeneral: number = 0;
        for (let i: number = 0; i < this.alumnos.length; i++) {
            suma += this.alumnos[i].calcularPromedio();
            divisor++;
        }
        promedioGeneral = suma / divisor;
        return promedioGeneral;
        } else {
            return 0;
        }
    }
}


// Creamos el sistema de gestion.

let escuelaSecundaria: gestionDeAlumnos = new gestionDeAlumnos();

// Ingresamos dos alumnos con sus respectivos datos y examenes.

let datosUno: datosPersonales = new datosPersonales('Emiliano', 'Z', 17, 30202020);
let examenMat1: examen = new examen('Matematicas', 10);
let alumnoUno: alumno = new alumno(datosUno, [examenMat1]);

let datosDos: datosPersonales = new datosPersonales('Emmanuel', 'S', 18, 30101100);
let examenLit1: examen = new examen('Literatura', 8);
let alumnoDos: alumno = new alumno(datosDos, [examenLit1]);

// Tambien podemos agregar examenes los arreglos dentro de las clases.

let examenHist1: examen = new examen('Historia', 7);
alumnoUno.agregarExamen(examenHist1);

let examenHist2: examen = new examen('Historia', 9);
alumnoDos.agregarExamen(examenHist2);

// Los añadimos al sistema.

escuelaSecundaria.agregarAlumno(alumnoUno);
escuelaSecundaria.agregarAlumno(alumnoDos);

// Y podemos calcular promedios individuales y generales.

console.log(alumnoUno.calcularPromedio());
console.log(alumnoDos.calcularPromedio());

console.log(escuelaSecundaria.obtenerPromedioGeneral());
