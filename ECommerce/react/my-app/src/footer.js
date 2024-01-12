import './App.css';
const Footer = () => {
    return(

        <>
        <div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col-1">
                <h3>Downloaf Our App</h3>
                <p>Downlod App for Androi and ios mobile phone</p>
                <div class="app-logo">
                    <img src={require("./resources/images/play-store.png")}/>
                    <img src={require("./resources/images/app-store.png")}/>
                </div>
            </div>

            <div class="footer-col-2">
                <img src={require("./resources/images/logo-white.png")}/>
                <p>Benefits to make availability of Sports Products within your reach,<br/> just a Click Away!</p>

            </div>

            <div class="footer-col-2">
                <h3>Useful Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Reutrn Policy</li>
                    <li>Join Affiliate</li>
                </ul>
            </div>

            <div class="footer-col-4">
                <h3>Follow us</h3>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>You Tube</li>
                </ul>

        </div>
    </div>
</div>
</div>
        </>
    )
}

export default Footer;