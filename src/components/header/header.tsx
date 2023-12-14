import { useState } from 'react';
import Cart from '../cart/cart';
import './header.css'
import { FaOpencart } from "react-icons/fa";

const Header = ():JSX.Element => {
  const [openCart, setOpenCart] = useState<boolean>(false)
  const offCart = ():void =>{
    setOpenCart(false)
  }

  return (
    <header>
        <FaOpencart onClick={() => setOpenCart(true)} className='iconHeader'/>
        <span className="countUi">2</span>
        {openCart ? <Cart offCart={offCart}/> : null}
    </header>
  )
}

export default Header