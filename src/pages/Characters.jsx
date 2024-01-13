import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const Characters = () => {
  const { characterData } = useLoaderData();
  const data = characterData.results;

  return (
    <div className="container p-4 ">
      <section className="mt-10">
        {data.map((char) => (
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
      </section>
    </div>
  );
};

export default Characters;

export const charactersLoader = async () => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/`);
  const characterData = await res.json();

  return { characterData };
};
