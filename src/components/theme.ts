import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          backgroundColor: "#fbbc04",
          border: "1px solid #c6a33b",
          textTransform: "none",
          fontFamily: '"Inter", Arial, Helvetica, sans-serif',
          "&:hover": {
            backgroundColor: "#e1a306",
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          width: "230px",
          backgroundColor: "#2E2E33",
          color: "#ffffff",
        },
      },
    },
  },
});
