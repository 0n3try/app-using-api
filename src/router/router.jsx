import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home, { HomeLoader } from "../pages/Home";
import Characters, { charactersLoader } from "../pages/Characters";
import CharacterPost, { postLoader } from "../pages/CharacterPost";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: HomeLoader,
      },
      ,
      {
        path: "/characters",
        element: <Characters />,
        loader: charactersLoader,
      },
      {
        path: "/characters/:id",
        element: <CharacterPost />,
        loader: postLoader,
      },
    ],
  },
]);
