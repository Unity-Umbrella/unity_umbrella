import React, {Component, ChangeEvent, FormEvent} from 'react';
import Axios from 'axios';
import {TextField, Button, Container, Typography, Grid, Paper, Link} from '@mui/material';
import Header from "../../components/Header/Header";

interface RegistrationPageState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: string;
    firstNameError: string | null;
    lastNameError: string | null;
    emailError: string | null;
    passwordError: string | null;
    dobError: string | null;
}

class RegistrationPage extends Component<{}, RegistrationPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            dob: '',
            firstNameError: null,
            lastNameError: null,
            emailError: null,
            passwordError: null,
            dobError: null,
        };
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({[name]: value} as Pick<RegistrationPageState, keyof RegistrationPageState>);
        this.validateField(name, value);
    };

    validateField = (fieldName: string, value: string) => {
        let error: string | null = null;

        if (fieldName === 'firstName') {
            if (value.trim() === '') {
                error = 'First Name is required';
            }
        } else if (fieldName === 'lastName') {
            if (value.trim() === '') {
                error = 'Last Name is required';
            }
        } else if (fieldName === 'email') {
            if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
                error = 'Invalid email address';
            }
        } else if (fieldName === 'password') {
            if (value.length < 8) {
                error = 'Password must be at least 8 characters';
            }
        } else if (fieldName === 'dob') {
            if (value.trim() === '') {
                error = 'Date of Birth is required';
            } else if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
                error = 'Invalid Date of Birth format (YYYY-MM-DD)';
            }
        }

        this.setState((prevState) => ({
            ...prevState,
            [`${fieldName}Error`]: error,
        }));

        return !error; // Return true if the field is valid, otherwise return false
    };

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const {firstName, lastName, email, password, dob} = this.state;

        const validFirstName = this.validateField('firstName', firstName);
        const validLastName = this.validateField('lastName', lastName);
        const validEmail = this.validateField('email', email);
        const validPassword = this.validateField('password', password);
        const validDob = this.validateField('dob', dob);

        if (validFirstName && validLastName && validEmail && validPassword && validDob) {
            // All fields are valid, proceed with form submission

            // Update the endpoint URL to match Your server
            const registrationEndpoint = 'http://localhost:3001/api/register';

            try {
                // Send a POST request to the server's registration endpoint
                const response = await Axios.post(registrationEndpoint, {
                    firstName,
                    lastName,
                    email,
                    password,
                    dob,
                });

                // Response from the server
                if (response.status === 200) {
                    // Registration was successful, you can redirect the user or perform other actions.
                    console.log('Registration successful!');
                } else {
                    // Registration errors
                    console.error('Registration failed. Please try again.');
                }
            } catch (error) {
                console.error('An error occurred while registering:', error);
            }
        } else {
            // validation errors, do not proceed with submission
        }
    };

    render() {
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
                    }}
                >
                    <Grid container spacing={3}>
                        {/* Image Column */}
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
                        {/* Form Column */}
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
                                    Join Us Today
                                </Typography>
                                <Typography variant="subtitle1" style={{marginBottom: '2rem', color: '#555'}}>
                                    Unlock a world of opportunities by registering with us. Join our community now!
                                </Typography>
                                <form onSubmit={this.handleSubmit} style={{width: '100%'}}>
                                    {/* Your existing form code here */}
                                    <TextField
                                        fullWidth
                                        label="First Name"
                                        name="firstName"
                                        value={this.state.firstName}
                                        onChange={this.handleInputChange}
                                        error={!!this.state.firstNameError}
                                        helperText={this.state.firstNameError}
                                        variant="outlined"
                                        style={{marginBottom: '1rem'}}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Last Name"
                                        name="lastName"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        error={!!this.state.lastNameError}
                                        helperText={this.state.lastNameError}
                                        variant="outlined"
                                        style={{marginBottom: '1rem'}}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        error={!!this.state.emailError}
                                        helperText={this.state.emailError}
                                        variant="outlined"
                                        style={{marginBottom: '1rem'}}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Password"
                                        name="password"
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        error={!!this.state.passwordError}
                                        helperText={this.state.passwordError}
                                        variant="outlined"
                                        style={{marginBottom: '1rem'}}
                                    />
                                    <TextField
                                        fullWidth
                                        label="Date of Birth (YYYY-MM-DD)"
                                        name="dob"
                                        value={this.state.dob}
                                        onChange={this.handleInputChange}
                                        error={!!this.state.dobError}
                                        helperText={this.state.dobError}
                                        variant="outlined"
                                        style={{marginBottom: '1rem'}}
                                    />
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        style={{
                                            backgroundColor: '#2196f3',
                                            color: '#fff',
                                            fontWeight: 600,
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        Register
                                    </Button>
                                </form>
                                <Typography variant="body2" style={{color: '#555'}}>
                                    Already have an account?{' '}
                                    <Link href="/login" style={{color: '#2196f3', fontWeight: 600}}>
                                        Log in here
                                    </Link>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </>
        );
    }
}

export default RegistrationPage;
