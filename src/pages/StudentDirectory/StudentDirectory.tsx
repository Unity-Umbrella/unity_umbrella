import React, { useEffect, useState } from "react";
import { UserUseCase } from "../../usecases/UserUseCase";
import { User } from "../../domain/models/user";
import List from "@mui/material/List";
import { Divider, ListItem } from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import SortComponent from "../../components/Sort/Sort";
import { StudentFilter } from "../../common/enums";
import FilterComponent from "../../components/Filter/Filter";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const StudentDirectory: React.FC = () => {
  const [students, setStudents] = useState<User[]>([]);
  const filters = [
    StudentFilter.College,
    StudentFilter.DateOfBirth,
    StudentFilter.Email,
    StudentFilter.FirstName,
    StudentFilter.LastName,
  ];
  const userUseCase = new UserUseCase();

  const filterElements = [
    { id: 1, label: "Conestoga College" },
    { id: 2, label: "ABC College" },
  ];
  const handleFilterChange = async (selectedFilters: string[]) => {
    const filteredStudents = await userUseCase.filterUser(selectedFilters);
    setStudents(filteredStudents);
  };
  const fetchUsers = async () => {
    const studentsList = await userUseCase.getAllUsers();
    console.log(studentsList);
    setStudents(studentsList);
  };

  const handleSortChange = async (filterValue: string) => {
    const sortedStudents = await userUseCase.sortUser(filterValue);
    setStudents(sortedStudents);
  };
  useEffect(() => {
    fetchUsers().then((r) => true);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif", // Set a professional font
      }}
    >
      <div style={{ flex: 1 }}>
        <SortComponent options={filters} onSortChange={handleSortChange} />
        <FilterComponent
          filterElements={filterElements}
          onFilterChange={handleFilterChange}
        />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {students.map((student) => (
            <React.Fragment key={student.userId}>
              <ListItem
                alignItems="flex-start"
                component={Link}
                to={`/student-directory/${student.userId}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  marginBottom: "10px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="Avatar" src={student.image} />
                </ListItemAvatar>
                <ListItemText
                  primary={student.firstName + " " + student.lastName}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      ></Typography>
                      {student.campus.college.collegeName +
                        " | " +
                        student.email}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider
                variant="inset"
                component="li"
                style={{ backgroundColor: "#ccc" }}
              />
            </React.Fragment>
          ))}
        </List>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDirectory;
