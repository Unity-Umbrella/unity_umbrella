import { useState } from "react";
import "./UserForm.style.css";
import { IUser } from "./UserType";
import React from "react";
import {College} from "../../domain/models/college";
import {Location} from "../../domain/models/location";
import {Campus} from "../../domain/models/campus";

type Props ={
    onBackBtnClickHnd : () => void;
    onSubmitClickHnd: (data: IUser) => void
};



const AddUser = (props: Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneno, setPhoneno] = useState("");
    const [dob, setDob] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [campus, setCampus] = useState("");
    const [college, setCollege] = useState("");
    const [colleges, setColleges] = useState({});
    const [locations, setLocations] = useState({});
    const [campuses, setCampuses] = useState({});
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

    const onPhoneNoChangeHnd =(e: any)=>{
        setPhoneno(e.target.value)
    }

    const onDobChangeHnd=(e:any)=>{
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

      if (!phoneno.trim()) {
        errors.push('Phone Number is required');
    }

    if (!dob.trim()) {
        errors.push('Date Of Birth is required');
    }

    if (!city.trim()){
        errors.push('City is required');
    }

    if (!country.trim()){
        errors.push('Country is required');
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
            phoneno: phoneno,
            dob:dob,
            city:city,
            country:country,
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
    
    const getColleges = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/colleges/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Colleges not fetched');
            }
            const data = await response.json();
            const fetchedColleges: College[] = [];
            console.log(data);
            let i = data.data.recordset.length-1;
            while(i >= 0){
                fetchedColleges.push(College.fromJson(JSON.stringify({
                    college_id: data.data.recordset[i].college_id,
                    college_name: data.data.recordset[i].college_name
                })));
                i--;
            }
            console.log(fetchedColleges);
            setColleges({colleges: fetchedColleges});
        } catch (error) {
            // setError('Invalid email or password');
        }
    }
    const getCampuses = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/campuses/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Campuses not fetched');
            }
            const data = await response.json();
            const fetchedCampuses : Campus[] = [];
            for(let i = 0; i< data.data.recordset.length; i++){
                fetchedCampuses.push(Campus.fromJson(JSON.stringify({
                    campus_id: data.data.recordset[i].campus_id,
                    campus_name: data.data.recordset[i].campus_name,
                    FK_colleges_college_id: data.data.recordset[i].FK_colleges_college_id,
                    FK_locations_location_id: data.data.recordset[i].FK_locations_location_id
                })));
            }
            console.log(fetchedCampuses);
            setCampuses({campuses: fetchedCampuses});
        } catch (error) {
            // setError('Invalid email or password');
        }
    }
    const getLocations = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/location/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (!response.ok) {
                throw new Error('Locations not fetched');
            }
            const data = await response.json();
            const fetchedLocations : Location[] = [];
            for(let i = 0; i< data.data.recordset.length; i++){
                fetchedLocations.push(Location.fromJson(JSON.stringify({
                    location_id: data.data.recordset[i].location_id,
                    location_city: data.data.recordset[i].location_city,
                    location_country: data.data.recordset[i].location_country,
                })));
                setLocations({locations: fetchedLocations});
            }
        } catch (error) {
            // setError('Invalid email or password');
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
                <label className="required"> Phone Number : </label>
                <input type="text" value={phoneno} placeholder="Enter your Phone Number" onChange={onPhoneNoChangeHnd} required/>
            </div>
            <div className="input-box">
                <label className="required"> Date Of Birth : </label>
                <input type="date" value={dob} placeholder="Enter your Date Of Birth" onChange={onDobChangeHnd} required/>
            </div>
            <div className="input-box">
                <label className="required"> City : </label>
                <input type="text" value={city} placeholder="Enter your City" onChange={onCityChangedHnd} required/>
            </div>
            <div className="input-box">
                <label className="required"> Country : </label>
                <input type="text" value={country} placeholder="Enter your Country" onChange={onCountryChangedHnd} required/>
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