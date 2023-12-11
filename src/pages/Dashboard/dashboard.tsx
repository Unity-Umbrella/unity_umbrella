import React from 'react';
import {Avatar, Container, ButtonBase, Grid, Paper, styled, Typography, Table} from "@mui/material";
import Header from '../../components/Header/Header';
import Sidebar from "../../components/Sidebar/Sidebar";
import "./dashboard.style.css";
import {BsFillTrashFill, BsFillPencilFill} from "react-icons/bs";
import {BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsChatFill, BsPhoneFill, BsBook,
     BsHouseAddFill, BsHouse, Bs1SquareFill} from 'react-icons/bs'

function dash() {
    return (
        <>
            <div>
                <Header/>

            </div>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Page</th>
                        <th className="expand">Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Home</td>
                        <td>This is the main page</td>
                        <td><span className="label label-live">Live</span></td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Page</td>
                        <td>This is the page</td>
                        <td><span className="label label-draft">Draft</span></td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>Page3</td>
                        <td>This is the page</td>
                        <td><span className="label label-error">Error</span></td>
                        <td>
                            <span className="actions">
                                <BsFillTrashFill/>
                                <BsFillPencilFill/>
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default dash;