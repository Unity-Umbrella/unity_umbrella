import React from 'react';
import {Avatar, Container, ButtonBase, Grid, Paper, styled, Typography} from "@mui/material";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import {MultiChatWindow, useMultiChatLogic, MultiChatSocket} from 'react-chat-engine-advanced';

//server
const projectID='e2c0dc36-07ad-4ab5-b288-45ff3931ac4c'
const userName='Bhumil73'
const userSecret='3d58ca02-2855-472e-a761-eddad1ccce52'


function Chatpg() {
    //logic
    const chatProps = useMultiChatLogic(projectID, userName, userSecret)
    return (
        <>
            <div>
                <Header/>

            </div>
            <div>
                {/* sockets */}
                <MultiChatSocket {...chatProps}/>
                {/* chat component content is here */}
                <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
            </div>
        </>
    );


}


export default Chatpg;