import { useState, useEffect, useCallback } from "react";
import { useLoaderData } from "react-router-dom";

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${pagina}`
        );
        const datos = await res.json();
        setEpisodes(datos.results);
      } catch (error) {
        console.log(("Error al obtener los datos de la api", error));
      }
    };
    obtenerPersonajes();
  }, [pagina]);

  const cambiarPagina = (nuevaPagina) => {
    setPagina(nuevaPagina);
  };

  return (
    <div>
      <article className="container pt-10 p-4">
        <h1 className="mt-10 text-3xl text-cyan-500">Episode List</h1>
        {episodes.map((data) => (
          <ul key={data.id} className="px-4 mt-2">
            <li>
              {data.id} - {data.name}
            </li>
          </ul>
        ))}
        <div className="container flex justify-center gap-6 my-10">
          <button
            className="p-2 bg-cyan-500 rounded-md"
            onClick={() => cambiarPagina(pagina - 1)}
            disabled={pagina === 1}
          >
            Anterior
          </button>
          <button
            className="p-2 bg-cyan-500 rounded-md"
            onClick={() => cambiarPagina(pagina + 1)}
            disabled={pagina === 42}
          >
            Siguiente
          </button>
        </div>
      </article>
    </div>
  );
};

export default Episodes;
