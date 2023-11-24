import { IUser } from "./UserType";
import "./UserForm.style.css";
import { useState } from "react";

type Props = {
    data: IUser;
    onBackBtnClickHnd : () => void;
    //onSubmitClickHnd: (data: IUser) => void;
    onUpdateClickHnd: (data:IUser) => void;
};

const EditUser = (props: Props) => {
    const {data, onBackBtnClickHnd, onUpdateClickHnd } = props;

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
    const [campus, setCampus] = useState(data.campusName);
    const [college, setCollege] = useState(data.collegeName);

    //const { onBackBtnClickHnd, onSubmitClickHnd} = props;

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
        const updateData: IUser={
            id: data.id,
            firstName : firstName,
            lastName: lastName,
            email:email,
            campusName:campus,
            collegeName: college
        }
        onUpdateClickHnd(updateData);
        onBackBtnClickHnd();

    };


    return (
        <body>
        <div className="form-container">
        <div>
            <h3>Edit User</h3>
        </div>
        <form onSubmit={onsubmitBtnClickHnd}>
        <div className="content">
            <div className="input-box">
                <label className="required">First Name : </label>
                <input type="text" value={firstName} onChange={onFirstNameChangeHnd} />
                <div className="error"></div>
            </div>
            <div className="input-box">
                <label className="required">Last Name : </label>
                <input type="text" value={lastName} onChange={onLastNameChangeHnd}/>
                <div className="error"></div>
            </div>
            <div className="input-box">
                <label className="required"> Email : </label>
                <input type="text" value={email} onChange={onEmailChangeHnd}/>
                <div className="error"></div>
            </div>
            <div className="input-box">
                <label className="required">Campus : </label>
                <input type="text" value={campus} onChange={onCampusChangeHnd}/>
                <div className="error"></div>
            </div>
            <div className="input-box">
                <label className="required">College : </label>
                <input type="text" value={college} onChange={onCollegeChangeHnd}/>
                <div className="error"></div>
            </div>
            <div className="input-box">
                <input type="button" className="button-container" value="Back" onClick={onBackBtnClickHnd}/>
                <input type="button" className="button-container" value="Update User" onClick={onsubmitBtnClickHnd}/>
            </div>
            </div>
        </form>
    </div>
    </body>
    );
};

export default EditUser;