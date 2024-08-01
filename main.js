//Cursos

class cursos{
    constructor(nombre, descripción, contenido, areaTemática){
        this.nombre = nombre;
        this.descripción = descripción;
        this.contenido = contenido;
        this.areaTemática = areaTemática;
    }
    modificadorNombre(nuevoContenido){
        try {
            this.nombre = nuevoContenido;
            alert("Modificación Realizada Correctamente")
        } catch (error) {
            console.error(error);
        };
    }
    modificadorDescripción(nuevoContenido){
        try {
            this.descripción = nuevoContenido;   
            alert("Modificación Realizada Correctamente")
        } catch (error) {
            console.error(error);
        };
    }
    modificadorContenido(nuevoContenido){
        try {
            let cursoContenido = nuevoContenido.split(",")
            this.contenido = cursoContenido;
            alert("Modificación Realizada Correctamente")
        } catch (error) {
            console.error(error);
        };
    }
    modificadorAreaTemática(nuevoContenido){
        try {
            this.areaTemática = nuevoContenido;
            alert("Modificación Realizada Correctamente")
        } catch (error) {
            console.error(error);
        };
    }
}

//Código Quemado Para Hacer Pruebas

const papiroflexia = new cursos("Papiroflexia", "En este curso desarrollaremos nuestras habilidades de origami", ["Historia del Origami","Origami 1", "Origami 2", "Origami 3"], "Arte");
const Pintura = new cursos("Pintura", "En este curso desarrollaremos nuestras habilidades de pintura", ["Historia de la pintura 1","Oleo 1", "Oleo 2", "Acuarela 1", "Historia de la pintura 2"], "Arte");
const PinturaXd = new cursos("Diseño de Videojuegos", "En este curso desarrollaremos nuestras habilidades de Desarrollo de Videojuegos", ["Historia de Los Videojuegos 1","Diseño de Niveles 1", "Diseño de Niveles 2", "POO 1", "Historia de los Videojuegos 2"], "Desarrollo de Software");

//Almacenamiento de Todos Los Cursos

let datosCursos = [papiroflexia, Pintura, PinturaXd];

//Pruebas de Modificación
/*
papiroflexia.modificadorNombre("Pasta")
papiroflexia.modificadorDescripción("Pasta")
papiroflexia.modificadorContenido("Pasta")
*/

console.log(datosCursos);

// Textos del Menu
textoMenuPrincipal = `Bienvenido Usuario \n¿Que desea hacer el dia de hoy? \n1 Agregar Nuevo Curso\n2 Eliminar Curso \n3 Modificar Curso \n4 Buscar Curso por Area Temática \n5 Mostrar Todos los Cursos \n0 Salir`;

const agregarNuevoCurso = ()=>{
    cursoNombre = prompt("¿Cual es el nombre del Curso?")
    cursoDescripción = prompt("¿Descripción del Curso?")
    cursoContenidoBruto = prompt("Contenido del Curso en el formato \nNombreContenido1,NombreContenido2,NombreContenido3")
    cursoContenido = cursoContenidoBruto.split(",")
    let nuevoCurso = new cursos(cursoNombre, cursoDescripción, cursoContenido)
    datosCursos.push(nuevoCurso)
    alert("Curso Agregado Correctamente")
}

const eliminarCurso = ()=>{
    let nombresCursos = []
    for (let curso of datosCursos){
        nombresCursos.push(curso.nombre)
    }
    alert("De los Siguientes Cursos, ¿Cual desea eliminar?")
    nombreCursoEliminar = prompt(nombresCursos.join(" \n"))
    if (nombresCursos.includes(nombreCursoEliminar)){
        indexEliminar = nombresCursos.indexOf(nombreCursoEliminar)
        datosCursos.splice(indexEliminar, 1)
        alert("Curso Eliminado Correctamente")
    } else {
        alert("Curso No Encontrado")
    }
}

const mostrarTodosLosCursos = ()=>{
    for (let curso of datosCursos){
        alert(`Nombre del Curso: ${curso.nombre} \nDescripción del Curso: ${curso.descripción} \nArea Temática del Curso: ${curso.areaTemática} \nContenido del Curso:\n${(curso.contenido).join(" \n")}`)
    }
}

const lógicaSubMenuModificar = (cursoIndex)=>{
    let choice
    do {
        choice = prompt(`1 Modificar Nombre \n2 Modificar Descripción \n3 Modificar Contenido \n0 Volver`)
        let nuevoContenido
        switch(choice){
            case "1":
                nuevoContenido = prompt("Ingrese el nuevo valor");
                datosCursos[cursoIndex].modificadorNombre(nuevoContenido);
                break;
            case "2":
                nuevoContenido = prompt("Ingrese el nuevo valor");
                datosCursos[cursoIndex].modificadorDescripción(nuevoContenido);
                break;
            case "3":
                nuevoContenido = prompt("Ingrese el nuevo valor");
                datosCursos[cursoIndex].modificadorContenido(nuevoContenido);
                break;
            case "0":
                break;
            default:
                alert("Opción Invalida");
                break;
        }
    } while(choice !== "0")
}

const escogerCursoPorNombre = ()=>{
    let nombresCursos = []
    for (let curso of datosCursos){
        nombresCursos.push(curso.nombre)
    }
    alert("De los Siguientes Cursos Cual desea Escoger")
    nombreCursoEscoger = prompt(nombresCursos.join(" \n"))
    if (nombresCursos.includes(nombreCursoEscoger)){
        indexCurso = nombresCursos.indexOf(nombreCursoEscoger)
        return indexCurso
    } else {
        alert("Curso No Encontrado")
        return null
    }
}

const escogerCursoPorArea = ()=>{
    let areasCursos = new Set()
    for (let curso of datosCursos){
        areasCursos.add(curso.areaTemática)
    }
    alert("De las Siguientes Areas Cual desea Escoger")
    let areasCursosArray = []
    for (let curs of areasCursos){
        areasCursosArray.push(curs)
    }
    areaEscoger = prompt(areasCursosArray.join("\n"))
    if (areasCursos.has(areaEscoger)){
        for (let curso of datosCursos){
            if(curso.areaTemática === areaEscoger){
                alert(`Nombre del Curso: ${curso.nombre} \nDescripción del Curso: ${curso.descripción} \nArea Temática del Curso: ${curso.areaTemática} \nContenido del Curso:\n${(curso.contenido).join(" \n")}`)
            }
        }
    } else {
        alert("Area No Encontrada")
        return null
    }
}

const lógicaMenu = ()=>{
    let choice
    do {
        choice = prompt(textoMenuPrincipal)
        switch(choice){
            case "1":
                agregarNuevoCurso();
                break;
            case "2":
                eliminarCurso();
                break;
            case "3":
                let cursoIndex = escogerCursoPorNombre()
                if (cursoIndex !== null){
                    lógicaSubMenuModificar(cursoIndex);
                }
                break;
            case "4":
                escogerCursoPorArea()
                break;
            case "5":
                mostrarTodosLosCursos();
                break;
            case "0":
                alert("Gracias Por Usar Nuestro Software");
                break;
            default:
                alert("Opción Invalida");
                break;
        }
    } while(choice !== "0")
}

lógicaMenu()