class Alumno {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

class UI {
    agregarAlumno(alumno) {
       const alumnosLista = document.getElementById('alumnos-lista');
       const element = document.createElement('div');
       element.innerHTML = `
       <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Nombre de alumno</strong>: ${alumno.nombre}
                <strong>Apellido de alumno</strong>: ${alumno.apellido}
                <strong>Edad de alumno</strong>: ${alumno.edad}
                <a href="#" class="btn btn-danger" name="borrar">Borrar</a>
   
            </div>
   
        </div>
       `;
       alumnosLista.appendChild(element);

    }

    resetForm(){
        document.getElementById('alumnos-form').reset();
    }

    borrarAlumno(element) {
        if(element.name === 'borrar') {
            element.parentElement.parentElement.parentElement.remove();
            this.mostrarMensaje('Alumno Borrado Exitosamente', 'info');
        }

    }

    mostrarMensaje(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-4`;
        div.appendChild(document.createTextNode(message));
        // MOSTRANDO EN DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        container.insertBefore(div, app);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);

    }
}

// EVENTOS DEL DOM 
document.getElementById('alumnos-form').addEventListener('submit', function (e) {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const edad = document.getElementById('edad').value;

        const alumno = new Alumno(nombre, apellido, edad);

        const ui = new UI();

        if(nombre === '' || apellido === '' || edad === ''){
            return ui.mostrarMensaje('CCOMPLETE LOS CAMPOS POR FAVOR', 'danger')
        }
        ui.agregarAlumno(alumno);
        ui.resetForm();
        ui.mostrarMensaje('ALUMNO AGREGADO', 'success')

        e.preventDefault();
    })

document.getElementById('alumnos-lista').addEventListener('click', function(e){
    const ui = new UI();
    ui.borrarAlumno(e.target)
})