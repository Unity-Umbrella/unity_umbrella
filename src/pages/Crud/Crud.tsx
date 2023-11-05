import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import "./crud.style.css";
import {IUser, PageEnum, dummyUserList} from "./UserType";
import UserList from './UserList';
import AddUser from './AddUser';
import "./crud.style.css";

const Crud = () => {

    const [userList, setUserList] = useState(dummyUserList as IUser[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const onAddUserClickHnd=()=> {
        setShownPage(PageEnum.add);
    };


    const showListPage=()=>{
        setShownPage(PageEnum.list)
    };

    const addUser = (data: IUser) => {
        setUserList([...userList,data]);

    };

    return(
        <>
        <article className="article-header">
            <header>
                <h1>Unity Umbrella</h1>
            </header>
        </article>

        <section className="section-content">
            {shownPage === PageEnum.list && (
            <><input type="button" value="Add User" onClick={onAddUserClickHnd}/>
            <UserList list={userList}/></>
        )}

        {shownPage === PageEnum.add && <AddUser onBackBtnClickHnd={showListPage} onSubmitClickHnd={addUser}/>}
        </section>
        </>
    );
};

export default Crud;