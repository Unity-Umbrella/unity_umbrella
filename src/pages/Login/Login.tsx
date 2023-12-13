import React, {useState} from 'react';
import {Container, TextField, Button, Typography, Grid, Paper, Link} from '@mui/material';
import AppBar from "@mui/material/AppBar";
import {colors} from "../../styles/colors";
import Toolbar from "@mui/material/Toolbar";
import UserData from "../../common/UserProfile";
import {useNavigate} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { margin } from '@mui/system';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            });
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            const user = data.user;
            UserData.setName(user.user_firstName, user.user_lastName);
            UserData.setUserId(user.user_id);
            UserData.setAccessType(data.role);

            navigate("/");
        } catch (error) {
            setError('Invalid email or password');
        }
    }

    return (
        <>
            <AppBar position="static" style={{backgroundColor: colors.black}}>
                <Toolbar>
                    <img src="images/logoD.jpg" alt="Your Logo"
                         style={{marginRight: '10px', width: '5vh', height: '5vh'}}/>
                    <Typography variant="h6" component="div">
                        Unity Umbrella
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container
                maxWidth="md"
                style={{
                    marginTop: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#fff',
                    padding: '2.15rem', // Added padding
                    height: '65%', // Added height
                    width: '80%',
                }}
            >
                <Grid container spacing={3}>
        
                    <Grid item xs={12} sm={6}>
                            <form onSubmit={handleLogin} style={{marginTop:'5.5rem'}}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextField
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                    fullWidth
                                    margin="normal"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    style={{marginTop: '3rem',backgroundColor:colors.green,fontSize:'1.25rem'}}
                                >
                                    Login
                                </Button>
                            </form>
                            {error && (
                                <Typography variant="body1" color="error" align="center">
                                    {error}
                                </Typography>
                            )}
                            <br/>
                            <Typography variant="body2" style={{color: '#555',marginLeft:'3rem'}}>
                                Don't have an account yet?{' '}
                                <Link href="/registration" style={{color: '#2196f3', fontWeight: 600}}>
                                    Register here
                                </Link>
                            </Typography>
                       
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        {/* Replace the src with the URL or path of your image */}
                        <img
                            src="images/register_img.jpg"
                            alt="Registration Image"
                            style={{
                                width: '100%',
                                height: '600px',
                                borderRadius: '2px',

                            }}
                        />
                    </Grid>
                </Grid>
            </Container>
            <Footer/>
        </>
    );
}

export default LoginPage;
