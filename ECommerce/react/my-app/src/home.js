import './App.css';
import { Link, Route, Router, Routes } from 'react-router-dom';
const Home = () => {
    return(

        <>
        <div class="row">
        <div class="col-2">
            <h1>Give your workout a new stye</h1>
            <p>Success in your own hands. Consistent is the key</p>
            <Link to="/prodMenu" class="btn">Explore Now! &#8594;</Link>
        
        </div>
        <div class="col-2">
            <img src={require("./resources/images/image1.png")} alt="football"/>

        </div>
    </div>
        </>
    )
}

export default Home;