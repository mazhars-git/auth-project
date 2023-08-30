import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'services',
            element: <Services />,
        },
        {
            path: 'login',
            element: <Login />,
        },
        
      ]
    },
  ]);