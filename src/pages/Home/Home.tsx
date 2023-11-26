import React from 'react';
import { Container, Typography, Button,Paper } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { colors } from '../../styles/colors';

const BannerPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    backgroundColor: '#2196f3', // You can change the color to fit your website's theme
    color: 'teritary',
    textAlign: 'center',
    marginTop: theme.spacing(2),
  }));
  
  const JoinButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(2),
    backgroundColor:"#d9ed92",
    color:"black",
    fontWeight:"bold"
  }));

function Home() {
    return (
        <>
        {/* <Header/> */}
        
        <AppBar position="static" style={{ backgroundColor: colors.black }}>
            <Toolbar>
                <img src="images/logoD.jpg" alt="Your Logo" style={{ marginRight: '10px', width: '5vh', height:'5vh'}} /> 
                <Typography variant="h6" component="div">
                    Unity Umbrella
                </Typography>
            </Toolbar>
        </AppBar>

            <section id='main'>
                <div className="header">
                <Paper style={{ position: 'relative',}}>
                    {/* Image */}
                    <img
                        src="images/hbanner.jpeg" // Replace with the actual path to your image
                        alt="Banner Image"
                        style={{ width: '90%', height: '13%', display: 'block' }}
                    />

                    {/* Content */}
                    <div style={{ position: 'absolute', top: '55%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                        <Typography variant="h4" style={{ color: 'black' }}>
                        Welcome to Our Unity Umbrella Community
                        </Typography>
                        <Typography variant="subtitle1" style={{ color: 'black', textTransform:"uppercase" }} paragraph>
                        Connect, Learn, Thrive Together !
                        </Typography>
                        <Typography variant="body1" style={{ marginBottom: '25px' }} paragraph>
                        Embark on a journey of connection and discovery with our vibrant international student community.
                        Whether you're navigating a new country, seeking advice, or forming lifelong friendships, you're in the right place!
                        </Typography>
                        <Button variant="contained" color="primary">
                        Join Now
                        </Button>
                    </div>
                    </Paper>
                    {/* <Container maxWidth="lg"> */}
                        {/* <Grid container spacing={2} alignItems="center">
                        <img src='images/hbanner.jpeg' alt="Header Image" width="100%" /> */}
                            {/* <Grid item xs={12} sm={6}>
                                <img src='images/.jpeg' alt="Header Image" width="100%" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h3" component="h5">
                                    We Connect Student to Student
                                </Typography> */}
                            {/* </Grid> */}
                        {/* </Grid> */}

                    {/* </Container> */}

                </div>

                {/* <BannerPaper elevation={3}>
                    <Typography variant="h4">Welcome to Our Unity Umbrella Community!</Typography>
                    <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>Connect, Learn, Thrive Together!</Typography>
                    <Typography variant="body1" style={{ marginBottom: '25px' }} paragraph>
                        Embark on a journey of connection and discovery with our vibrant international student community.
                        Whether you're navigating a new country, seeking advice, or forming lifelong friendships, you're in the right place!
                    </Typography>
                    <JoinButton
                        variant="contained"
                        href="#join-link" 
                        endIcon={<ArrowForwardIcon />}>
                        Join Now
                    </JoinButton>
                </BannerPaper> */}
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
