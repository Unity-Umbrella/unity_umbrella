import React, {useEffect, useState} from "react";
import {UserUseCase} from "../../usecases/UserUseCase";
import {User} from "../../domain/models/user";

const StudentDirectory: React.FC = () => {
    const [students, setStudents] = useState<User[]>([]);
    const userUseCase = new UserUseCase();

    const fetchUsers = async  ()=> {
        const studentsList = await userUseCase.getAllUsers();
        setStudents(studentsList);
    }
    useEffect(() => {
        fetchUsers().then(r => true);
    },[]);
    return <>
      <ul>
          {students.map(student => (<li key={student.userId}>{student.firstName}</li>))}
      </ul>
    </>
}