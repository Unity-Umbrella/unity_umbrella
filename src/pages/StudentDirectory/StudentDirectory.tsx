import * as React from 'react';
import Typography from '@mui/material/Typography';
import {User} from "../../domain/models/user";
import {useEffect, useState} from "react";
import {UserUseCase} from "../../usecases/UserUseCase";
import Header from "../../components/Header/Header";
import {College} from "../../domain/models/college";
import {
    Avatar,
    Card,
    CardContent,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Rating,
    Select,
    SelectChangeEvent,
    Stack
} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function StudentDirectory() {
    const [students, setStudents] = useState<User[]>([]);
    const [colleges, setColleges] = useState<College[]>([]);
    const userUseCase = new UserUseCase();
    const [sortBy, setSortBy] = React.useState<string>("college");

    // Function to handle sorting criteria change
    const handleSortChange = (event: SelectChangeEvent) => {
        setSortBy(event.target.value as string);
        sortStudents();
    };
    const sortStudents = () => {
        const sortedStudents = [...students].sort((a, b) => {
            if (sortBy === "college") {
                const collegeA = getCollegeName(a.collegeId);
                const collegeB = getCollegeName(b.collegeId);
                return collegeA.localeCompare(collegeB) || a.firstName.localeCompare(b.firstName);
            } else if (sortBy === "name") {
                const nameA = `${a.firstName} ${a.lastName}`;
                const nameB = `${b.firstName} ${b.lastName}`;
                return nameA.localeCompare(nameB);
            }
            return 0;
        });

        setStudents(sortedStudents);
    };
    const fetchUsers = async () => {
        const studentsList = await userUseCase.getAllUsers();
        setStudents(studentsList);
    }
    const fetchColleges = async () => {
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
            let i = data.data.recordset.length - 1;
            while (i >= 0) {
                fetchedColleges.push(College.fromJson(JSON.stringify({
                    college_id: data.data.recordset[i].college_id,
                    college_name: data.data.recordset[i].college_name
                })));
                i--;
            }
            console.log(fetchedColleges);
            setColleges(fetchedColleges);
        } catch (error) {
            // setError('Invalid email or password');
        }
    }
    useEffect(() => {
        fetchUsers().then(r => true);
        fetchColleges().then(r => true);
        sortStudents();
    }, []);


    const getCollegeName = (collegeId: number) => {
        const rightCollege = colleges.find((college) => college.collegeId == collegeId);
        return rightCollege ? rightCollege.collegeName : "Conestoga College";
    }
    return (

        <>
            <Header/>
            <br/>
            <br/>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <FormControl variant="outlined" style={{ minWidth: 120 }}>
                <InputLabel id="sortSelect-label">Sort By:</InputLabel>
                <Select
                    labelId="sortSelect-label"
                    id="sortSelect"
                    value={sortBy}
                    onChange={handleSortChange}
                    label="Sort By"
                >
                    <MenuItem value="college">College</MenuItem>
                    <MenuItem value="name">Name</MenuItem>
                </Select>
            </FormControl>
        </div>
            <Grid container spacing={3}>
                {students.map((user) => (
                    <Grid item key={user.userId} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent style={{display: 'flex', alignItems: 'center'}}>
                                <Avatar
                                    alt={user.firstName}
                                    src={user.image}
                                    sx={{width: 100, height: 100, marginBottom: 2}}
                                />
                                <div style={{marginLeft: '10px'}}>
                                    <Stack direction="row" spacing={2} justifyContent="space-between"
                                           alignItems="center">
                                        <Typography variant="h6" gutterBottom>
                                            {user.firstName} {user.lastName}
                                        </Typography>
                                        {user.verified ?
                                            <Chip icon={<CheckCircleOutlineIcon/>} label="Verified" size="small" color="primary"/> : ""}

                                    </Stack>
                                    <Typography variant="body2" color="textSecondary" gutterBottom>
                                        {getCollegeName(user.collegeId)}
                                    </Typography>
                                    <Rating value={user.ratings} precision={0.5} readOnly/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}