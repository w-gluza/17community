import { createMuiTheme } from "@material-ui/core/styles";
import "../sass/abstracts.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#60a3d9"
      // dark: "#002884",
      // contrastText: "#fff"
    },
    secondary: {
      main: "#11cb5f"
    }
  },
  overrides: {
    MuiInput: {
      root: {
        color: "var(--color-secondary)"
      }
    },
    MuiInputBase: {
      input: {
        color: "var(--color-white)"
      }
    },
    MuiFormLabel: {
      root: {
        color: "var(--color-white)"
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: "var(--color-white)"
      },
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "var(--color-primary)"
        }
      }
    }
  }
});

export default theme;
