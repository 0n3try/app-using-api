import { useLoaderData } from "react-router-dom";

const Character = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div className="container flex flex-col items-center p-4 mt-6">
      <img className="rounded-md w-[300px]" src={data.image} alt={data.name} />
      <h1 className="text-cyan-500 text-3xl text-center">{data.name}</h1>
      <section className="text-2xl mt-2">
        <p>Status: {data.status}</p>
        <p>Species: {data.species}</p>
        <p>Gender: {data.gender}</p>
        <p>Origin: {data.origin.name}</p>
        <p>Location: {data.location.name}</p>
        <p>episodes: {data.episode.length}</p>
      </section>
    </div>
  );
};

export default Character;

export const postLoader = async ({ params }) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${params.id}`
  );
  const data = await res.json();

  return { data };
};
