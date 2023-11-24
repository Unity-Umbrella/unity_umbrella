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
    <body>
     
    <div className="form-container"> 
        <div>
            <h3>Add User</h3>
        </div>
        <form onSubmit={onsubmitBtnClickHnd}>
            <div className="content">
            <div className="input-box">
                <label className="required">First Name : </label>
                <input type="text" value={firstName}  placeholder="Enter your first name" onChange={onFirstNameChangeHnd} required />
            </div>
            <div className="input-box">
                <label className="required">Last Name : </label>
                <input type="text" value={lastName} placeholder="Enter your last name" onChange={onLastNameChangeHnd} required/>
            </div>
            <div className="input-box">
                <label className="required"> Email : </label>
                <input type="text" value={email} placeholder="Enter your email address" onChange={onEmailChangeHnd} required/>
            </div>
            <div className="input-box">
                <label className="required">Campus : </label>
                <input type="text" value={campus} placeholder="Enter your campus name" onChange={onCampusChangeHnd} required/>
            </div>
            <div className="input-box">
                <label className="required">College : </label>
                <input type="text" value={college} placeholder="Enter your clg name" onChange={onCollegeChangeHnd} required/>
            </div>
            <div className="input-box">
                <input type="button" className="button-container" value="Back" onClick={onBackBtnClickHnd}/>
                <input type="button" className="button-container" value="Add User" onClick={onsubmitBtnClickHnd}/>
            </div>
            </div>
        </form>
    </div>

    <div id="errorMessages"></div>

    </body>
    
    );
};

export default AddUser;