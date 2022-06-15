import { Home3 } from "./Home3";
import { PersonalBlog } from "./component/Personalblog";
import { NotFound } from "./404";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    {
      path: "/cgould.net",
      element: <Home3 />
    },

    {
      path: "/cgould.net/blog",
      element: <PersonalBlog />
    },

    {
      path: "*",
      element: <NotFound />
    }

  ]);
}