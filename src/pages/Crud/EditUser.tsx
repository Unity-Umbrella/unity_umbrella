import {IUser} from "./UserType";
import "./UserForm.style.css";
import {useState} from "react";
import React from "react";
import Header from "../../components/Header/Header";

type Props = {
    data: IUser;
    onBackBtnClickHnd: () => void;
    //onSubmitClickHnd: (data: IUser) => void;
    onUpdateClickHnd: (data: IUser) => void;
};

const EditUser = (props: Props) => {
    const {data, onBackBtnClickHnd, onUpdateClickHnd} = props;

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);
    const [email, setEmail] = useState(data.email);
    const [phoneno, setPhoneno] = useState(data.phoneno);
    const [dob, setDob] = useState(data.dob);
    const [city, setCity] = useState(data.city);
    const [country, setCountry] = useState(data.country);
    const [campus, setCampus] = useState(data.campusName);
    const [college, setCollege] = useState(data.collegeName);

    //const { onBackBtnClickHnd, onSubmitClickHnd} = props;

    const onFirstNameChangeHnd = (e: any) => {
        setFirstName(e.target.value)
    }
    const onLastNameChangeHnd = (e: any) => {
        setLastName(e.target.value)
    }
    const onEmailChangeHnd = (e: any) => {
        setEmail(e.target.value)
    }
    const onPhoneChangeHnd =(e: any)=>{
        setPhoneno(e.target.value)
    }
    const onDobChangeHnd =(e: any)=>{
        setDob(e.target.value)
    }
    const onCityChangedHnd=(e:any)=>{
        setCity(e.target.value)
    }

    const onCountryChangedHnd=(e:any)=>{
        setCountry(e.target.value)
    }
    const onCampusChangeHnd =(e: any)=>{
        setCampus(e.target.value)
    }
    const onCollegeChangeHnd = (e: any) => {
        setCollege(e.target.value)
    }

    const onsubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const updateData: IUser = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email:email,
            phoneno:phoneno,
            dob:dob,
            city:city,
            country:country,
            campusName:campus,
            collegeName: college
        }
        onUpdateClickHnd(updateData);
        onBackBtnClickHnd();

    };


    return (
        <>
            <div>
                <Header/>

            </div>
            <div className="form-container">
                <div>
                    <h3>Edit User</h3>
                </div>
                <form onSubmit={onsubmitBtnClickHnd}>
                    <div>
                        <label>First Name : </label>
                        <input type="text" value={firstName} onChange={onFirstNameChangeHnd}/>
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
                        <input type="button" value="Update User" onClick={onsubmitBtnClickHnd}/>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditUser;