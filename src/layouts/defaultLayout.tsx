import React from 'react'
import Header from '../components/header/header'

interface Props {
    son:JSX.Element
}

const DefaultLayout = (props:Props):JSX.Element => {
  return (
    <div>
        <Header/>
        <div className="content">
            {props.son}
        </div>
    </div>
  )
}

export default DefaultLayout