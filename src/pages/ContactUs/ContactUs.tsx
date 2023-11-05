import React, { useState, FormEvent } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

function ContactUs() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate email before submission
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
            return;
        }

      
        setEmailError('');

        // Handle form submission here, e.g., send the data to Our backend API
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);
    }

    return (
        <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: 8, paddingBottom: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
            Contact Us
        </Typography>
        <Typography variant="body1" component="p" paragraph>
            We are here to help! If you have any questions or need assistance, please feel free to reach out to us.
        </Typography>
        <Typography variant="body1" component="p" paragraph>
            You can contact us via email at: contact@unityumbrella.com
        </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    margin="normal"
                />
                <TextField
                    label="Email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    margin="normal"
                    error={!!emailError}
                    helperText={emailError}
                />
                <TextField
                    label="Message"
                    multiline
                    rows={4}
                    fullWidth
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                    Get in Touch
                </Button>
            </form>
        </Container>
    );
}

export default ContactUs;
