import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { colors } from '../../styles/colors';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from "../../../public/images/logodesign.svg";
const Header: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'Students Directory', link: '/student-directory' },
    { text: 'House Listing', link: '/house-listing' },
    { text: 'Login', link: '/login' },
    { text: 'Contact', link: '/contact-us' },
    { text: 'About Us', link: '/about-us' },
    { text: 'Chat', link: '/chat' },
    { text: 'Register', link: '/registration' },
    { text: 'Admin', link: '/admin' },
    { text: 'Dashboard', link: '/dashboard' },
    { text: 'CRUD', link: '/crud' },
    {text: 'Verify',link: '/verify'}
  ];

  return (
    <AppBar position="static" style={{ backgroundColor: colors.black }}>
        <Toolbar>
        <img src="images/logoD.jpg" alt="Your Logo" style={{ marginRight: '10px', width: '5vh', height:'5vh'}} /> 

        {isSmallScreen ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem
                    button
                    key={item.text}
                    component={Link}
                    to={item.link}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={item.text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.link}
              >
                {item.text}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
