// import { useState } from "react";

// const EditHouse=()=>{
//     return(
//         <div>
// EditHouse
//         </div>
//     )
// }

// export default EditHouse;



import { useState } from "react";
import "./UserForm.style.css";
import { IUserHouse } from "./HouseType";

type Props ={
    data : IUserHouse;
    onBackBtnClickHndHouse : () => void;
    onUpdateClickHndHouse: (data: IUserHouse) => void
};



const EditHouse = (props: Props) => {

    const {data, onBackBtnClickHndHouse, onUpdateClickHndHouse} = props;

    const [houseOwner, setHouseOwner] = useState(data.houseOwner);
    const [houseNumber, setHouseNumber] = useState(data.houseNumber);
    const [street, setStreet] = useState(data.street);
    const [postalcode, setPostalCode] = useState(data.postalcode);
    const [price, setPrice] = useState(data.price);
    const [bedroom, setBedroom] = useState(data.bedroom);
    const [washroom, setWashroom] = useState(data.washroom);
    const [description, setDescription] = useState(data.description);
    const [utilitieshydro, setUtilitiesHydro] = useState(data.utilitieshydro);
    const [utilitieswater, setUtilitiesWater] = useState(data.utilitieswater);
    const [utilitiesheat, setUtilitiesHeat] = useState(data.utilitiesheat);
    const [houselongitude, setHouseLongitude] = useState(data.houselongitude);
    const [houselatitude, setHouseLatitude] = useState(data.houselatitude);
    const [houselocation, setHouseLocation] = useState(data.houselocation);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    //const { onBackBtnClickHndHouse, onUpdateClickHndHouse} = props;

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

    if (!price) {
        errors.push('Price is required');
    }

    if (!bedroom){
        errors.push('bedroom is required');
    }

    if (!washroom){
        errors.push('Washroom is required');
    }

      if (!description.trim()) {
        errors.push('Description is required');
      }

      if (!utilitieshydro) {
        errors.push('Utilities Hydro is required');
      }

      if (!utilitieswater) {
        errors.push('Utilities Water is required');
      }

      if (!utilitiesheat) {
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


        const updateData: IUserHouse={
            houseid: data.houseid,
            houseOwner : houseOwner,
            houseNumber: houseNumber,
            street:street,
            postalcode: postalcode,
            price:price,
            bedroom:bedroom,
            washroom:washroom,
            description:description,
            utilitieshydro: utilitieshydro,
            utilitieswater: utilitieswater,
            utilitiesheat: utilitiesheat,
            houselongitude: houselongitude,
            houselatitude: houselatitude,
            houselocation: houselocation
        }
        onUpdateClickHndHouse(updateData);
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
            <h3>Edit House Details</h3>
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
                <input type="text" value={street} placeholder="Enter street address" onChange={onStreetChangeHndHouse} required/>
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
                <input type="button" className="button-container" value="Update House Details" onClick={onSubmitBtnClickHndHouse}/>
            </div>
            </div>
        </form>
    </div>

    <div id="errorMessages"></div>

    </body>
    
    );
};

export default EditHouse;