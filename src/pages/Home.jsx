import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <div className="container px-4 text-center pt-10 ">
        <h1 className="text-2xl text-white uppercase flex flex-col pt-10">
          this page use
          <strong className="text-cyan-500 text-3xl">Rick and Morty api</strong>
        </h1>
        <main className="contianer p-4 mt-4">
          {data.map((char) => (
            <Link
              to={`/characters/${char.id}`}
              className="text-2xl text-cyan-600 flex items-center flex-col mt-2"
              key={char.id}
            >
              <h1 className="my-2">{char.name}</h1>
              <img className="rounded-md w-[300px]" src={char.image} alt="" />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};
export default Home;

export const HomeLoader = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/1,2");
  const data = await response.json();

  return { data };
};
