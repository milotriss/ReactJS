import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import { FiHome } from "react-icons/fi";

const Sidebar = ():JSX.Element => {
  return (
    <aside className='sidebarMain'>
        <ul className="listItems">
            <li className="listItem">
                <Link to={'/'}>
                    <FiHome className='iconSidebar'/>
                    <p>Home</p>
                </Link>
            </li>
            <li className="listItem">
                <Link to={'/booking'}>
                    <FiHome className='iconSidebar'/>
                    <p>Booking</p>
                </Link>
            </li>
            <li className="listItem">
                <Link to={'/appointments'}>
                    <FiHome className='iconSidebar'/>
                    <p>Appointments</p>
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar