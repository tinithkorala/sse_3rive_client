// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blueGrey, grey } from "@mui/material/colors";
import { themeModes } from "../utils/uiUtils";

// Light mode color palette
const lightPalette = {
  background: {
    default: grey[50],
    paper: grey[50],
  },
  text: {
    primary: grey[900],
    secondary: grey[900],
  },
};

// Dark mode color palette
const darkPalette = {
  background: {
    default: blueGrey[900],
    paper: blueGrey[900],
  },
  text: {
    primary: grey[100],
    secondary: grey[200],
  },
};

const theme = (mode) => {
  const isDarkMode = mode === themeModes?.DARK;

  return responsiveFontSizes(
    createTheme({
      direction: "ltr",
      palette: {
        mode: mode,
        text: isDarkMode ? darkPalette.text : lightPalette.text,
        action: {
          hoverOpacity: 0.08,
          selectedOpacity: 0.16,
          disabledOpacity: 0.36,
          focusOpacity: 0.16,
          activedOpacity: 0.24,
        },
        background: isDarkMode
          ? darkPalette.background
          : lightPalette.background,
      },
      typography: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: {
            "*::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "*::-webkit-scrollbar-track": {
              backgroundColor: grey[200],
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: grey[400],
              borderRadius: "10px",
              border: `2px solid ${grey[400]}`,
            },
            "*::-webkit-scrollbar-thumb:hover": {
              backgroundColor: grey[500],
            },
            ".hide": {
              display: "none !important",
            },
            body: {
              margin: 0,
              padding: 0,
              backgroundColor: "#fff",
              color: "#000",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
            },
          },
        },
        MuiToolbar: {
          styleOverrides: {
            root: {
              "&.layout-toolbar": {
                minHeight: "54px !important",
              },
            },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: {
              margin: 16,
            },
          },
        },
        MuiContainer: {
          styleOverrides: {
            root: {
              "&.content-container": {
                padding: 0
              }
            }
          }
        }
      },
    })
  );
};

export default theme;
