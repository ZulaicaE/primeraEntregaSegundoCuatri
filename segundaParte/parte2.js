var datosAlumno = /** @class */ (function () {
    function datosAlumno(nombre, apellido, edad, DNI) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.DNI = DNI;
    }
    datosAlumno.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    datosAlumno.prototype.obtenerApellido = function () {
        return this.apellido;
    };
    datosAlumno.prototype.obtenerEdad = function () {
        return this.edad;
    };
    datosAlumno.prototype.obtenerDNI = function () {
        return this.DNI;
    };
    return datosAlumno;
}());
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
        var promedio = 0;
        var suma = 0;
        var divisor = 0;
        for (var i = 0; i < this.examenes.length; i++) {
            suma += this.examenes[i].obtenerNotaExamen();
            divisor++;
        }
        promedio = suma / divisor;
        return promedio;
    };
    return alumno;
}());
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
            console.log(suma);
            console.log(divisor);
            promedioGeneral = suma / divisor;
            return promedioGeneral;
        }
        else {
            console.log('No hay alumnos ingresados al sistema');
            return 0;
        }
    };
    return gestionDeAlumnos;
}());
var escuelaSecundaria = new gestionDeAlumnos();
var datosUno = new datosAlumno('Emiliano', 'Zulaica', 17, 30202020);
var examenMat1 = new examen('Matematicas', 10);
var alumnoUno = new alumno(datosUno, [examenMat1]);
var datosDos = new datosAlumno('Emmanuel', 'Spinella', 18, 30101100);
var examenLit1 = new examen('Literatura', 8);
var alumnoDos = new alumno(datosDos, [examenLit1]);
var examenHist1 = new examen('Historia', 7);
alumnoUno.agregarExamen(examenHist1);
var examenHist2 = new examen('Historia', 9);
alumnoDos.agregarExamen(examenHist2);
//console.log(alumnoUno.calcularPromedio());
//console.log(alumnoDos.calcularPromedio());
//escuelaSecundaria.agregarAlumno(alumnoUno);
//escuelaSecundaria.agregarAlumno(alumnoDos);
console.log(escuelaSecundaria.obtenerPromedioGeneral());
