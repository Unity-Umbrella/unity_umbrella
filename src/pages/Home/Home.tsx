import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <>
            <Header /> {/* Include the Header component */}
            <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: 8, paddingBottom: 8 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Unity Umbrella!
                </Typography>
                <Typography variant="h5" component="p" paragraph>
                    Your one-stop solution for all the resources and support you need as an international student.
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    Explore our services, find information on visas, accommodation, cultural tips, and more.
                </Typography>
                <Button variant="contained" color="primary">
                    Get Started
                </Button>
            </Container>
            <Footer/>
        </>
    );
}

export default Home;
