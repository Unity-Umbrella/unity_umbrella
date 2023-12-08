import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import "./crud.style.css";
import {IUser, PageEnum} from "./UserType";
import UserList from './UserList';
import AddUser from './AddUser';
import "./crud.style.css";
import EditUser from './EditUser';

const Crud = () => {

    const [userList, setUserList] = useState([] as IUser[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const [dataToEdit, setDataToEdit] = useState({} as IUser);

    useEffect(() => {
        const listInString = window.localStorage.getItem("UserList")
        if(listInString){
            _setUserList(JSON.parse(listInString));
        }
    }, []);


    const onAddUserClickHnd=()=> {
        setShownPage(PageEnum.add);
    };


    const showListPage=()=>{
        setShownPage(PageEnum.list)
    };

    const addUser = (data: IUser) => {
        _setUserList([...userList,data]);

    };

    const _setUserList = (list: IUser[]) => {
        setUserList(list);
        window.localStorage.setItem("UserList", JSON.stringify(list));

    }

    const deleteUser = (data: IUser) =>{
    //to index from array that is user list, splice that and update new record

    const indexToDelete = userList.indexOf(data);
    const tempList = [...userList];

    tempList.splice(indexToDelete, 1);
    _setUserList(tempList)
    };

    const editUserData = (data : IUser) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data)
    };

    const updateData = (data: IUser) => {
        const filteredData = userList.filter(x => x.id === data.id)[0];
        const indexOfRecord = userList.indexOf(filteredData);
        const tempData = [...userList];
        tempData[indexOfRecord] = data;
        _setUserList(tempData);
    };

   
    return(
        <>
            <div>
                <Header/>

            </div>
        <article className="article-header">
            <header>
                <h1>Unity Umbrella</h1>
            </header>
        </article>

        <section className="section-content">
            {shownPage === PageEnum.list && (
            <><input type="button" value="Add User" className="add-user-btn" onClick={onAddUserClickHnd}/>
            <UserList list={userList} onDeleteClickHnd={deleteUser} onEdit={editUserData}/>
        </>
        )}

        {shownPage === PageEnum.add ?
        <AddUser 
        onBackBtnClickHnd={showListPage} 
        onSubmitClickHnd={addUser}
        /> : ""
        }

        {shownPage === PageEnum.edit && <EditUser data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData}/>}
        </section>
        </>
    );
};

export default Crud;