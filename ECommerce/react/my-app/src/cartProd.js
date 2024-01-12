import { useEffect, useState } from 'react';
import './App.css';
const CartProd = (props) => {


    const [cartItems, setCartItems] = useState([]);
  let index = props.second;
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(storedItem)
  },[]);
  const removeFromCart = (index) => {
      const updatedCart = [...cartItems];
      updatedCart.splice(index,1);
      setCartItems(updatedCart);
      localStorage.setItem('Cart', JSON.stringify(updatedCart));
      window.location.reload(false);
  }
    return(

        <>
            <tr>
                <td>
                    <div class="cart-info">
                        <img src={props.img}/>
                        <div>
                            <p>{props.n}</p>
                            <small>Price:Rs.{props.p}<br/></small>
                            <div className='btn' onClick={() => removeFromCart(index)}>
                            <h4>Remove</h4>
                            </div>
                        </div>
                    </div>
                </td>
                
            </tr>

        </>
    )
}

export default CartProd;