import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from "../../components/Header/Header";
import {Box, CircularProgress} from "@mui/material";
import {Location} from "../../domain/models/location";
import {useNavigate} from 'react-router-dom';
import UserData from "../../common/UserProfile";
import {dummyUsers} from "../../services/ServerApi/userAPI";
import {User} from "../../domain/models/user";

// Sample user data
const userData = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    avatar: 'https://via.placeholder.com/150', // Replace with your user's avatar URL
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis ex eget urna varius, sed sagittis orci condimentum.'
};

const MyProfile: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [user, setUser] = useState<User | null>(null);
    const loadUserData = async () => {
        const id = UserData.getUserId();
        try {
            const response = await fetch('http://localhost:3001/api/user/id=' + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('User not found');
            }
            const data = await response.json();
            console.log(data);
            const userData = data.data.recordset[0];
            const fetchedUser = User.fromJson(JSON.stringify({
                user_id: userData.user_id,
                user_firstName: userData.user_firstName,
                user_lastName: userData.user_lastName,
                user_phoneNumber: userData.user_phoneNumber,
                user_dob: userData.user_dob,
                user_email: userData.user_email,
                user_password: userData.user_password,
                user_image: "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_640.png",
                FK_colleges_college_id: userData.FK_colleges_college_id,
                FK_locations_location_id: userData.FK_locations_location_id,
                FK_campuses_campus_id: userData.FK_campuses_campus_id,
                ratings: userData.ratings ?? 3,
                user_verified: userData.user_verified,
                user_studentNumber: userData.user_studentNumber,
                user_collegeEmail: userData.user_collegeEmail,
            }));
            setUser(fetchedUser);
        } catch (error) {
            setError('Invalid email or password');
        }
    }
    useEffect(() => {
        loadUserData().then(a => {
            setIsLoading(false);
        });
    }, []);
    return (
        !isLoading ? <> <Header/>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    height="100vh" // Set the height of the container to fill the entire viewport
                >
                    <Grid item>
                        <CircularProgress/>
                    </Grid>
                </Grid> </> :
            <>
                <Header/>
                {user != null ?
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="start"
                        padding={3}
                    >
                        <Paper elevation={3} sx={{padding: 3, width: '100%'}}>
                            <Box display="flex" alignItems="center" mb={2}>
                                <Avatar alt={user.firstName} src={user.image}
                                        sx={{width: 150, height: 150, marginRight: 2}}/>
                                <Box>
                                    <Typography variant="h5">
                                        {userData.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        @{userData.username}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography variant="body1" gutterBottom>
                                {userData.bio}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Email: {userData.email}
                            </Typography>
                            {/* You can add more user details or components as needed */}
                        </Paper>
                    </Box> : ""
                }
            </>

    );
};

export default MyProfile;
