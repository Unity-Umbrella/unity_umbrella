import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');
    const [secretKey, setSecretKey] = useState('');

    const handleLogin = () => {
        if(userType=="Admin" && secretKey!="RichitaR"){
            alert("Invalid Admin")
        }
        else{
            
        }

    }

    return (
        <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <div>
                <input 
                type="radio"
                name="UserType"
                value="User"
                onChange={(e) => setUserType(e.target.value)}
                />{" "}
                User 
                <input
                type="radio"
                name="UserType"
                value="Admin"
                onChange={(e) => setUserType(e.target.value)}
                />{" "}
                Admin
            </div>

            {userType == "Admin" ? (
                <div className="mb-3">
                    <TextField
                    label="Secret Key"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                />

                </div>
            ) : null}




            <form onSubmit={handleLogin}>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setSecretKey(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setSecretKey(e.target.value)}
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

export default Admin;