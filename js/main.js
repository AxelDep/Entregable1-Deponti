const materiasDisponibles = [
  "Matemática I",
  "Programación I",
  "Bases de Datos",
  "Arquitectura de Computadoras",
  "Inglés Técnico",
  "Algoritmos y Estructuras de Datos"
];

let materiasInscritas = [];

function mostrarMateriasDisponibles() {
  let texto = "Materias disponibles:\n";
  materiasDisponibles.forEach((materia, i) => {
    texto += `${i + 1}. ${materia}\n`;
  });
  alert(texto);
  console.clear();
  console.log(texto);
}

function inscribirMateria() {
  let listaMaterias = materiasDisponibles
    .map((m, i) => `${i + 1}. ${m}`)
    .join("\n");
  let input = prompt(
    "Ingrese el número de la materia que desea inscribir:\n\n" + listaMaterias
  );

  let numeroMateria = parseInt(input);

  if (
    isNaN(numeroMateria) ||
    numeroMateria < 1 ||
    numeroMateria > materiasDisponibles.length
  ) {
    alert("Número de materia inválido. Intente nuevamente.");
    return;
  }

  let materiaSeleccionada = materiasDisponibles[numeroMateria - 1];

  if (materiasInscritas.includes(materiaSeleccionada)) {
    alert(`Ya está inscrito en la materia: ${materiaSeleccionada}`);
  } else {
    materiasInscritas.push(materiaSeleccionada);
    alert(`Se ha inscrito en la materia: ${materiaSeleccionada}`);
  }
}

function mostrarResumenInscripcion() {
  console.clear();
  if (materiasInscritas.length === 0) {
    alert("No ha inscrito ninguna materia.");
    console.log("No ha inscrito ninguna materia.");
  } else {
    let resumen = "Materias inscritas:\n";
    materiasInscritas.forEach((materia, i) => {
      resumen += `${i + 1}. ${materia}\n`;
    });
    alert(resumen);
    console.log(resumen);
  }
}

// Programa principal

alert("Bienvenido al simulador de inscripción a materias");

// Mostrar materias disponibles antes del menú
mostrarMateriasDisponibles();

let opcion;

do {
  console.clear();
  opcion = prompt(
    "Seleccione una opción:\n" +
      "1. Inscribir materia\n" +
      "2. Mostrar resumen de inscripción\n" +
      "3. Salir"
  );

  switch (opcion) {
    case "1":
      inscribirMateria();
      break;
    case "2":
      mostrarResumenInscripcion();
      break;
    case "3":
      alert("Gracias por usar el simulador. ¡Hasta luego!");
      break;
    default:
      alert("Opción inválida. Intente nuevamente.");
  }
} while (opcion !== "3");
