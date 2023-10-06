import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {colors} from "../../styles/colors";
import {Button} from "@mui/material";

const Header: React.FC = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: colors.primary }}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    Unity Umbrella
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Students Directory</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">About Us</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
