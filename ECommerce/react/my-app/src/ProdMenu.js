
import { useEffect, useState } from 'react';
import './App.css';
import Col4 from './col4';
const ProdMenu = () => {
    const[data, setData] = useState([]);
    const apiCall = async () => {
        let result = await fetch("http://localhost:3001/products");
        result = await result.json();
        setData(result);
        return;
    }
    useEffect( ()=> {
        apiCall();
        return;
    },[])
    console.warn("res",data);
    return(

        <>
    <div class="categories">
      
        <h2 class="title">Product Menu</h2>
        <div class="small-container">
        {
            data.map((item) => {
                const itemsVal = []
                item.map((inItem) =>{
                    itemsVal.push(inItem);
                })
                
                return(
                <Col4 
                  a1={itemsVal[0].imagePath} 
                  a2={itemsVal[0].prodName} 
                  a3={itemsVal[0].prodPrice}
                  a4={itemsVal[0].productId}

                  b1={itemsVal[1].imagePath} 
                  b2={itemsVal[1].prodName} 
                  b3={itemsVal[1].prodPrice}
                  b4={itemsVal[1].productId}

                  c1={itemsVal[2].imagePath} 
                  c2={itemsVal[2].prodName} 
                  c3={itemsVal[2].prodPrice}
                  c0={itemsVal[2].productId}

                  d1={itemsVal[3].imagePath} 
                  d2={itemsVal[3].prodName} 
                  d3={itemsVal[3].prodPrice}
                  d4={itemsVal[3].productId}
                />
                );
            })
        }
        </div>
    </div>
        </>
    )
}

export default ProdMenu;