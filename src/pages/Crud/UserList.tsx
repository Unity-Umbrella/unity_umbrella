import { useState } from "react";
import "./UserList.style.css";
import UserModal from "./UserModal";
import UserModel from "./UserModal";
import { IUser } from "./UserType";
import React from "react";
import Header from "../../components/Header/Header";

type Props = {
    list: IUser[];
    onDeleteClickHnd: (data: IUser) => void;
    onEdit: (data:IUser) => void;
};

const UserList = (props: Props) => {
    const {list, onDeleteClickHnd, onEdit} = props;
    const [showModal, setShowModal] = useState(false);
    const [dataToShow, setDataToShow] = useState(null as IUser | null);

    const viewUser = (data: IUser) => {
        setDataToShow(data)
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    return (
    <div>
        <article>
            <h3 className="list-header">User List</h3>
        </article>

<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Campus Name</th>
    <th>College Name</th>
    <th>Actions</th>
  </tr>
  {list.map((user) => {
    console.log(user);
    return(
        <>
            <div>
                <Header/>

            </div>
        <tr key={user.id}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>{user.campusName}</td>
            <td>{user.collegeName}</td>
            <td>
                <div>
                    <input type="button" value="View" onClick={() => viewUser(user)} />
                    <input type="button" value="Edit" onClick={() => onEdit(user)} />
                    <input type="button" value="Delete" onClick={() => onDeleteClickHnd(user)} />
                </div>
            </td>
        </tr>
        </>
    );
  })}
  
  
</table>
{showModal && dataToShow !== null && ( 
    <UserModal onClose={onCloseModal}  data={dataToShow}/> 
)}
    </div>
    );

    
};

export default UserList;