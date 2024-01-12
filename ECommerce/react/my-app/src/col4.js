import { generatePath } from 'react-router-dom';
import './App.css';
const Col4 = (props) => {
    
    const id1 = props.a4;
    const id2 = props.b4
    const id3 = props.c0;
    const id4 = props.d4;

    const url1 = generatePath("/ProdDet2/:id",{
        id : id1
    }
    )
    const url2= generatePath("/ProdDet2/:id",{
        id : id2
    }
    )
    const url3 = generatePath("/ProdDet2/:id",{
        id : id3
    }
    )
    const url4 = generatePath("/ProdDet2/:id",{
        id : id4
    }
    )
    
    return(

        <>
                <div class="row">
                <div class="col-4">
                    <a href={url1}><img src= {props.a1}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>{props.a3}</p>
                </div>

                <div class="col-4">
                    <a href={url2}><img src={props.b1}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>{props.b3}</p>
                </div>

                <div class="col-4">
                    <a href={url3}><img src={props.c1}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>{props.c3}</p>
                </div>

                <div class="col-4">
                    <a href={url4}><img src={props.d1}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>{props.d3}</p>
                </div>
                
            </div>
        </>
    )
}

export default Col4;