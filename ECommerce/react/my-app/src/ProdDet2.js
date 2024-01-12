import './App.css';
import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
const ProdDet2 = () => {

    const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  const addToCart = (name, price, imagePathVal) => {
      let existCartItems = JSON.parse(localStorage.getItem('Cart')) || [];
      let newItem = { prodName: name, prodPrice: price, path:imagePathVal };
      existCartItems = [...existCartItems, newItem];
      localStorage.setItem('Cart', JSON.stringify(existCartItems));

      alert('Product has been added to the Cart!!');
      
  }

  const apiCall = async () => {
    //let result = await fetch("http://localhost:3001/products");

    let result = await fetch("http://localhost:3001/products");
      result = await result.json();
      setData(result)
  } 
  useEffect( ()=> {
      apiCall();
  },[]);

  let {id} = useParams();

  useEffect(() => {
    const foundItem = data.flat().find((inItem) => id == inItem.productId);
    setItem(foundItem);
  }, [data, id]);



    return(

        <>
        <div class="small-container single-product">
        <div class="row1">
            <div class="col1-2">
                <div class="small-img-row">
                {item && item.imagePath && <img src={item.imagePath} alt="img1" width="100%"/>}

                    <div class="small-img-col">
                    {item && item.imagePath && <img src={item.imagePath} alt="img2" width="100%"/>}
                    </div>
                    <div class="small-img-col">
                    {item && item.imagePath && <img src={item.imagePath} alt="img3" width="100%"/>}
                    </div>
                    <div class="small-img-col">
                    {item && item.imagePath && <img src={item.imagePath} alt="img4" width="100%"/>}
                    </div>
                    <div class="small-img-col">
                    {item && item.imagePath && <img src={item.imagePath} alt="img5" width="100%"/>}
                    </div>
                        
                    
                </div>
            
            </div>
            <div class="col1-2 x">
                <p>Home / T-Shirt</p>
                {item && item.imagePath && <h1>{item.prodName}</h1>}
                {item && item.imagePath && <h1>{item.prodPrice}</h1>}
                <select>
                    <option>Select Size</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                </select>
                <input type="number" value="1"/>
                <div className='btn' onClick={() => addToCart(item.prodName, item.prodPrice, item.imagePath)}>
                <h4>Add to Cart</h4>
                </div>
                <h3>Product Details</h3>
                <p>100% Original Products
                    Pay on delivery might be available
                    Easy 14 days returns and exchanges
                    Try & Buy might be available</p>
            </div>
        </div>
    </div>

        </>
    )
}

export default ProdDet2;