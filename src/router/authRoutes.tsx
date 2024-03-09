import { Login } from "../page/Login";
import { Register } from "../page/Register";

export const authRoutes = [
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
];
