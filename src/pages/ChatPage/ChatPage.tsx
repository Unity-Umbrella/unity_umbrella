import React from 'react';
import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced";
import Header from "../../components/Header/Header";

const projectId: string = 'e2c0dc36-07ad-4ab5-b288-45ff3931ac4c'
const username: string = 'Bhumil73'
const secret: string = '3d58ca02-2855-472e-a761-eddad1ccce52'

function App() {
    /*return (
        <>
            <ChatEngine
                projectID='e2c0dc36-07ad-4ab5-b288-45ff3931ac4c'
                userName='Bhumil73'
                userSecret='3d58ca02-2855-472e-a761-eddad1ccce52'
            />
        </>

    );*/
    const chatProps = useMultiChatLogic(projectId, username, secret)
    return (
        <>
            <Header/>
            <div>
                {/* sockets */}
                <MultiChatSocket {...chatProps}/>
                {/* chat component content is here */}
                <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
            </div>
        </>
    );
}

export default App;