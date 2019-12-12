import { createMuiTheme } from "@material-ui/core/styles";
import "../sass/abstracts.scss";

const theme = createMuiTheme({
  typography: {
    body2: {
      fontSize: "16px"
    }
  },
  palette: {
    primary: {
      main: "#60a3d9"
    },
    secondary: {
      main: "#eb6475"
    },
    error: {
      main: "#eb6475"
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
    MuiInputLabel: {
      outlined: {
        transform: "translate(14px, 15px) scale(1)"
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
    },
    MuiAvatar: {
      root: {
        width: "75px",
        height: "75px",
        margin: "0px"
      }
    }
  }
});

export default theme;
