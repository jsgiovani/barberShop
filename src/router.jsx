import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Portafolio from "./pages/Portafolio";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
           index:true,
           element: <Home/>
        },

        {
            path:'/about',
            element:<About/>
        },

        {
            path:'/services',
            element: <Services/>
        },

        {
            path:'/pricing',
            element: <Pricing/>
        },

        {
            path:'/portafolio',
            element:<Portafolio/>
        },

        {
            path:'/contact',
            element:<Contact/>
        },

      ],
    },
  ]);


export default router;
