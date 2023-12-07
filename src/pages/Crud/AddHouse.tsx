
import { useState } from "react";
import "./UserForm.style.css";
import { IUserHouse } from "./HouseType";

type Props ={
    onBackBtnClickHndHouse : () => void;
    onSubmitClickHndHouse: (data: IUserHouse) => void
};



const AddHouse = (props: Props) => {

    const [houseOwner, setHouseOwner] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [street, setStreet] = useState("");
    const [postalcode, setPostalCode] = useState("");
    const [price, setPrice] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [washroom, setWashroom] = useState("");
    const [description, setDescription] = useState("");
    const [utilitieshydro, setUtilitiesHydro] = useState("");
    const [utilitieswater, setUtilitiesWater] = useState("");
    const [utilitiesheat, setUtilitiesHeat] = useState("");
    const [houselongitude, setHouseLongitude] = useState("");
    const [houselatitude, setHouseLatitude] = useState("");
    const [houselocation, setHouseLocation] = useState("");
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const { onBackBtnClickHndHouse, onSubmitClickHndHouse} = props;

    const onHouseOwnerChangeHndHouse =(e: any)=>{
        setHouseOwner(e.target.value)
    }
    const onHouseNumberChangeHndHouse =(e: any)=>{
        setHouseNumber(e.target.value)
    }
    const onStreetChangeHndHouse =(e: any)=>{
        setStreet(e.target.value)
    }

    const onPostalCodeChangeHndHouse =(e: any)=>{
        setPostalCode(e.target.value)
    }

    const onPriceChangeHndHouse=(e:any)=>{
        setPrice(e.target.value)
    }

    const onBedroomChangedHndHouse=(e:any)=>{
        setBedroom(e.target.value)
    }

    const onWashroomChangedHndHouse=(e:any)=>{
        setWashroom(e.target.value)
    }
    
    const onDescriptionChangeHndHouse =(e: any)=>{
        setDescription(e.target.value)
    }
    const onUtilitiesHydroChangeHndHouse =(e: any)=>{
        setUtilitiesHydro(e.target.value)
    }

    const onUtilitiesWaterChangeHndHouse =(e: any)=>{
        setUtilitiesWater(e.target.value)
    }

    const onUtilitiesHeatChangeHndHouse =(e: any)=>{
        setUtilitiesHeat(e.target.value)
    }

    const onHouseLongitudeChangeHndHouse =(e: any)=>{
        setHouseLongitude(e.target.value)
    }

    const onHouseLatitudeChangeHndHouse =(e: any)=>{
        setHouseLatitude(e.target.value)
    }

    const onHouseLocationChangeHndHouse =(e: any)=>{
        setHouseLocation(e.target.value)
    }

    const validateForm = () => {
      const errors = [];

      if (!houseOwner.trim()) {
          errors.push('House Owner Name is required');
      }

      if (!houseNumber.trim()) {
          errors.push('House Number is required');
      }

      if (!street.trim()) {
          errors.push('Street is required');
      }

      if (!postalcode.trim()) {
        errors.push('Postal Code is required');
    }

    if (!price.trim()) {
        errors.push('Price is required');
    }

    if (!bedroom.trim()){
        errors.push('bedroom is required');
    }

    if (!washroom.trim()){
        errors.push('Washroom is required');
    }

      if (!description.trim()) {
        errors.push('Description is required');
      }

      if (!utilitieshydro.trim()) {
        errors.push('Utilities Hydro is required');
      }

      if (!utilitieswater.trim()) {
        errors.push('Utilities Water is required');
      }

      if (!utilitiesheat.trim()) {
        errors.push('Utilities Heat is required');
      }

      if (!houselongitude.trim()) {
        errors.push('Longitude is required');
      }

      if (!houselatitude.trim()) {
        errors.push('Latitude is required');
      }

      if (!houselocation.trim()) {
        errors.push('Location is required');
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



    const onSubmitBtnClickHndHouse=(e: any)=>{
        e.preventDefault();

        const errorMessages = validateForm();
        if (errorMessages.length === 0) {


        const data: IUserHouse={
            houseid: new Date().toJSON().toString(),
            houseOwner : houseOwner,
            houseNumber: houseNumber,
            street:street,
            postalcode: postalcode,
            price:parseInt(price, 10),
            bedroom:parseInt(bedroom, 10),
            washroom:parseInt(washroom, 10),
            description:description,
            utilitieshydro: parseInt(utilitieshydro, 10),
            utilitieswater: parseInt(utilitieswater, 10),
            utilitiesheat: parseInt(utilitiesheat, 10),
            houselongitude: houselongitude,
            houselatitude: houselatitude,
            houselocation: houselocation
        }
        onSubmitClickHndHouse(data);
        onBackBtnClickHndHouse();
      }
      else{
        displayErrorMessages(errorMessages);
      }

    }

    
    return (
    <body>
     
    <div className="form-container"> 
        <div>
            <h3>Add House Details</h3>
        </div>
        <form action="/" method="GET" onSubmit={onSubmitBtnClickHndHouse}>
            <div className="content">
            <div className="input-box">
                <label className="required">House Owner : </label>
                <input type="text" value={houseOwner}  placeholder="Enter House Owner's name" onChange={onHouseOwnerChangeHndHouse} required />
            </div>
            <div className="input-box">
                <label className="required">House Number : </label>
                <input type="text" value={houseNumber} placeholder="Enter House Number" onChange={onHouseNumberChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required"> Street : </label>
                <input type="text" value={street} placeholder="Enter Street address" onChange={onStreetChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required"> Postal Code : </label>
                <input type="text" value={postalcode} placeholder="Enter your Postal Code" onChange={onPostalCodeChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required"> Price : </label>
                <input type="number" value={price} placeholder="Enter the price" onChange={onPriceChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required"> Bedroom : </label>
                <input type="number" value={bedroom} placeholder="Enter number of bedrooms" onChange={onBedroomChangedHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required"> Washroom : </label>
                <input type="number" value={washroom} placeholder="Enter number of washrooms" onChange={onWashroomChangedHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required">Description : </label>
                <input type="text" value={description} placeholder="Enter house description" onChange={onDescriptionChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required">Utilities Hydro : </label>
                <input type="number" value={utilitieshydro} placeholder="Enter utilities hydro" onChange={onUtilitiesHydroChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required">Utilities Water : </label>
                <input type="number" value={utilitieswater} placeholder="Enter utilities water" onChange={onUtilitiesWaterChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required">Utilities Heat : </label>
                <input type="number" value={utilitiesheat} placeholder="Enter utilities heat" onChange={onUtilitiesHeatChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required">House Longitude : </label>
                <input type="text" value={houselongitude} placeholder="Enter house longitude" onChange={onHouseLongitudeChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required">House Latitude : </label>
                <input type="text" value={houselatitude} placeholder="Enter house latitude" onChange={onHouseLatitudeChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <label className="required">House Location : </label>
                <input type="text" value={houselocation} placeholder="Enter house location" onChange={onHouseLocationChangeHndHouse} required/>
            </div>
            <div className="input-box">
                <input type="button" className="button-container" value="Back" onClick={onBackBtnClickHndHouse}/>
                <input type="button" className="button-container" value="Add House Details" onClick={onSubmitBtnClickHndHouse}/>
            </div>
            </div>
        </form>
    </div>

    <div id="errorMessages"></div>

    </body>
    
    );
};

export default AddHouse;