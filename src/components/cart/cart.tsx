import { useState, memo, useMemo } from "react";
import Modal from "../modal/modal";
import "./cart.css";
import { FaRecycle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Carts } from "../../data/data";
import { Dispatch } from "redux";

interface Props {
  offCart: Function;
}

const Cart = (props: Props): JSX.Element => {
  const cartItems: Carts[] = useSelector((state: any) => state.cart);
  const dispatch: Dispatch<any> = useDispatch();
  const [onModal, setOnModal] = useState<boolean>(false);
  const offModal = () => {
    setOnModal(false);
  };
  let total: any = useMemo(() => {
    let results = cartItems.reduce(
      (result: number, item: Carts) => result + item.price * item.quantity,
      0
    );
    return results;
  }, [cartItems]);
  return (
    <section className="cartOverlay">
      <div className="cart">
        <h1>Your Cart</h1>
        <ul className="listCarts">
          {cartItems.map((item: Carts) => {
            return (
              <li key={item.id} className="cartItem">
                <img src={item.img} alt="" />
                <p>{item.name}</p>
                <div className="cartQuantity">
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({ type: "ON_MINUS", payload: item.id })
                    }
                  >
                    -
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "ON_PLUS", payload: item.id })
                    }
                  >
                    +
                  </button>
                </div>
                <p>{item.quantity * item.price}</p>
                <FaRecycle
                  onClick={() =>
                    dispatch({ type: "DELETE_CART", payload: item.id })
                  }
                  className="iconListCart"
                />
              </li>
            );
          })}
        </ul>
        <div className="btnCart">
          <span style={{ color: "#fff" }}>Total: {total}</span>
          <button onClick={() => props.offCart()}>ESC</button>
          <button onClick={() => setOnModal(true)}>CHECK OUT</button>
        </div>
      </div>
      {onModal ? <Modal offCart={props.offCart} offModal={offModal} /> : null}
    </section>
  );
};

export default memo(Cart);
