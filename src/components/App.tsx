import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "../global.css";
import { router } from "../router/config";

export const App = () => {
  return (
    <div className="page">
      <CssBaseline />
      <RouterProvider router={router} />
    </div>
  );
};
