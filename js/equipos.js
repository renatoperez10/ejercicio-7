const equipos = [
  {
    id: "A7921",
    tipo: "Portátil",
    asignado: {
      empleado: {
        nombre: "Luis",
        apellidos: "Aguiler Sánchez",
        edad: 37,
        puesto: "Frontend developer",
      },
      direccion: "C/ Grassot, 55, 3º 1ª",
      poblacion: "Tarragona",
      provincia: "Tarragona",
    },
  },
  {
    id: "A1844",
    tipo: "Portátil",
    asignado: {
      empleado: {
        nombre: "Pere",
        apellidos: "Puig Abella",
        edad: 41,
        puesto: "Backend developer",
      },
      direccion: "Avda/ Independència, 105, 1º 2ª",
      poblacion: "Torredembarra",
      provincia: "Tarragona",
    },
  },
  {
    id: "T5491",
    tipo: "Sobremesa",
    asignado: {
      empleado: {
        nombre: "Saioa",
        apellidos: "Estevez Lupión",
        edad: 28,
        puesto: "Project Manager",
      },
      direccion: "C/ Roc, 13",
      poblacion: "L'Ametlla del Vallès",
      provincia: "Barcelona",
    },
  },
  {
    id: "T4405",
    tipo: "Sobremesa",
    asignado: {
      empleado: {
        nombre: "Roberto",
        apellidos: "García Robles",
        edad: 35,
        puesto: "El que trae los cafés",
      },
      direccion: "C/ Alfons X, 12, 1º 1ª",
      poblacion: "Tarragona",
      provincia: "Tarragona",
    },
  },
  {
    id: "A3187",
    tipo: "Portátil",
    asignado: {
      empleado: {
        nombre: "Andreu",
        apellidos: "Nieto Gavira",
        edad: 23,
        puesto: "El que friega los tuppers",
      },
      direccion: "C/ Besalú, 7",
      poblacion: "Barcelona",
      provincia: "Barcelona",
    },
  },
];

const equiposMayoresEdad = (listaEquipos, edadFiltrar) => listaEquipos.filter((equipo) => equipo.asignado.empleado.edad > edadFiltrar);

const equiposProvincia = (listaEquipos, provinciaFiltrar) => listaEquipos
  .filter((equipo) => equipo.asignado.provincia.toLowerCase() === provinciaFiltrar.toLowerCase());

const provincias = (listaEquipos) => Array.from(new Set(
  listaEquipos
    .map((equipo) => equipo.asignado.provincia)
));

const puestos = (listaEquipos) => listaEquipos.map((equipo) => equipo.asignado.empleado.puesto);

const edadMedia = (listaEquipos) => Math.round((
  listaEquipos
    .reduce(((acumulador, valorActual) => acumulador + valorActual.asignado.empleado.edad), 0)
  / listaEquipos.length) * 100) / 100;

const equiposPorEdad = (listaEquipos) => listaEquipos
  .sort((a, b) => ((a.asignado.empleado.edad > b.asignado.empleado.edad) ? 1 : -1));

const equiposTipo = (listaEquipos, tipoFiltrar) => listaEquipos
  .filter((equipo) => equipo.tipo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    === tipoFiltrar.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""));

const trabajadoresTipo = (listaEquipos, tipoFiltrar) => equiposTipo(listaEquipos, tipoFiltrar).map((equipo) => equipo.asignado.empleado);

const equiposPorTipo = (listaEquipos) => {
  const listaRetornar = [];
  const listaTipos = Array.from(new Set(
    listaEquipos.map((equipo) => equipo.tipo)
  ));
  for (const elemento of listaTipos) {
    const objetoLista = {
      tipo: elemento,
      equipos: [equiposTipo(listaEquipos, elemento)]
    };
    listaRetornar.push(objetoLista);
  }
  return listaRetornar;
};

const equiposTipoLocalidad = (listaEquipos, tipoFiltrar, localidadFiltrar) => {
  let listaRetornar = equiposTipo(listaEquipos, tipoFiltrar);
  listaRetornar = equiposProvincia(listaRetornar, localidadFiltrar);
  return listaRetornar;
};

const resumenEquipos = (listaEquipos) => {
  const listaRetornar = [];
  for (const equipo of listaEquipos) {
    const objetoEquipo = {
      id: equipo.id,
      poblacion: equipo.asignado.poblacion,
      provincia: equipo.asignado.provincia
    };
    listaRetornar.push(objetoEquipo);
  }
  return listaRetornar;
};
