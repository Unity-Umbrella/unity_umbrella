import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {colors} from "../../styles/colors";

const Header: React.FC = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: colors.primary }}>
            <Toolbar>
                <Typography variant="h6" component="div">
                    Unity Umbrella
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
