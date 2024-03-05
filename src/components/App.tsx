import { CssBaseline } from "@mui/material";

export const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page">
      <CssBaseline />
      {children}
    </div>
  );
};
