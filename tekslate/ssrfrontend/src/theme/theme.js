import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import Blue from "@material-ui/core/colors/blue";
import orange from "@material-ui/core/colors/orange";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2a32c5',
    },
    secondary: {
      main: orange[500],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    typography: {
      fontFamily: "Poppins",
    },
  },
});

export default theme;
