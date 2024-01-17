import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Characters = () => {
  const [personajes, setPersonajes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const respuesta = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${paginaActual}`
        );
        const datos = await respuesta.json();
        setPersonajes(datos.results);
      } catch (error) {
        console.error("Error al obtener datos de la API", error);
      }
    };

    obtenerPersonajes();
  }, [paginaActual]);

  const cambiarPagina = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <div className="container p-4 ">
      <section className="mt-10">
        {personajes.map((char) => (
          <Link
            to={`${char.id}`}
            key={char.id}
            className="flex flex-col p-4 text-center items-center text-cyan-600 "
          >
            <h1 className="text-3xl py-2">{char.name}</h1>
            <img
              className="rounded-md w-[300px]"
              src={`${char.image}`}
              alt={char.name}
            />
          </Link>
        ))}
        <div className="container flex justify-center gap-4 my-10">
          <button
            className="p-2 bg-cyan-500 rounded-md"
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
          >
            Anterior
          </button>
          <button
            className="p-2 bg-cyan-500 rounded-md"
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === 42}
          >
            Siguiente
          </button>
        </div>
      </section>
    </div>
  );
};

export default Characters;
