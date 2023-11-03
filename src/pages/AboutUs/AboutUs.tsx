import React from 'react';
import {Avatar, Container, ButtonBase, Grid, Paper, styled, Typography} from "@mui/material";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";

function About(){

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return(

        <>
            <Container maxWidth="md" sx={{ textAlign: 'center', paddingTop: 8, paddingBottom: 8 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    About Our Home Listing!
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="h4" align="center" gutterBottom>
                Our Mission
                </Typography>
                <br></br>
                <Typography variant="body1" component="p" paragraph>
                    At Unity Umbrella! Our Mission is to help you find your home sweet home. We understand that finding a Home
                    is a very significant and personal decision. Our platform is designed to make the process trustworthy and as 
                    smooth and enjoyable as possible.
                </Typography>
            </Container>

        <br></br>
        <br></br>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 3 }}>
                <>
                    <Paper
                        sx={{
                            p: 2,
                            margin: 'auto',
                            maxWidth: 1200,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            <Grid item xs={2} sm={4} md={4} >
                                <ButtonBase sx={{width: 128, height: 128}}>
                                    <img src='images/abouthouse.jpg' width="300%"/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            We prioritize our customers and aim to provide the best possible experience for both buyers and sellers.
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            We uphold the highest standards of integrity, honesty, and transparency in our dealings.
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            We continuously innovate and improve our platform to make the home buying and selling process more efficient and enjoyable.
                                        </Typography>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            Whether you’ve got a complex real estate question or just need some simple advice, we’re always available to lend you our expertise!
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </>
        </Grid>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Typography variant="h4" align="center" gutterBottom>
                Meet Our Team
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </>
    );
}

export default About;