import React, { Component, ChangeEvent, FormEvent } from 'react';
import Axios from 'axios';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

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
        const { name, value } = event.target;
        this.setState({ [name]: value } as Pick<RegistrationPageState, keyof RegistrationPageState>);
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

        this.setState(prevState => ({
            ...prevState,
            [`${fieldName}Error`]: error,
        }));

        return !error; // Return true if the field is valid, otherwise return false
    };

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { firstName, lastName, email, password, dob } = this.state;

        const validFirstName = this.validateField('firstName', firstName);
        const validLastName = this.validateField('lastName', lastName);
        const validEmail = this.validateField('email', email);
        const validPassword = this.validateField('password', password);
        const validDob = this.validateField('dob', dob);

        if (validFirstName && validLastName && validEmail && validPassword && validDob) {
            // All fields are valid, proceed with form submission

            // Update the endpoint URL to match Our server
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
            // validation errors , do not proceed with submission
        }
    };

    render() {
        return (
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" gutterBottom>
                    Registration 
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="First Name"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleInputChange}
                                error={!!this.state.firstNameError}
                                helperText={this.state.firstNameError}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleInputChange}
                                error={!!this.state.lastNameError}
                                helperText={this.state.lastNameError}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                error={!!this.state.emailError}
                                helperText={this.state.emailError}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                error={!!this.state.passwordError}
                                helperText={this.state.passwordError}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Date of Birth (YYYY-MM-DD)"
                                name="dob"
                                value={this.state.dob}
                                onChange={this.handleInputChange}
                                error={!!this.state.dobError}
                                helperText={this.state.dobError}
                            />
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">
                        Register
                    </Button>
                </form>
            </Container>
        );
    }
}

export default RegistrationPage;
