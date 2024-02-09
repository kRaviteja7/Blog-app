import React from 'react'
import "./sidebar.css"
import { FaFacebookSquare,FaPinterestSquare, FaInstagramSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SideBar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img
                src="https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg"
                alt=""
            />
            <p>
                Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
                amet ex esse.Sunt eu ut nostrud id quis proident.
            </p>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Music</li>
                <li className='sidebarListItem'>Style</li>
                <li className='sidebarListItem'>Sport</li>
                <li className='sidebarListItem'>Tech</li>
                <li className='sidebarListItem'>Cinema</li>
            </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>FOLLOW US</span>
            <div className='sidebarSocial'>
                <FaFacebookSquare className="sidebarIcon"/>
                <FaSquareXTwitter className="sidebarIcon"/>
                <FaPinterestSquare className="sidebarIcon"/>
                <FaInstagramSquare className="sidebarIcon"/>
            </div>
        </div>
    </div>
  )
}

export default SideBar