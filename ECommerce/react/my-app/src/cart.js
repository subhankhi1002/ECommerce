import { useEffect, useState } from 'react';
import './App.css';

import CartProd from './cartProd';
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    let sum=0;
    useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem('Cart')) || [];
    setCartItems(storedItem)
  },[]);


    return(

        <>
            <div class="small-container cart-page">
                <h3>Your Cart</h3>
                {
                    cartItems.map((item,index)=> {
                        sum=sum + parseInt(item.prodPrice);
                        console.warn("res",item);
                        return(
                        <CartProd
                            img={item.path}
                            index={index}
                            n={item.prodName}
                            p={item.prodPrice}
                        />
                    );  
                    })    
                }
            <h3>Total is Rs {sum}</h3>
        </div>
    
        </>
    )
}

export default Cart;