import React from 'react';
import {Avatar, Container, ButtonBase, Grid, Paper, styled, Typography, Table} from "@mui/material";
import Header from '../../components/Header/Header';
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.style.css";
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import {BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsChatFill, BsPhoneFill, BsBook,
     BsHouseAddFill, BsHouse, Bs1SquareFill} from 'react-icons/bs'

function dashbd()
{
    return(
        <>
        <main className='main-title'>
            
        </main>
        <div id='grid-container'>
            <Sidebar />

        </div>
        </>
    );
};

export default dashbd;