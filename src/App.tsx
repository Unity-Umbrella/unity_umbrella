import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/Home'; // Assuming Home.tsx is in the views folder

const theme = createTheme();

function App() {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
  );
}

export default App;
