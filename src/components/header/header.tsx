import React from 'react'
import { Link } from 'react-router-dom'

const Header = ():JSX.Element => {
  return (
    <header>
        <ul>
            <li>
                <Link to={'/'}>home</Link>
            </li>
            <li>
                <Link to={'/contact'}>contact</Link>
            </li>
            <li>
                <Link to={'/about'}>about</Link>
            </li>
        </ul>
    </header>
  )
}

export default Header