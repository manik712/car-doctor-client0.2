import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pagese/Home/Home";
import Login from "../pagese/Home/login/Login";
import SignUp from "../pagese/Home/signUp/SignUp";

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
    ],
  },
]);

export default router;
