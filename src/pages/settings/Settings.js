import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/SideBar'
import { FaRegUserCircle } from "react-icons/fa";

const Settings = () => {
  return (
    <div className='settings'>
        <div className='settingsWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img className='settingsPPImg'
                        src='https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp'
                        alt=''
                    />
                    <label htmlFor='fileInput'>
                        <FaRegUserCircle className='settingsPPIcon'/>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type='text' placeholder='Ravi' name='name'/>
                <label>Email</label>
                <input type='email' placeholder='ravi@gmail.com' name='email'/>
                <label>Password</label>
                <input type='password' placeholder='password' name='password'/>
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings