import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
const Characters = () => {
  const { characterData } = useLoaderData();
  const data = characterData.results;
  console.log(data);

  return (
    <div className="container p-4">
      {data.map((char) => (
        <Link
          to={`${char.id}`}
          key={char.id}
          className="flex flex-col p-4 text-center text-cyan-600"
        >
          <h1 className="text-3xl py-2">{char.name}</h1>
          <img className="rounded-md" src={`${char.image}`} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default Characters;

export const charactersLoader = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const characterData = await res.json();

  return { characterData };
};
