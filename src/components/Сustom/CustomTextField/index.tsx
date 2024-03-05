import { TextField, TextFieldProps, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiInputBase-input": {
      padding: "7px 10px",
      boxSizing: "border-box",
    },
    "& .MuiOutlinedInput-input": {
      color: "#000000",
    },
    "& .MuiOutlinedInput-root": {
      width: "320px",
      height: "34px",

      "& fieldset": {
        borderRadius: "4px",
        borderColor: "#000000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FBBC04",
      },
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000000",
      borderWidth: "2px",
    },
  },
}));

export const CustomTextField = (props: TextFieldProps) => {
  const classes = useStyles();

  return <TextField classes={{ root: classes.root }} {...props} />;
};
