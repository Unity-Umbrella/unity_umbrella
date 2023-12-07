import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import "./crud.style.css";
import { IUser, PageEnum } from "./UserType";
import UserList from './UserList';
import AddUser from './AddUser';
import "./crud.style.css";
import EditUser from './EditUser';
import EditHouse from './EditHouse';

import { IUserHouse, PageEnumm } from './HouseType';
import AddHouse from './AddHouse';

const Crud = () => {

    const [userList, setUserList] = useState([] as IUser[]);
    const [houseList, setHouseList] = useState([] as IUserHouse[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [shownPageHouse, setShownPageHouse] = useState(PageEnumm.houseList);
    const [dataToEdit, setDataToEdit] = useState({} as IUser);
    const [dataToEditHouse, setDataToEditHouse] = useState({} as IUserHouse);

    useEffect(() => {
        const listInString = window.localStorage.getItem("UserList")
        if (listInString) {
            _setUserList(JSON.parse(listInString));
        }
    }, []);

    const onAddUserClickHnd = () => {
        setShownPage(PageEnum.add);
    };

    const onAddUserClickHndHouse = () => {
        setShownPage(PageEnum.houseAdd);
    };

    const showListPage = () => {
        setShownPage(PageEnum.list)
    };

    const showHouseListPage = () => {
        setShownPage(PageEnum.listHouse)
    };

    const addUser = (data: IUser) => {
        _setUserList([...userList, data]);

    };

    const adHouse = (data: IUserHouse) => {
        _setHouseList([...houseList, data]);

    };

    const _setUserList = (list: IUser[]) => {
        setUserList(list);
        window.localStorage.setItem("UserList", JSON.stringify(list));

    }

    const _setHouseList = (houseList: IUserHouse[]) => {
        setHouseList(houseList);
        window.localStorage.setItem("HouseList", JSON.stringify(houseList));

    }

    const deleteUser = (data: IUser) => {
        //to index from array that is user list, splice that and update new record

        const indexToDelete = userList.indexOf(data);
        const tempList = [...userList];

        tempList.splice(indexToDelete, 1);
        _setUserList(tempList)
    };

    const deleteHouse = (data: IUserHouse) => {
        //to index from array that is user list, splice that and update new record

        const indexToDelete = houseList.indexOf(data);
        const tempList = [...houseList];

        tempList.splice(indexToDelete, 1);
        _setHouseList(tempList)
    };

    const editUserData = (data: IUser) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data)
    };


    const editHouseData = (data: IUserHouse) => {
        setShownPage(PageEnum.houseEdit);
        setDataToEditHouse(data)
    };

    const updateData = (data: IUser) => {
        const filteredData = userList.filter(x => x.id === data.id)[0];
        const indexOfRecord = userList.indexOf(filteredData);
        const tempData = [...userList];
        tempData[indexOfRecord] = data;
        _setUserList(tempData);
    };

    const updateHouseData = (data: IUserHouse) => {
        const filteredData = houseList.filter(x => x.houseid === data.houseid)[0];
        const indexOfRecord = houseList.indexOf(filteredData);
        const tempData = [...houseList];
        tempData[indexOfRecord] = data;
        _setHouseList(tempData);
    };


    return (
        <>
            <article className="article-header">
                {/* <header>
                <h1>Unity Umbrella</h1>
            </header> */}
            </article>

            <section className="section-content">
                {shownPage === PageEnum.list || shownPage === PageEnum.listHouse ?
                    <>
                        <input type="button" value="ADD USER" className="add-user-btn" onClick={onAddUserClickHnd} />
                        <input type="button" value="ADD HOUSE DETAILS" className="add-user-btn" onClick={onAddUserClickHndHouse} />

                        <UserList list={userList} onDeleteClickHnd={deleteUser} onEdit={editUserData}
                            houseList={houseList} onDeleteClickHndHouse={deleteHouse} onEditHouse={editHouseData} />
                    </> : ""
                }

                {shownPage === PageEnum.add ?
                    <AddUser
                        onBackBtnClickHnd={showListPage}
                        onSubmitClickHnd={addUser}
                    /> : ""
                }
                {shownPage === PageEnum.houseAdd ?
                    <AddHouse
                        onBackBtnClickHndHouse={showHouseListPage}
                        onSubmitClickHndHouse={adHouse} />
                    : ""
                }

                {shownPage === PageEnum.edit ? <EditUser data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData} /> : ""}
                {shownPage === PageEnum.houseEdit ? <EditHouse data={dataToEditHouse} onBackBtnClickHndHouse={showHouseListPage} onUpdateClickHndHouse={updateHouseData}/> :  ""}
            </section>
        </>
    );
};

export default Crud;