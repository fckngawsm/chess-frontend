import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root/Root";
import { Login } from "../page/Login";
import { Register } from "../page/Register";

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);
