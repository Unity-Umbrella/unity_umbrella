import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import StudentDirectory from "./pages/StudentDirectory/StudentDirectory";
import HouseListing from './pages/HouseListing/HouseListing';
import LoginPage from "./pages/Login/Login";
import About from "./pages/AboutUs/AboutUs";
import Chatpg from "./pages/ChatPage/ChatPage";
import Admin from "./pages/AdminPortal/Admin";
import Dashboard from "./pages/Dashboard/dashboard";
import Sidebar from './components/Sidebar/Sidebar';
import { MultiChatWindow } from 'react-chat-engine-advanced';
import UserProfile from "./pages/UserProfile/UserProfile";
import RegistrationPage from './pages/Registration/Registration';
import ContactUs from './pages/ContactUs/ContactUs';
import { Table } from '@mui/material';
import Crud from './pages/Crud/Crud';

const theme = createTheme();

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/student-directory" element={<StudentDirectory/>}/>
                    <Route path="/student-directory/:userId" element={<UserProfile/>}/>
                    <Route path="/house-listing" element={<HouseListing/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/about-us" element={<About/>}/>
                    <Route path="/chat" element={<Chatpg/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/crud" element={<Crud/>}/>
                    {/* Add more routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
