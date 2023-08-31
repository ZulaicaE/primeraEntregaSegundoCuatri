// Clase con informacion del almuno.
var datosPersonales = /** @class */ (function () {
    function datosPersonales(nombre, apellido, edad, DNI) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = DNI;
    }
    datosPersonales.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    datosPersonales.prototype.obtenerApellido = function () {
        return this.apellido;
    };
    datosPersonales.prototype.obtenerEdad = function () {
        return this.edad;
    };
    datosPersonales.prototype.obtenerDNI = function () {
        return this.DNI;
    };
    return datosPersonales;
}());
// Clase examen con nombre y nota de la materia.
var examen = /** @class */ (function () {
    function examen(nombre, nota) {
        this.nombreMateria = nombre;
        this.notaExamen = nota;
    }
    examen.prototype.obtenerNombreMateria = function () {
        return this.nombreMateria;
    };
    examen.prototype.obtenerNotaExamen = function () {
        return this.notaExamen;
    };
    return examen;
}());
// Clase alumno, requiere las clases datosAlumnos y examen.
var alumno = /** @class */ (function () {
    function alumno(alumno, examen) {
        this.datosPersonales = alumno;
        this.examenes = examen;
    }
    alumno.prototype.obtenerDatosPersonales = function () {
        return this.datosPersonales;
    };
    alumno.prototype.obtenerExamenes = function () {
        return this.examenes;
    };
    alumno.prototype.agregarExamen = function (examen) {
        this.examenes.push(examen);
    };
    alumno.prototype.calcularPromedio = function () {
        if (this.examenes.length > 0) {
            var promedio = 0;
            var suma = 0;
            var divisor = 0;
            for (var i = 0; i < this.examenes.length; i++) {
                suma += this.examenes[i].obtenerNotaExamen();
                divisor++;
            }
            promedio = suma / divisor;
            return promedio;
        }
        else {
            return 0;
        }
    };
    return alumno;
}());
// Clase gestion, obtiene los metodos de la clase alumno y agrega funcionalidad.
var gestionDeAlumnos = /** @class */ (function () {
    function gestionDeAlumnos() {
        this.alumnos = [];
    }
    gestionDeAlumnos.prototype.obtenerAlumnos = function () {
        return this.alumnos;
    };
    gestionDeAlumnos.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    gestionDeAlumnos.prototype.obtenerPromedioGeneral = function () {
        if (this.alumnos.length > 0) {
            var suma = 0;
            var divisor = 0;
            var promedioGeneral = 0;
            for (var i = 0; i < this.alumnos.length; i++) {
                suma += this.alumnos[i].calcularPromedio();
                divisor++;
            }
            promedioGeneral = suma / divisor;
            return promedioGeneral;
        }
        else {
            return 0;
        }
    };
    return gestionDeAlumnos;
}());
// Creamos el sistema de gestion.
var escuelaSecundaria = new gestionDeAlumnos();
// Ingresamos dos alumnos con sus respectivos datos y examenes.
var datosUno = new datosPersonales('Emiliano', 'Z', 17, 30202020);
var examenMat1 = new examen('Matematicas', 10);
var alumnoUno = new alumno(datosUno, [examenMat1]);
var datosDos = new datosPersonales('Emmanuel', 'S', 18, 30101100);
var examenLit1 = new examen('Literatura', 8);
var alumnoDos = new alumno(datosDos, [examenLit1]);
// Tambien podemos agregar examenes los arreglos dentro de las clases.
var examenHist1 = new examen('Historia', 7);
alumnoUno.agregarExamen(examenHist1);
var examenHist2 = new examen('Historia', 9);
alumnoDos.agregarExamen(examenHist2);
// Los añadimos al sistema.
escuelaSecundaria.agregarAlumno(alumnoUno);
escuelaSecundaria.agregarAlumno(alumnoDos);
// Y podemos calcular promedios individuales y generales.
console.log(alumnoUno.calcularPromedio());
console.log(alumnoDos.calcularPromedio());
console.log(escuelaSecundaria.obtenerPromedioGeneral());
