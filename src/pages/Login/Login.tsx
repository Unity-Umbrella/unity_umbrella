import React, {useState} from 'react';
import {Container, TextField, Button, Typography, Grid, Paper, Link} from '@mui/material';
import Header from "../../components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import StudentDirectory from "../StudentDirectory/StudentDirectory";
import UserProfile from "../UserProfile/UserProfile";
import HouseListing from "../HouseListing/HouseListing";
import About from "../AboutUs/AboutUs";
import Chatpg from "../ChatPage/ChatPage";
import RegistrationPage from "../Registration/Registration";
import ContactUs from "../ContactUs/ContactUs";
import Admin from "../AdminPortal/Admin";
import Dashboard from "../Dashboard/dashboard";
import Crud from "../Crud/Crud";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: any) => {
        e.preventDefault();
        console.log("we are coming here for login");
        try {
            const response = await fetch('http://localhost:3001/api/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email, password: password})
            });
            console.log(response);

            if (!response.ok) {
                console.log("error is there: user not found");
                throw new Error('User not found');
            }

            // If response is ok, redirect or perform other actions
            console.log("Login Success");
        } catch (error) {
            console.log("error is there", error);
            setError('Invalid email or password');
        }
    }

    return (
        <>
            <div>
                <Header/>
            </div>
        <Container
            maxWidth="md"
            style={{
                marginTop: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                padding: '2rem', // Added padding
                height: '1000px', // Added height
                width: '70%',
            }}
        >
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <Paper
                        elevation={3}
                        style={{
                            padding: '2rem',
                            borderRadius: '0 8px 8px 0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            boxSizing: 'border-box', // Add this line to include padding in the height calculation
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="h1"
                            gutterBottom
                            style={{
                                fontWeight: 600,
                                fontSize: '2.5rem',
                                letterSpacing: '0.02em',
                                color: '#2196f3',
                            }}
                        >
                            Log In
                        </Typography>
                        <Typography variant="subtitle1" style={{marginBottom: '2rem', color: '#555'}}>
                            Login to sync up your data.
                        </Typography>
                        <form onSubmit={handleLogin}>
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
                                style={{marginTop: '20px'}}
                            >
                                Login
                            </Button>
                        </form>
                        {error && (
                            <Typography variant="body1" color="error" align="center">
                                {error}
                            </Typography>
                        )}
                        <Typography variant="body2" style={{color: '#555'}}>
                            Already have an account?{' '}
                            <Link href="/login" style={{color: '#2196f3', fontWeight: 600}}>
                                Log in here
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    {/* Replace the src with the URL or path of your image */}
                    <img
                        src="images/register_img.jpg"
                        alt="Registration Image"
                        style={{
                            width: '100%',
                            height: '900px',
                            borderRadius: '2px',

                        }}
                    />
                </Grid>
            </Grid>
        </Container>
        </>
    );
}

export default LoginPage;
