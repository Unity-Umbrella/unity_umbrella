import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import StudentDirectory from "./pages/StudentDirectory/StudentDirectory";

const theme = createTheme();

function App() {
  return (
      <Router>
          <div>
              <Header />
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/student-directory" element={<StudentDirectory/>}/>
                  {/* Add more routes as needed */}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
