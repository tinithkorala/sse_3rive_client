// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import {
  amber,
  blue,
  blueGrey,
  deepPurple,
  green,
  grey,
  indigo,
  red,
} from "@mui/material/colors";
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
        primary: {
          main: deepPurple[500],
          light: deepPurple[200],
          dark: deepPurple[700],
        },
        secondary: {
          main: indigo[500],
          light: indigo[200],
          dark: indigo[700],
        },
        success: {
          main: green[500],
          light: green[200],
          dark: green[700],
        },
        error: {
          main: red[500],
          light: red[200],
          dark: red[700],
        },
        warning: {
          main: amber[500],
          light: amber[200],
          dark: amber[700],
        },
        info: {
          main: blue[500],
          light: blue[200],
          dark: blue[700],
        },
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
            "form-label": {
              marginBottom: 0,
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
                padding: 0,
              },
              "&.guest-layout-container": {
                height: "100dvh",
                width: "100dvw",
                maxWidth: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: grey[200],
              },
            },
          },
        },
        MuiFormControl: {
          styleOverrides: {
            root: {
              "&.MuiFormControl-root": {
                margin: "12px 0px",
                width: "100%",
              },
              "& .MuiFormLabel-root": {
                top: "-7px",
              },
              "&.form-input-element": {
                marginBottom: 0,
                marginRight: 0,
                marginLeft: 0,
                marginTop: 4,
                "& .MuiInputBase-root input": {
                  margin: "0px",
                  padding: "8.5px",
                  paddingLeft: "14px",
                },
              },
              "& .input-datepicker .MuiButtonBase-root .MuiSvgIcon-root": {
                width: "0.85em",
                height: "0.85em",
              },
              "& .MuiAutocomplete-root .MuiFormControl-root": {
                margin: "0px",
                width: "100%",
                "& .MuiInputBase-root": {
                  margin: "0px",
                  padding: "8.5px",
                  paddingLeft: "14px",
                },
                "& input": {
                  padding: "0px",
                },
              },
              "& .multi-select-dropdown .MuiInputBase-root": {
                padding: "5.5px !important",
              },
            },
          },
        },
        MuiTextField: {
          styleOverrides: {
            root: {
              "& .MuiFormLabel-root": {
                top: 0,
              },
              "&.narrow-text-field": {
                "&.MuiFormControl-root , & .MuiInputBase-root": {
                  margin: 0,
                },
                "& .MuiInputBase-input": {
                  padding: 0,
                },
              },
            },
          },
        },
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              fontSize: "1rem",
            },
          },
        },
        MuiDialog: {
          styleOverrides: {
            root: {
              "& .MuiDialogTitle-root": { fontSize: "2rem" },
            },
          },
        },
        MuiListItemButton: {
          styleOverrides: {
            root: {
              "&.active": {
                background: isDarkMode ? grey[900] : grey[300],
                color: isDarkMode ? grey[300] : grey[900],
              },
            },
          },
        },
      },
    })
  );
};

export default theme;
