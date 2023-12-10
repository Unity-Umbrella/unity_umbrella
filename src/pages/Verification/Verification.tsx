import React, {useState} from 'react';
import {Button, TextField, Typography, Box} from '@mui/material';
import Header from "../../components/Header/Header";
import UserData from "../../common/UserProfile";
import {useNavigate} from 'react-router-dom';

const VerificationPage: React.FC = () => {
    const [studentNumber, setStudentNumber] = useState('');
    const [collegeEmail, setCollegeEmail] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors: { [key: string]: string } = {};

        if (!studentNumber.trim()) {
            errors.studentNumber = 'Student number is required';
        }

        if (!collegeEmail.trim()) {
            errors.collegeEmail = 'College email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(collegeEmail)) {
            errors.collegeEmail = 'Please enter a valid email address';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleStudentNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStudentNumber(event.target.value);
    };

    const handleCollegeEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCollegeEmail(event.target.value);
    };

    const handleVerify = async () => {
        const id = UserData.getUserId();
        if (validateForm()) {
            try {
                const response = await fetch('http://localhost:3001/api/user/verify', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": id,
                        "studentNumber": studentNumber,
                        "collegeEmail": collegeEmail

                    })
                });
                if (!response.ok) {
                    throw new Error('User not created');
                }
                console.log(response);
                navigate("/");
            } catch (error) {
                // setError('Invalid email or password');
            }
        }

    };

    return (
        <>
            <Header/>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <form onSubmit={(e) => e.preventDefault()} style={{width: '300px'}}>
                    <Typography variant="h5" align="center" gutterBottom>
                        User Verification
                    </Typography>
                    <TextField
                        autoFocus
                        margin="normal"
                        id="studentNumber"
                        label="Student Number"
                        type="text"
                        fullWidth
                        value={studentNumber}
                        onChange={handleStudentNumberChange}
                        variant="outlined"
                        error={!!errors.studentNumber}
                        helperText={errors.studentNumber}
                    />
                    <TextField
                        margin="normal"
                        id="collegeEmail"
                        label="College Email"
                        type="email"
                        fullWidth
                        value={collegeEmail}
                        onChange={handleCollegeEmailChange}
                        variant="outlined"
                        error={!!errors.collegeEmail}
                        helperText={errors.collegeEmail}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleVerify}>
                        Verify
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default VerificationPage;
