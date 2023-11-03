import React, { Component, ChangeEvent, FormEvent } from 'react';
import Axios from 'axios';

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
        const updatedState: Partial<RegistrationPageState> = {
            firstNameError: null,
            lastNameError: null,
            emailError: null,
            passwordError: null,
            dobError: null,
        };

        if (fieldName === 'firstName') {
            if (value.trim() === '') {
                updatedState.firstNameError = 'First Name is required';
            }
        } else if (fieldName === 'lastName') {
            if (value.trim() === '') {
                updatedState.lastNameError = 'Last Name is required';
            }
        } else if (fieldName === 'email') {
            if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
                updatedState.emailError = 'Invalid email address';
            }
        } else if (fieldName === 'password') {
            if (value.length < 8) {
                updatedState.passwordError = 'Password must be at least 8 characters';
            }
        } else if (fieldName === 'dob') {
            if (value.trim() === '') {
                updatedState.dobError = 'Date of Birth is required';
            }
            else if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
                updatedState.dobError = 'Invalid Date of Birth format (YYYY-MM-DD)';
            }
            // You can add more specific DOB validation here if needed
        }

        this.setState((prevState) => ({
            ...prevState,
            ...updatedState,
        }));
    };

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { firstName, lastName, email, password, dob } = this.state;

        // Validate the fields before submitting
        this.validateField('firstName', firstName);
        this.validateField('lastName', lastName);
        this.validateField('email', email);
        this.validateField('password', password);
        this.validateField('dob', dob);

        // Check if any field is empty
        if (
            firstName.trim() === '' ||
            lastName.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            dob.trim() === ''
        ) {
            // If any field is empty, set an error message
            this.setState({
                firstNameError: firstName.trim() === '' ? 'First Name is required' : null,
                lastNameError: lastName.trim() === '' ? 'Last Name is required' : null,
                emailError: email.trim() === '' ? 'Email is required' : null,
                passwordError: password.trim() === '' ? 'Password is required' : null,
                dobError: dob.trim() === '' ? 'Date of Birth is required' : null,
            });
            return;
        }

        // Check if there are validation errors
        if (
            this.state.firstNameError ||
            this.state.lastNameError ||
            this.state.emailError ||
            this.state.passwordError ||
            this.state.dobError
        ) {
            // If there are errors, don't submit the form
            return;
        }

        // Update the endpoint URL to match your server
        const registrationEndpoint = 'http://localhost:3001/api/register';

        try {
            // Send a POST request to your server's registration endpoint
            const response = await Axios.post(registrationEndpoint, {
                firstName,
                lastName,
                email,
                password,
                dob,
            });

            // Handle the response from the server
            if (response.status === 200) {
                // Registration was successful, you can redirect the user or perform other actions.
                console.log('Registration successful!');
            } else {
                // Handle registration errors
                console.error('Registration failed. Please try again.');
            }
        } catch (error) {
            // Handle any network or server errors
            console.error('An error occurred while registering:', error);
        }
    };

    render() {
        return (
            
         <div>
              <h1 id='txt'>Registration Page</h1>
            <div id='reg'>
              
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                        />
                        <div className="error">{this.state.firstNameError}</div>
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                        />
                        <div className="error">{this.state.lastNameError}</div>
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <div className="error">{this.state.emailError}</div>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                        <div className="error">{this.state.passwordError}</div>
                    </div>
                    <div>
                        <label>Date of Birth:</label>
                        <input
                            type="text"
                            name="dob"
                            value={this.state.dob}
                            onChange={this.handleInputChange}
                        />
                        <div className="error">{this.state.dobError}</div>
                    </div>
                    <button id="submit_btn" type="submit">Register</button>
                </form>
            </div>
            </div>
        );
    }
}

export default RegistrationPage;
