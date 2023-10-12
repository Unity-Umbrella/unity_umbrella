import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import StudentDirectory from "./pages/StudentDirectory/StudentDirectory";
import HouseListing from './pages/HouseListing/HouseListing';
import LoginPage from "./pages/Login/Login";


const theme = createTheme();

function App() {
  return (
      <Router>
          <div>
              <Header />
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/student-directory" element={<StudentDirectory/>}/>
                  <Route path="/house-listing" element={<HouseListing/>}/>
                  <Route path="/login" element={<LoginPage/>}/>
                  {/* Add more routes as needed */}
              </Routes>
          </div>
      </Router>
  );
}

export default App;
