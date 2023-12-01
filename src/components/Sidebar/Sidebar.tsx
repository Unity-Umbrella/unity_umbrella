import * as React from 'react';
import {colors} from "../../styles/colors";
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsChatFill, BsPhoneFill, BsBook,
 BsHouseAddFill, BsHouse, Bs1SquareFill} from 'react-icons/bs'

function Sidebar(){
    return(
        <aside id="sidebar">
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsGrid1X2Fill className='icon_header'/>DASHBOARD
                </div>
                <span className='icon close_icon'>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="Home.tsx">
                        <BsHouseAddFill className='icon'/>Home
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="pages/Login/Login.tsx">
                        <Bs1SquareFill className='icon'/>Login
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/>AdminPortal
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/>StudentDirectory
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsHouse className='icon'/>HouseListing
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsChatFill className='icon'/>Chat
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsBook className='icon'/>AboutUs
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPhoneFill className='icon'/>ContactUs
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon'/>Settings
                    </a>
                </li>
            </ul>
        </aside>

    );

};

export default Sidebar;