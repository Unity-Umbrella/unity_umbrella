import { useState } from "react";
import "./UserList.style.css";
import UserModal from "./UserModal";
// import HouseModal from "./HouseModal";
import UserModel from "./UserModal";
import { IUser } from "./UserType";
import { IUserHouse } from "./HouseType";
import DataTable from "react-data-table-component";
import {BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsChatFill, BsPhoneFill, BsBook,
     BsHouseAddFill, BsHouse, Bs1SquareFill} from 'react-icons/bs'

type Props = {
    list: IUser[];
    houseList: IUserHouse[];
    onDeleteClickHnd: (data: IUser) => void;
    onDeleteClickHndHouse: (data: IUserHouse) => void;
    onEdit: (data:IUser) => void;
    onEditHouse: (data:IUserHouse) => void;
    
};

const UserList = (props: Props) => {
    //const {list, onDeleteClickHnd, onEdit} = props;
    const {list, houseList, onDeleteClickHnd, onDeleteClickHndHouse, onEdit, onEditHouse} = props;
    const [showModal, setShowModal] = useState(false);
    //const [dataToShow, setDataToShow] = useState(null as IUser | null);
    const [dataToShow, setDataToShow] = useState<IUser | IUserHouse | null>(null);

    //const viewUser = (data: IUser | IUserHouse) => {
    const viewUser = (data: IUser) => {
        setDataToShow(data)
        setShowModal(true);
    };


    const viewHouse = (data: IUserHouse) => {
        setDataToShow(data)
        setShowModal(true);
    };

    const onCloseModal = () => setShowModal(false);

    return (
    <div>
        <article>
            <h3 className="list-header">USER LIST</h3>
        </article>
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone Number</th>
    <th>Date Of Birth</th>
    <th>City</th>
    <th>Country</th>
    <th>Campus Name</th>
    <th>College Name</th>
    <th>Actions</th>
  </tr>
  {list.map((user) => {
    console.log(user);
    return(
        <tr key={user.id}>
            <td>{`${user.firstName} ${user.lastName}`}</td>
            <td>{user.email}</td>
            <td>{user.phoneno}</td>
            <td>{user.dob}</td>
            <td>{user.city}</td>
            <td>{user.country}</td>
            <td>{user.campusName}</td>
            <td>{user.collegeName}</td>
            <td>
                <div>
                    <input type="button" className="view-button" id="view-view" value="VIEW" onClick={() => viewUser(user)} />
                    <input type="button" className="edit-button" value="EDIT" onClick={() => onEdit(user)} />
                    <input type="button" className="delete-button" value="DELETE" onClick={() => onDeleteClickHnd(user)} />
                    
                </div>
            </td>
        </tr>
    );
  })}
  
  
</table>

<br/>
<br/>
<br/>

<article>
        <h3 className="list-header">HOUSE LIST</h3>
</article>

<br/>
<br/>
<br/>

<table>
<tr>
    <th>House Owner</th>
    <th>House Number</th>
    <th>Street</th>
    <th>Postal Code</th>
    <th>Price</th>
    <th>Bedroom</th>
    <th>Washroom</th>
    <th>Description</th>
    <th>Utilities Hydro</th>
    <th>Water</th>
    <th>Heat</th>
    <th>House Longitude</th>
    <th>House Latitude</th>
    <th>House Location</th>
    <th>Action</th>
  </tr>
  {houseList.map((house) => {
    console.log(house);
    return(
        <tr key={house.houseid}>
            <td>{house.houseOwner}</td>
            <td>{house.houseNumber}</td>
            <td>{house.street}</td>
            <td>{house.postalcode}</td>
            <td>{house.price}</td>
            <td>{house.bedroom}</td>
            <td>{house.washroom}</td>
            <td>{house.description}</td>
            <td>{house.utilitieshydro}</td>
            <td>{house.utilitieswater}</td>
            <td>{house.utilitiesheat}</td>
            <td>{house.houselongitude}</td>
            <td>{house.houselatitude}</td>
            <td>{house.houselocation}</td>
            <td>
                <div>
                    <input type="button" className="view-button" id="view-view" value="VIEW" onClick={() => viewHouse(house)} />
                    <input type="button" className="edit-button" value="EDIT" onClick={() => onEditHouse(house)} />
                    <input type="button" className="delete-button" value="DELETE" onClick={() => onDeleteClickHndHouse(house)} />
                    
                </div>
            </td>
        </tr>
    );
  })}
  

</table>

{showModal && dataToShow !== null && ( 
    <UserModal onClose={onCloseModal}  data={dataToShow as IUser}/> 
    
)}

    </div>
    );

    
};

export default UserList;