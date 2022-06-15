import { Home3 } from "./Home3";
import { PersonalBlog } from "./component/Personalblog";
import { NotFound } from "./404";
import { useRoutes } from "react-router-dom";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home3 />
    },

    // {
    //   path: "/personal_webpage",
    //   element: <Home3 />,
    // },
    
    {
      path: "/blog",
      element: <PersonalBlog />
    },

    {
      path: "*",
      element: <NotFound />
    }

  ]);
}