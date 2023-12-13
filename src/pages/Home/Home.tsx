import React from 'react';
import {Card, CardContent,Container, Typography, Button, Paper,Grid} from '@mui/material';

import Footer from "../../components/Footer/Footer";
import {styled} from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {colors} from '../../styles/colors';
import {useNavigate} from "react-router-dom";
import UserData from "../../common/UserProfile";
import Header from "../../components/Header/Header";

const BannerPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(3),
    backgroundColor: '#2196f3', // You can change the color to fit your website's theme
    color: 'teritary',
    textAlign: 'center',
    marginTop: theme.spacing(2),
}));



const bannerStyle = {
    background: 'linear-gradient(to right, #2196F3, #3F51B5)',
    color: '#fff',
    padding: '64px 0',
    textAlign: 'center',
  };

  const bannerContentStyle = {
    maxWidth: '800px',
    margin: 'auto',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px', // Optional: Add rounded corners
  };

  const learnMoreButtonStyle = {
    marginTop: '16px',
    color: '#fff',
    borderColor: '#fff',
  };
function Home() {
    const navigate = useNavigate();
    console.log(UserData.getUserId());
    return (
        <>
            {UserData.getUserId() == "" || UserData.getUserId() == "undefined" ?
                <AppBar position="static" style={{backgroundColor: colors.primary}}>
                    <Toolbar>
                        <img src="images/logoD.jpg" alt="Your Logo"
                             style={{marginRight: '10px', width: '10vh', height: '10vh'}}/>
                        <Typography variant="h6" component="div">
                           UNITY UMBRELLA
                        </Typography>
                    </Toolbar>
                </AppBar> : <Header/>}


            <section id='main'>
                <div className="header">
                    {/* <Paper style={{position: 'relative',}}>
                       
                        <img
                            src="images/hbanner.jpeg" // Replace with the actual path to your image
                            alt="Banner Image"
                            style={{width: '90%', height: '13%', display: 'block'}}
                        />

                        
                        <div style={{
                            position: 'absolute',
                            top: '55%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            textAlign: 'center'
                        }}>
                            <Typography variant="h4" style={{color: 'black'}}>
                                Welcome to Our Unity Umbrella Community
                            </Typography>
                            <Typography variant="subtitle1" style={{color: 'black', textTransform: "uppercase"}}
                                        paragraph>
                                Connect, Learn, Thrive Together !
                            </Typography>
                            <Typography variant="body1" style={{marginBottom: '25px'}} paragraph>
                                Embark on a journey of connection and discovery with our vibrant international student
                                community.
                                Whether you're navigating a new country, seeking advice, or forming lifelong
                                friendships, you're in the right place!
                            </Typography>
                            <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
                                Join Now
                            </Button>
                        </div>
                    </Paper> */}
       
       <Container>
        <Grid container  alignItems="left" marginLeft={1} columnSpacing={10}>
          <Grid item xs={6} md={4}>
          <img
                            src="images/banner.jpg" // Replace with the actual path to your image
                            alt="Banner Image"
                            style={{width: '120%', display: 'block'}}
                        />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom>
              Welcome to Our Unity Umbrella Community
            </Typography>
            <Typography variant="subtitle1" paragraph>
              CONNECT, LEARN, THRIVE TOGETHER!
            </Typography>
            <Typography variant="body1" paragraph>
              Embark on a journey of connection and discovery with our vibrant international student community.
              Whether you're navigating a new country, seeking advice, or forming lifelong friendships, you're in the right place!
            </Typography>
            <Button variant="outlined" style={learnMoreButtonStyle}>
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    

                </div>

                {/* <section id="feature">
                    <h2> Empowering Your International Student Journey</h2>
                    <div className="maincard">


                        <div className="card">
                            <a href="/house-listing"><img src="images/mm.jpg" alt="" width="75%"/></a>
                            <div className="container">
                                <h4><b></b></h4>
                                <p>Accomodation</p>
                            </div>
                        </div>
                        <div className="card">
                            <a href="/chat  "><img src="images/acc.jpg" alt="" width="75%"/></a>
                            <div className="container">
                                <h4><b></b></h4>
                                <p>Chat with students</p>
                            </div>
                        </div>
                    </div>

                </section> */}
                <Container>
      <Grid container justifyContent="center">
        <Grid item>
          <Card style={{width: '200px',height: '200px',textAlign: 'center',margin: '16px',}}>
            <CardContent>
              <Typography variant="h6">Register</Typography>
              <Button variant="contained" color="primary" onClick={() => navigate("/registration")}>
                Register
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card style={{width: '200px',height: '200px',textAlign: 'center',margin: '16px',}}>
            <CardContent>
              <Typography variant="h6">Login</Typography>
              <Button variant="contained" color="primary" onClick={() => navigate("/login")}>
                Login
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>

            </section>

            <Footer/>
        </>
    );
}


export default Home;
