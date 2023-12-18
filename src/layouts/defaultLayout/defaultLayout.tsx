import React from 'react'
import './defaultLayout.css'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'

interface Props {
    son:JSX.Element
}

const DefaultLayout = (props:Props):JSX.Element => {
  return (
    <div className='layout'>
        <div className="headerLayout">
        <Header />
        </div>
        <div className="sidebarLayout">
            <Sidebar/>
        </div>
        <div className="contentLayout">
            {props.son}
        </div>
    </div>
  )
}

export default DefaultLayout