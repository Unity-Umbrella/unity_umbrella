import React from 'react';
import Home from './pages/Home/Home';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header";
import StudentDirectory from "./pages/StudentDirectory/StudentDirectory";
import HouseListing from './pages/HouseListing/HouseListing';
import LoginPage from "./pages/Login/Login";
import About from "./pages/AboutUs/AboutUs";
import Chatpg from "./pages/ChatPage/ChatPage";
import Admin from "./pages/AdminPortal/Admin";
import UserProfile from "./pages/UserProfile/UserProfile";
import RegistrationPage from './pages/Registration/Registration';
import ContactUs from './pages/ContactUs/ContactUs';
import Crud from './pages/Crud/Crud';
import VerificationPage from "./pages/Verification/Verification";
import Dashboard from './pages/Dashboard/dashboard';
import UserData from "./common/UserProfile";

function App() {
console.log(UserData.isLoggedIn());
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/student-directory" element={<StudentDirectory/>}/>*/}
                {/*<Route path="/student-directory/:userId" element={<UserProfile/>}/>*/}
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/about-us" element={<About/>}/>

                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/contact-us" element={<ContactUs />} />

                {/* Add more routes as needed */}
                <Route
                    path="/*"
                    element={UserData.isLoggedIn() ? <AuthenticatedRoutes /> : <Navigate to="/login" />}
                />
            </Routes>


        </Router>
    );
}
const AuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route path="/student-directory" element={<StudentDirectory />} />
            <Route path="/student-directory/:userId" element={<UserProfile />} />
            <Route path="/chat" element={<Chatpg/>}/>
            <Route path="/house-listing" element={<HouseListing />} />
            {/* Add more authenticated routes */}
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/crud" element={<Crud/>}/>
            <Route path="/verify" element={<VerificationPage/>}/>
        </Routes>
    );
};

export default App;
