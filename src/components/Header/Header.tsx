import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {colors} from "../../styles/colors";
import {Button} from "@mui/material";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: colors.primary }}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    Unity Umbrella
                </Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/student-directory">Students Directory</Button>
                <Button color="inherit" component={Link} to="/house-listing">House Listing</Button>
                <Button color="inherit" component={Link} to="/Login">Login</Button>
                <Button color="inherit" component={Link} to="/contact-us">Contact</Button>
                <Button color="inherit" component={Link} to="/about-us">About Us</Button>
                <Button color="inherit" component={Link} to="/chat">Chat</Button>
                <Button color="inherit" component={Link} to="/Registration">Register</Button>
                <Button color="inherit" component={Link} to="/admin">Admin</Button>
                <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
                <Button color="inherit" component={Link} to="/crud">ADMIN PORTAL</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
