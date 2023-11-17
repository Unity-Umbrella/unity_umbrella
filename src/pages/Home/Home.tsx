import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Grid from '@mui/material/Grid';





function Home() {
    return (
        <>
            <section id='main'>
                <div className="header">
                    <Container maxWidth="lg">
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <img src='images/headerIMG.jpg' alt="Header Image" width="100%" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h2" component="h1">
                                    We Connect Student to Student
                                </Typography>
                            </Grid>
                        </Grid>

                    </Container>

                </div>
                <section id="hero">
                    <div className='hero'>
                        <h1>Welcome to Your Unity Umbrella</h1>
                        <p>Connecting Cultures, Creating Opportunities.</p>
                        <a href="#">Get Started</a>
                    </div>
                </section>

                <section id="feature">
                    <h2> Empowering Your International Student Journey</h2>
                <div className="maincard">


                    <div className="card">
                       <a href="/house-listing"><img src="images/mm.jpg" alt="" width="75%"  /></a> 
                            <div className="container">
                                <h4><b></b></h4>
                                <p>Accomodation</p>
                            </div>
                    </div>
                    <div className="card">
                       <a href="/chat  "><img src="images/acc.jpg" alt="" width="75%"  /></a> 
                            <div className="container">
                                <h4><b></b></h4>
                                <p>Chat with students</p>
                            </div>
                    </div>
                </div>

                </section>

            </section>

            <Footer/>
        </>
    );
}


export default Home;
