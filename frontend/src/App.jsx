// Third party
import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline'

// Custom


// Custom theme module. Override default colors, breakpoints etc. to match customer' requirements
const themeLight = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 641,
      laptop: 1008
    }
  },
  palette: {
    background: {
      default: "#9a9165",
      paper: "#9a9165"
    },
  }
})

const themeDark = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 641,
      laptop: 1008
    }
  },
  palette: {
    mode: 'dark',
  },
})


const App = (props) => {
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      Initial Setup
    </ThemeProvider>
  );
}

export default App;
