import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pagese/Home/Home";
import Login from "../pagese/Home/login/Login";
import SignUp from "../pagese/Home/signUp/SignUp";
import Add from "../pagese/Home/add";
import Blog from "../pagese/Blog";
import CheckOut from "../pagese/CheckOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path:"/add",
        element:<Add></Add>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/checkout/:id",
        element:<CheckOut></CheckOut>,
        loader:({params})=>fetch(`http://localhost:8000/services/${params.id}`)
      }
    ],
  },
]);

export default router;
