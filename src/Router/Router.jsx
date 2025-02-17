import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Error from "../Pages/Error";
// import Error from "../Pages/Error";

const router =createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Layout></Layout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/About",
            element:<About></About>
        },
        {
            path:"/Career",
            element:<Career></Career>
        }
      ]
    },
  ]);



  export default router