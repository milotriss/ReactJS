import { useState } from "react";
import Modal from "../modal/modal";
import "./cart.css";
import { FaRecycle } from "react-icons/fa";

interface Props {
  offCart:Function
}

const Cart = (props:Props): JSX.Element => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const offModal = ():void => {
    setOpenModal(false)
  }
  return (
    <section className="cartOverlay">
      <div className="cart">
        <h1>Your Cart</h1>
        <ul className="listCarts">
          <li className="cartItem">
            <img src="../../../asset/img/969cd1b6-7315-4be3-9544-2e4092aa9f35.jpeg" alt="" />
            <p>Name products</p>
            <div className="cartQuantity">
              <span>1</span>
              <button>-</button>
              <button>+</button>
            </div>
            <p>Price</p>
            <FaRecycle className="iconListCart" />
          </li>
          <li className="cartItem">
            <img src="../../../asset/img/Bread & Olives.jpeg" alt="" />
            <p>Name products</p>
            <div className="cartQuantity">
              <span>1</span>
              <button>-</button>
              <button>+</button>
            </div>
            <p>Price</p>
            <FaRecycle className="iconListCart" />
          </li>
          <li className="cartItem">
            <img src="../../../asset/img/chocolate crossiant 巧克力可颂.jpeg" alt="" />
            <p>Name products</p>
            <div className="cartQuantity">
              <span>1</span>
              <button>-</button>
              <button>+</button>
            </div>
            <p>Price</p>
            <FaRecycle className="iconListCart" />
          </li>
          <li className="cartItem">
            <img src="../../../asset/img/Rezept von Nima Hemmat-Azad_ Croissant _ Kochbücher & ihre besten Rezepte.jpeg" alt="" />
            <p>Name products</p>
            <div className="cartQuantity">
              <span>1</span>
              <button>-</button>
              <button>+</button>
            </div>
            <p>Price</p>
            <FaRecycle className="iconListCart" />
          </li>
        </ul>
        <div className="btnCart">
          <button onClick={() => props.offCart()}>ESC</button>
          <button onClick={() => setOpenModal(true)}>CHECK OUT</button>
        </div>
      </div>
      {openModal ? <Modal offModal={offModal}/> : null}
      
    </section>
  );
};

export default Cart;
