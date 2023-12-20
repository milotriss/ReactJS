import { useDispatch, useSelector } from 'react-redux'
import { Carts } from '../../data/data'
import './modal.css'
import { Dispatch } from 'redux'

interface Props {
  offModal:Function
  offCart:Function
}
const Modal = (props:Props):JSX.Element => {
  const dispatch:Dispatch<any> = useDispatch()
  return (
    <section className="modalOverlay">
        <div className="modal">
            <p>Are you SURE ?</p>
            <div className="modalActions">
                <button onClick={() => props.offModal()}>No</button>
                <button onClick={()=>{
                  dispatch({type:"PAYMENT"})
                  props.offModal()
                  props.offCart()
                }}
                >
                Yes</button>
            </div>
        </div>
    </section>
  )
}

export default Modal