import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import About from "../Pages/About";
import Career from "../Pages/Career";
// import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ShowNews from "../Pages/ShowNews";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import Details from "../Pages/Details";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <Error />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "",
            element: <Navigate to={"/news/08"}></Navigate>,
          },
          {
            path: "/news/:category_id",
            element: <ShowNews></ShowNews>,
            loader: async ({ params }) => {
              const response = await fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.category_id}`
              );
              const data = await response.json();
              return data;
            },
          },
        ],
      },
      {
        path: "/details/:id",
        element: <PrivateRouter><Details></Details></PrivateRouter>,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://openapi.programming-hero.com/api/news/${params.id}`
          );
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Career",
        element: <Career />,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ],
  },
]);

export default router;