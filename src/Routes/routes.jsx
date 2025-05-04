import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";


export const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
     
      ]
    },
    {
      path:'/login',
      element: <Login></Login>
    }
   
   
  ]);
