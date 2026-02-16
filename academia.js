const heroes = [
  { nombre: "Iron Man", nivel: 5, equipo: "Avengers" },
  { nombre: "Batman", nivel: 4, equipo: "Justice League" },
  { nombre: "Thor", nivel: 8, equipo: "Avengers" },
  { nombre: "Spider-Man", nivel: 3, equipo: "Avengers" }
];

// 1. Filtrar héroes que pertenecen a "Avengers"
const filtrarAvengers = (lista) => lista.filter(heroe => heroe.equipo === "Avengers");

// 2. Función para subir nivel
const subirNivel = (lista, nombreHeroe) => {
  return lista.map(heroe => {
    if (heroe.nombre === nombreHeroe) {
      // Retornamos una copia del objeto con el nivel aumentado
      return { ...heroe, nivel: heroe.nivel + 1 };
    }
    return heroe; // Si no es el héroe, lo devolvemos tal cual
  });
};

// --- Ejecución ---

// Primero filtramos
let avengers = filtrarAvengers(heroes);

// Luego subimos el nivel a Thor (por ejemplo)
avengers = subirNivel(avengers, "Thor");

console.table(avengers);