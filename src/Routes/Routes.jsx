import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pagese/Home/Home";
import Login from "../pagese/Home/login/Login";
import SignUp from "../pagese/Home/signUp/SignUp";
import Add from "../pagese/Home/add";
import Blog from "../pagese/Blog";

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
      }
    ],
  },
]);

export default router;
