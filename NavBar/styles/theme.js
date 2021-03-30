import { createMuiTheme } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: "#fed8d1", //light orange
      main: "#fa7c64", //orange
      dark: "#c25061", //brown
      contrastText: "#fafafa",
    },
    secondary: {
      light: "#f8e8ef", //light baby pink
      main: "#f161a3", //pink
      dark: "#c48185", //brownish pink
      contrastText: "#fafafa",
    },
    darkOrange: "#8f7570",
    minOrange: "#f7cbc2",
    darkGray: "#212121",
    subGray: "#a8a6a5",
    openTitle: "#3f4771",
    protectedTitle: pink["400"],
    type: "light",
  },
});

export default theme;
