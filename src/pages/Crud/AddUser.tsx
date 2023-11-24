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
    const [errorMessages, setErrorMessages] = useState<string[]>([]);

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

    const validateForm = () => {
      const errors = [];

      if (!firstName.trim()) {
          errors.push('First Name is required');
      }

      if (!lastName.trim()) {
          errors.push('Last Name is required');
      }

      if (!email.trim()) {
          errors.push('Email is required');
      }

      if (!campus.trim()) {
        errors.push('Campus Name is required');
      }

      if (!college.trim()) {
        errors.push('College Name is required');
      }


      return errors;
  };

  const displayErrorMessages = (errorMessages: any[]) => {
      const errorMessageContainer = document.getElementById('errorMessages');
      if(errorMessageContainer){
      errorMessageContainer.innerHTML = '';

      errorMessages.forEach((message) => {
          const errorMessageDiv = document.createElement('div');
          errorMessageDiv.textContent = message;
          errorMessageContainer.appendChild(errorMessageDiv);
      });
    }
    else{
      console.error('Error: errorMessageContainer not found in the DOM');
    }
  };



    const onsubmitBtnClickHnd=(e: any)=>{
        e.preventDefault();

        const errorMessages = validateForm();
        if (errorMessages.length === 0) {


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
      else{
        displayErrorMessages(errorMessages);
      }

    }

    
    return (
    <body>
     
    <div className="form-container"> 
        <div>
            <h3>Add User</h3>
        </div>
        <form action="/" method="GET" onSubmit={onsubmitBtnClickHnd}>
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