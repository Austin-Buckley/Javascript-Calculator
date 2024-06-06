import { createTheme } from "@mui/material/styles";

export const opColors = {
  main: "#ffa726",
  dark: "#ffb74d",
};

export const numColors = {
  main: "#42a5f5",
  dark: "#90caf9",
};

export const clearColors = {
  main: "#d32f2f",
  dark: "#e57373",
};

export const textColor = "white";

export const theme = createTheme({
  palette: {
    op: {
      main: opColors.main,
      dark: opColors.dark,
      contrastText: textColor,
    },
    num: {
      main: numColors.main,
      dark: numColors.dark,
      contrastText: textColor,
    },
    clear: {
      main: clearColors.main,
      dark: clearColors.dark,
      contrastText: textColor,
    },
  },
});

