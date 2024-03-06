import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "../global.css";
import { router } from "../router/config";
import { theme } from "./theme";

export const App = () => {
  return (
    <div className="page">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};
