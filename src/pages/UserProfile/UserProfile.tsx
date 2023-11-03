import React, {useEffect, useState} from 'react';
import {Paper, Typography, Grid, Avatar, Button} from '@mui/material';
import {User} from "../../domain/models/user";
import Ratings from "../../components/Ratings/Ratings";
import {UserUseCase} from "../../usecases/UserUseCase";
import {useParams} from 'react-router-dom';

const userProfileStyles = {
    root: {
        padding: '16px',
        maxWidth: '600px',
        margin: 'auto',
        marginTop: '16px',
    },
    avatar: {
        width: '150px',
        height: '150px',
    },
    button: {
        marginTop: '16px',
    },
};


const UserProfile: React.FC = () => {
    const [user, setUser] = useState<User>();
    const {userId} = useParams<{ userId: string }>();
    const userUseCase = new UserUseCase();
    const onConnectClick = () => {
        //TODO: redirect to chat page
    }
    useEffect(() => {
        const fetchUserData = async () => {
            const fetchedUser = await userUseCase.getUserById(parseInt(userId ?? ""));
            setUser(fetchedUser);
        };
        fetchUserData();
    }, [userId]);
    if (user === undefined) {
        return <div>User Not Found</div>;
    }

    return (
        <Paper style={userProfileStyles.root}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} textAlign="center">
                    <Avatar alt={`${user.firstName} ${user.lastName}`} src={user.image}
                            style={userProfileStyles.avatar}/>
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1">Email: {user.email}</Typography>
                    <Typography variant="body1">Phone Number: {user.phoneNumber}</Typography>
                    <Typography variant="body1">Date of Birth: {user.dateOfBirth}</Typography>
                    <Typography variant="body1">College: {user.college.collegeName}</Typography>
                    <Typography
                        variant="body1">Location: {user.location.city + ", " + user.location.country}</Typography>
                    <Typography variant="body1">Campus: {user.campus.campusName}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">User Rating</Typography>
                    <Typography variant="body1"><Ratings rating={user.ratings}/></Typography>
                    {/* Add more categories as needed */}
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Button variant="contained" color="primary" onClick={onConnectClick}
                            style={userProfileStyles.button}>
                        Connect on Chat
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserProfile;
