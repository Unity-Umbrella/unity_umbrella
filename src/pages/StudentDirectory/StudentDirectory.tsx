import React, {useEffect, useState} from "react";
import {UserUseCase} from "../../usecases/UserUseCase";
import {User} from "../../domain/models/user";
import List from "@mui/material/List";
import {Divider, ListItem} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import SortComponent from "../../components/Sort/Sort";
import {StudentFilter} from "../../common/enums";

const StudentDirectory: React.FC = () => {
    const [students, setStudents] = useState<User[]>([]);
    const filters = [StudentFilter.College,StudentFilter.DateOfBirth,StudentFilter.Email,StudentFilter.FirstName,StudentFilter.LastName];
    const userUseCase = new UserUseCase();

    const fetchUsers = async () => {
        const studentsList = await userUseCase.getAllUsers();
        console.log(studentsList);
        setStudents(studentsList);
    }

    const handleSortChange = async (filterValue: string) => {
        const sortedStudents = await userUseCase.sortUser(filterValue);
        setStudents(sortedStudents);
    };
    useEffect(() => {
        fetchUsers().then(r => true);
    }, []);
    return <>
        <SortComponent options={filters} onSortChange={handleSortChange}/>
        <List sx={{width: '100%', bgcolor: 'background.paper'}}>
            {students.map(student => (
                <><ListItem alignItems="flex-start" button={true}>
                    <ListItemAvatar>
                        <Avatar alt="Avatar" src={student.image}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={student.firstName + " " + student.lastName}
                        secondary={<React.Fragment>
                            <Typography
                                sx={{display: 'inline'}}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                            </Typography>
                            {student.campus.college.collegeName + " | " + student.email}
                        </React.Fragment>}/>
                </ListItem><Divider variant="inset" component="li"/></>
            ))}
        </List>
    </>
}

export default StudentDirectory;