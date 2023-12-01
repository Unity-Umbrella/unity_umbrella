import "./UserModal.style.css";
import { IUserHouse } from "./HouseType";

type Props ={
    onClose: () => void;
    data: IUserHouse
}

const HouseModal = (props: Props) => {
    const {onClose, data} = props
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3>House Details</h3>
                <div>
                    <div>
                        <label>House Owner : {data.houseOwner}</label>
                    </div>
                    <div>
                        <label>House Number : {data.houseNumber}</label>
                    </div>
                    <div>
                        <label>Street : {data.street}</label>
                    </div>
                    <div>
                        <label>Postal Code : {data.postalcode}</label>
                    </div>
                    <div>
                        <label>Price : {data.price}</label>
                    </div>
                    <div>
                        <label>Bedroom : {data.bedroom}</label>
                    </div>
                    <div>
                        <label>Washroom : {data.washroom}</label>
                    </div>
                    <div>
                        <label>Description : {data.description}</label>
                    </div>
                    <div>
                        <label>Utilities Hydro : {data.utilitieshydro}</label>
                    </div>
                    <div>
                        <label>Utilities Water : {data.utilitieswater}</label>
                    </div>
                    <div>
                        <label>Utilities Heat : {data.utilitiesheat}</label>
                    </div>
                    <div>
                        <label>House Longitude : {data.houselongitude}</label>
                    </div>
                    <div>
                        <label>House Latitude : {data.houselatitude}</label>
                    </div>
                    <div>
                        <label>House Location : {data.houselocation}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseModal;

