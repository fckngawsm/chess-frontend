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
  },
});
