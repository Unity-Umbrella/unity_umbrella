import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

    }

    return (
        <Container maxWidth="sm" style={{ marginTop: '100px' }}>
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
                    style={{ marginTop: '20px' }}
                >
                    Login
                </Button>
            </form>
        </Container>
    );
}

export default LoginPage;