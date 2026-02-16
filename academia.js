// Desafío 2: Academia de los avenlleerssss 
// Objetivo: Manejo avanzado de arrays (filtros), funciones de flecha y actualización de propiedades en objetos.

// 📝 Enunciado

// Tienes el siguiente array de objetos:

// const heroes = [
// { nombre: "Iron Man", nivel: 5, equipo: "Avengers" },
// { nombre: "Batman", nivel: 4, equipo: "Justice League" },
// { nombre: "Thor", nivel: 8, equipo: "Avengers" },
// { nombre: "Spider-Man", nivel: 3, equipo: "Avengers" }
// ];

// Crea una función que filtre y devuelva en un nuevo array solo a los héroes que pertenecen al equipo "Avengers".Crea otra función llamada subirNivel que reciba el nombre de un héroe y aumente su nivel en +1.Muestra el array final en la consola para verificar los cambios.

// Debes subirlo a un proyecto en tu Github (aprovechen para usar ramas)



const heroes = [
  { nombre: "Iron Man", nivel: 5, equipo: "Avengers" },
  { nombre: "Batman", nivel: 4, equipo: "Justice League" },
  { nombre: "Thor", nivel: 8, equipo: "Avengers" },
  { nombre: "Spider-Man", nivel: 3, equipo: "Avengers" }
];


const filtrarAvengers = (lista) => lista.filter(heroe => heroe.equipo === "Avengers");


const subirNivel = (lista, nombreHeroe) => {
  return lista.map(heroe => {
    if (heroe.nombre === nombreHeroe) {

      return { ...heroe, nivel: heroe.nivel + 1 };
    }
    return heroe; 
  });
};


let avengers = filtrarAvengers(heroes);


avengers = subirNivel(avengers, "Thor");

console.table(avengers);