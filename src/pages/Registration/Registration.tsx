import React, {Component, ChangeEvent, FormEvent} from 'react';
import {TextField, Button, Container, Typography, Grid, Paper, Link, MenuItem, CircularProgress} from '@mui/material';
import Header from "../../components/Header/Header";
import {useNavigate} from 'react-router-dom';
import {College} from "../../domain/models/college";
import {Location} from "../../domain/models/location";
import {Campus} from "../../domain/models/campus";
import {json} from "stream/consumers";
import {Box} from "@mui/system";

interface RegistrationPageState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    dob: string;
    phoneNumber: string,
    collegeId: number | null,
    locationId: number | null,
    campusId: number | null,
    firstNameError: string | null;
    lastNameError: string | null;
    emailError: string | null;
    passwordError: string | null;
    dobError: string | null;
    phoneNumberError: string | null,
    collegeIdError: string | null,
    locationIdError: string | null,
    campusIdError: string | null,
    colleges: College[],
    locations: Location[],
    campuses: Campus[],
    loading: boolean
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
            phoneNumber: '',
            collegeId: null,
            locationId: null,
            campusId: null,
            firstNameError: null,
            lastNameError: null,
            emailError: null,
            passwordError: null,
            dobError: null,
            phoneNumberError: null,
            collegeIdError: null,
            locationIdError: null,
            campusIdError: null,
            colleges: [],
            locations: [],
            campuses: [],
            loading: true
        };
    }

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        this.setState({[name]: value} as unknown as Pick<RegistrationPageState, keyof RegistrationPageState>);
        this.validateField(name, value);
    };

    componentDidMount(): void {
        this.getColleges();
        this.getLocations();
        this.getCampuses();
        this.changeLoadingState();
    }
    changeLoadingState = () =>{
        this.setState({loading: !this.state.loading})
    }
    validateField = (fieldName: string, value: string) => {
        let error: string | null = null;

        if (fieldName === 'firstName') {
            if (value.trim() === '') {
                error = 'First Name is required';
                this.setState({firstNameError: error});
            }
        } else if (fieldName === 'lastName') {
            if (value.trim() === '') {
                error = 'Last Name is required';
                this.setState({lastNameError: error});
            }
        } else if (fieldName === 'email') {
            if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
                error = 'Invalid email address';
                this.setState({emailError: error});
            }
        } else if (fieldName === 'password') {
            if (value.length < 8) {
                error = 'Password must be at least 8 characters';
                this.setState({passwordError: error});
            }
        } else if (fieldName === 'dob') {
            if (value.trim() === '') {
                error = 'Date of Birth is required';
            } else if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
                error = 'Invalid Date of Birth format (YYYY-MM-DD)';
            }

            this.setState({dobError: error});
        }
        else if(fieldName == 'collegeId'){
            if(value === "null"){
                error = 'College needs to be selected';
            }
            this.setState({collegeIdError: error});
        }
        else if(fieldName == 'campusId'){
            if(value === "null"){
                error = 'Campus needs to be selected';
            }
            this.setState({campusIdError: error});
        }
        else if(fieldName == 'locationId'){
            if(value === "null"){
                error = 'Location needs to be selected';
            }
            this.setState({locationIdError: error});
        }

        this.setState((prevState) => ({
            ...prevState,
            [`${fieldName}Error`]: error,
        }));

        return !error; // Return true if the field is valid, otherwise return false
    };
    getColleges = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/colleges/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Colleges not fetched');
            }
            const data = await response.json();
            const fetchedColleges: College[] = [];
            console.log(data);
            let i = data.data.recordset.length-1;
            while(i >= 0){
                fetchedColleges.push(College.fromJson(JSON.stringify({
                    college_id: data.data.recordset[i].college_id,
                    college_name: data.data.recordset[i].college_name
                })));
                i--;
            }
            console.log(fetchedColleges);
            this.setState({colleges: fetchedColleges});
        } catch (error) {
            // setError('Invalid email or password');
        }
    }
    getCampuses = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/campuses/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Campuses not fetched');
            }
            const data = await response.json();
            const fetchedCampuses : Campus[] = [];
            for(let i = 0; i< data.data.recordset.length; i++){
                fetchedCampuses.push(Campus.fromJson(JSON.stringify({
                    campus_id: data.data.recordset[i].campus_id,
                    campus_name: data.data.recordset[i].campus_name,
                    FK_colleges_college_id: data.data.recordset[i].FK_colleges_college_id,
                    FK_locations_location_id: data.data.recordset[i].FK_locations_location_id
                })));
            }
            console.log(fetchedCampuses);
            this.setState({campuses: fetchedCampuses});
        } catch (error) {
            // setError('Invalid email or password');
        }
    }
    getLocations = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/location/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Locations not fetched');
            }
            const data = await response.json();
            const fetchedLocations : Location[] = [];
            for(let i = 0; i< data.data.recordset.length; i++){
                fetchedLocations.push(Location.fromJson(JSON.stringify({
                    location_id: data.data.recordset[i].location_id,
                    location_city: data.data.recordset[i].location_city,
                    location_country: data.data.recordset[i].location_country,
                })));
                this.setState({locations: fetchedLocations});
            }
        } catch (error) {
            // setError('Invalid email or password');
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const {firstName, lastName, email, password, dob, phoneNumber, collegeId, campusId, locationId} = this.state;

        const validFirstName = this.validateField('firstName', firstName);
        const validLastName = this.validateField('lastName', lastName);
        const validEmail = this.validateField('email', email);
        const validPassword = this.validateField('password', password);
        const validDob = this.validateField('dob', dob);
        const validCollege = this.validateField('collegeId',""+ collegeId);
        const validCampus = this.validateField('campusId', ""+campusId);
        const validLocation = this.validateField('locationId', ""+locationId);

        if (validFirstName && validLastName && validEmail && validPassword && validDob && validCollege && validCampus && validLocation) {
            // All fields are valid, proceed with form submission

            // Update the endpoint URL to match Your server
            const registrationEndpoint = 'http://localhost:3001/api/register';

            try {
                const response = await fetch('http://localhost:3001/api/user/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                        phoneNumber: phoneNumber,
                        dob: dob,
                        colleges_college_id: collegeId,
                        location_location_id: locationId,
                        campuses_campus_id: campusId
                    })
                });
                if (!response.ok) {
                    throw new Error('User not created');
                }
                const data = await response.json();
                const user = data.user;
            } catch (error) {
                // setError('Invalid email or password');
            }
        } else {
            // validation errors, do not proceed with submission
        }
    };

    render() {
        return (
            this.state.loading ? <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box> :  <>

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
                                        <TextField
                                            fullWidth
                                            select
                                            label="College"
                                            name="college"
                                            value={this.state.collegeId}
                                            onChange={this.handleInputChange}
                                            error={!!this.state.collegeIdError}
                                            variant="outlined"
                                            style={{marginBottom: '1rem'}}
                                        >
                                            {this.state.colleges.map((college) => (
                                                <MenuItem key={college.collegeId} value={college.collegeId}>
                                                    {college.collegeName}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                        <TextField
                                            fullWidth
                                            select
                                            label="Campus"
                                            name="campus"
                                            value={this.state.campusId}
                                            onChange={this.handleInputChange}
                                            error={!!this.state.campusIdError}
                                            variant="outlined"
                                            style={{ marginBottom: '1rem' }}
                                            disabled={!this.state.collegeId} // Disable if no college is selected
                                        >
                                            {this.state.collegeId &&
                                            this.state.campuses // assuming campuses is an array based on the selected college
                                                .filter((campus) => campus.collegeId === this.state.collegeId)
                                                .map((campus) => (
                                                    <MenuItem key={campus.campusId} value={campus.campusId}>
                                                        {campus.campusName}
                                                    </MenuItem>
                                                ))}
                                        </TextField>
                                        <TextField
                                            fullWidth
                                            select
                                            label="Location"
                                            name="location"
                                            value={this.state.locationId}
                                            onChange={this.handleInputChange}
                                            error={!!this.state.locationIdError}
                                            variant="outlined"
                                            style={{ marginBottom: '1rem' }}
                                            disabled={!this.state.campusId} // Disable if no campus is selected
                                        >
                                            {this.state.campusId &&
                                            this.state.locations // assuming locations is an array based on the selected campus
                                                .filter((location) => location.locationId === this.state.locationId)
                                                .map((location) => (
                                                    <MenuItem key={location.locationId} value={location.locationId}>
                                                        {location.city}
                                                    </MenuItem>
                                                ))}
                                        </TextField>
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

        ) ;
    }
}

export default RegistrationPage;
