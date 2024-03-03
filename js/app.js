// Datos de tareas
const tareas = [];

// Función para agregar una tarea
function agregarTarea() {
  const fechaInicio = document.getElementById('fechaInicio').value;
  const fechaFin = document.getElementById('fechaFin').value;
  const nivel = document.getElementById('nivel').value;
  const nombreTarea = document.getElementById('tareaT').value;

  const tarea = {
    fechaInicio,
    fechaFin,
    nivel,
    nombreTarea,
    completada: false,
    fallida: false,
  };

  tareas.push(tarea);
  mostrarTareas();
}

// Función para mostrar las tareas
function mostrarTareas() {
  const tareasPendientes = document.getElementById('tareasPendientes');
  const tareasCompletadas = document.getElementById('tareasCompletadas');
  const tareasFallidas = document.getElementById('tareasFallidas');

  tareasPendientes.innerHTML = '';
  tareasCompletadas.innerHTML = '';
  tareasFallidas.innerHTML = '';

  tareas.forEach((tarea, index) => {
    const contenedorTarea = document.createElement('div');
    contenedorTarea.id = 'content';
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = `Tarea: ${tarea.nombreTarea}\n
    \n Fecha Inicio: ${tarea.fechaInicio},
    \n Fecha Fin: ${tarea.fechaFin},
    \n Nivel: ${tarea.nivel}`;
   

    if (tarea.completada) {
      tareasCompletadas.appendChild(contenedorTarea.appendChild(nuevaTarea));
    } else if (tarea.fallida) {
      tareasFallidas.appendChild(contenedorTarea.appendChild(nuevaTarea));
    } else {
      const rutaImagen1 = 'images/ok.jpg';
      const imagen1 = document.createElement('img');
      imagen1.src = rutaImagen1;
      imagen1.alt = 'Imagen del botón 1';
      imagen1.width = 35; // Ancho en píxeles
      imagen1.height = 35; // Altura en píxeles
      const completarBtn = document.createElement('button');
      completarBtn.style.width = '50px';
      completarBtn.style.height = '50px';
      completarBtn.appendChild(imagen1);
      completarBtn.style.border = 0;
      completarBtn.onclick = () => completarTarea(index);

      const rutaImagen2 = 'images/imagenX.png';
      const imagen = document.createElement('img');
      imagen.src = rutaImagen2;
      imagen.alt = 'Imagen del botón 2';
      imagen.width = 25; // Ancho en píxeles
      imagen.height = 25; // Altura en píxeles
      const fallidaBtn = document.createElement('button');
      fallidaBtn.style.width = '50px';
      fallidaBtn.style.height = '50px';
      fallidaBtn.appendChild(imagen);
      fallidaBtn.style.border = 0;
      fallidaBtn.onclick = () => fallidaTarea(index);

      contenedorTarea.appendChild(nuevaTarea);
      contenedorTarea.appendChild(completarBtn);
      contenedorTarea.appendChild(fallidaBtn);

      tareasPendientes.appendChild(contenedorTarea);
    }
  });
}

// Función para marcar una tarea como completada
function completarTarea(index) {
  tareas[index].completada = true;
  mostrarTareas();
}

// Función para marcar una tarea como fallida
function fallidaTarea(index) {
  tareas[index].fallida = true;
  mostrarTareas();
}

