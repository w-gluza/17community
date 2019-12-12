import { createMuiTheme } from "@material-ui/core/styles";
import "../sass/abstracts.scss";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#60a3d9"
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
        color: "var(--color-black)"
      }
    },
    MuiFormLabel: {
      root: {
        color: "var(--color-black)"
      }
    },
    MuiOutlinedInput: {
      input: {
        padding: "12.5px 14px"
      },
      notchedOutline: {
        borderColor: "rgba(50,50,74, 0.5)"
      },
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "var(--color-primary)"
        }
      }
    },
    MuiButton: {
      label: {
        color: "var(--color-white)"
      }
    }
  }
});

export default theme;