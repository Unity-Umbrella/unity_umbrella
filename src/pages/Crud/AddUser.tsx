import { useState } from "react";
import "./UserForm.style.css";
import { IUser } from "./UserType";

type Props ={
    onBackBtnClickHnd : () => void;
    onSubmitClickHnd: (data: IUser) => void
};

const AddUser = (props: Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [campus, setCampus] = useState("");
    const [college, setCollege] = useState("");

    const { onBackBtnClickHnd, onSubmitClickHnd} = props;

    const onFirstNameChangeHnd =(e: any)=>{
        setFirstName(e.target.value)
    }
    const onLastNameChangeHnd =(e: any)=>{
        setLastName(e.target.value)
    }
    const onEmailChangeHnd =(e: any)=>{
        setEmail(e.target.value)
    }
    const onCampusChangeHnd =(e: any)=>{
        setCampus(e.target.value)
    }
    const onCollegeChangeHnd =(e: any)=>{
        setCollege(e.target.value)
    }
    const onsubmitBtnClickHnd=(e: any)=>{
        e.preventDefault();
        const data: IUser={
            id: new Date().toJSON().toString(),
            firstName : firstName,
            lastName: lastName,
            email:email,
            campusName:campus,
            collegeName: college
        }
        onSubmitClickHnd(data);
        onBackBtnClickHnd();

    }
    return (
    <div className="form-container">
        <div>
            <h3>Add User</h3>
        </div>
        <form onSubmit={onsubmitBtnClickHnd}>
            <div>
                <label>First Name : </label>
                <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" value={lastName} onChange={onLastNameChangeHnd}/>
            </div>
            <div>
                <label> Email : </label>
                <input type="text" value={email} onChange={onEmailChangeHnd}/>
            </div>
            <div>
                <label>Campus : </label>
                <input type="text" value={campus} onChange={onCampusChangeHnd}/>
            </div>
            <div>
                <label>College : </label>
                <input type="text" value={college} onChange={onCollegeChangeHnd}/>
            </div>
            <div>
                <input type="button" value="Back" onClick={onBackBtnClickHnd}/>
                <input type="button" value="Add User" onClick={onsubmitBtnClickHnd}/>
            </div>
        </form>
    </div>
    );
};

export default AddUser;