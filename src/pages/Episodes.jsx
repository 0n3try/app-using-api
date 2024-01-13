import { useLoaderData } from "react-router-dom";

const Episodes = () => {
  const { data } = useLoaderData();

  const episodes = data.results;

  console.log(data);
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
      </article>
    </div>
  );
};

export default Episodes;

export const epiLoader = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  const data = await res.json();

  return { data };
};
