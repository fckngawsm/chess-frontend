import { createBrowserRouter } from "react-router-dom";
import { Root } from "../components/Root/Root";

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { authRoutes } from "./authRoutes";

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
      ...authRoutes,
    ],
  },
]);
