import { useState } from 'react';
import Cart from '../cart/cart';
import './header.css'
import { FaOpencart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Carts } from '../../data/data';

const Header = ():JSX.Element => {
  const [onCart,setOnCart] = useState<boolean>(false)
  const count:Carts[] = useSelector((state:any) => state.cart)
  
  const offCart = () => {
    setOnCart(false)
  }
  return (
    <header>
        <FaOpencart onClick={() => setOnCart(true)} className='iconHeader'/>
        <span className="countUi">{count.length}</span>
        {onCart ? <Cart offCart={offCart}/> : null}
    </header>
  )
}

export default Header