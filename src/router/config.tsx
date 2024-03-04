import { createBrowserRouter } from "react-router-dom";
import { Login } from "../page/Login";
import { Register } from "../page/Register";
export const router = createBrowserRouter([
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);
