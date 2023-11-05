import React, {useState} from 'react';
import {Container, TextField, Button, Typography} from '@mui/material';

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
            console.log("error is there",error);
            setError('Invalid email or password');
        }
    }

    return (
        <Container maxWidth="sm" style={{marginTop: '100px'}}>
            <Typography variant="h4" align="center" gutterBottom>
                Login
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
        </Container>
    );
}

export default LoginPage;
