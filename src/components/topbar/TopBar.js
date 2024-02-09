import "./topbar.css"
import React from 'react'
import { FaFacebookSquare,FaPinterestSquare, FaInstagramSquare  } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const TopBar = () => {
    const user = false;
  return (
    <>
        <div className="top">
            <div className="topLeft">
                <FaFacebookSquare className="topIcon"/>
                <FaSquareXTwitter className="topIcon"/>
                <FaPinterestSquare className="topIcon"/>
                <FaInstagramSquare className="topIcon"/>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/">
                        HOME
                    </Link>
                    </li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">
                    <Link className="link" to="/write">
                        WRITE
                    </Link>
                    </li>
                    {user && <li className="topListItem">LOGOUT</li>}
                </ul>
            </div>
            <div className="topRight">
            {user ? (
                <Link className="link" to="/settings">
                    <img
                        className="topImg"
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                </Link>
            ) : (
                <ul className="topList">
                    <li className="topListItem">
                    <Link className="link" to="/login">
                        LOGIN
                    </Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">
                        REGISTER
                    </Link>
                    </li>
                </ul>
                )}
                <IoIosSearch className="topSearchIcon"/>
            </div>
        </div>
    </> 
  )
}

export default TopBar