import './App.css';
const SimilarProd = () => {
    return(

        <>
        <div class="categories">
        <h2 class="title">Similar Products</h2>
        <div class="small-container">
            <div class="row">
                <div class="col-4">
                    <a href="prod-det.html"><img src={require("./resources/images/product-1.jpg")}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>Rs 799</p>
                </div>

                <div class="col-4">
                    <a href="prod-det2.html"><img src={require("./resources/images/product-2.jpg")}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>Rs 799</p>
                </div>

                <div class="col-4">
                    <a href="prod-det3.html"><img src={require("./resources/images/product-3.jpg")}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>Rs 799</p>
                </div>

                <div class="col-4">
                    <a href="prod-det4.html"><img src={require("./resources/images/product-4.jpg")}/></a>
                    <h4>Printed red t-shirt</h4>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </div>
                    <p>Rs 799</p>
                </div>
                
            </div>
        </div>
    </div>
        </>
    )
}

export default SimilarProd;