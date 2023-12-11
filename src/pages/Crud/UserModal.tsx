import "./UserModal.style.css";
import { IUser } from "./UserType";
import React from "react";

type Props ={
    onClose: () => void;
    data: IUser
}

const UserModal = (props: Props) => {
    const {onClose, data} = props
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>User Data</h3>
                <div>
                    <div>
                        <label>First Name : {data.firstName}</label>
                    </div>
                    <div>
                        <label>Last Name : {data.lastName}</label>
                    </div>
                    <div>
                        <label>Email : {data.email}</label>
                    </div>
                    <div>
                        <label>Phone Number : {data.phoneno}</label>
                    </div>
                    <div>
                        <label>Date Of Birth : {data.dob}</label>
                    </div>
                    <div>
                        <label>City : {data.city}</label>
                    </div>
                    <div>
                        <label>Country : {data.country}</label>
                    </div>
                    <div>
                        <label>Campus : {data.campusName}</label>
                    </div>
                    <div>
                        <label>College : {data.collegeName}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserModal;

