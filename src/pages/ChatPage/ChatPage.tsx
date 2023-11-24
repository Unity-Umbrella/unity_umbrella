import React from 'react';
import {Avatar, Container, ButtonBase, Grid, Paper, styled, Typography} from "@mui/material";
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import {MultiChatWindow, useMultiChatLogic, MultiChatSocket} from 'react-chat-engine-advanced';

//server
const projectId: string = '56d25bbb-a788-4834-a839-3a7f00b5b7a3'
const username: string = 'Richi'
const secret: string = '12345'

function Chatpg() {
    //logic
    const chatProps = useMultiChatLogic(projectId, username, secret)
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