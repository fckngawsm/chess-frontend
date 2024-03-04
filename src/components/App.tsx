import { RouterProvider } from "react-router-dom";
import { router } from "../router/config";

export const App = () => {
  return <RouterProvider router={router} />;
};
