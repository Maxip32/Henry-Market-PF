import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import {addQuantity, RemoveOneFromCart, RemoveAllProductFromCart, clearShoppingCart} from '../../redux/actions'
import './modalShoppingCart.css'

const ModalShoppingCart = ({ isOpen, closeModal }) => {

  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  const handleModalContainerClick = (e) => { e.stopPropagation()}

  let total = 0


  return (
    <div className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className='modal-container'  onClick={handleModalContainerClick}>
            <h3>Shopping Cart</h3>
            {shoppingCart.length === 0 && <div>You have not added products to the cart yet !</div> }
            {shoppingCart.length !==0 && shoppingCart.map((p, i) => {
                  total += p.price * p.quantity;
                return(
                        <div key={i} className='card'>
                            <img src={p.image} alt={p.name} width='80px' height='80px' />
                            <p style={{width:'100px'}}>{p.name}</p>
                            <p>
                                <button onClick={()=>{dispatch(addQuantity(p.id))}}>+</button>
                                <span style={{margin:'10px'}}>{p.quantity}</span>
                                <button onClick={()=>{dispatch(RemoveOneFromCart(p.id))}}>-</button>
                                <button onClick={()=>{dispatch(RemoveAllProductFromCart(p.id))}}
                                        style={{marginLeft:'10px'}}
                                >Remove</button>

                            </p>
                            <p>{p.price * p.quantity}</p>
                        </div>
            )} )}
            <p>Total: {total} </p>

            <button onClick={()=>{dispatch(clearShoppingCart())}}>Clear cart</button>

            <button className='modal-close' onClick={closeModal}>X</button>
            <Link to='/payment'><button>Checkout</button></Link>
            

        </div>
    </div>
  )
}

export default ModalShoppingCart