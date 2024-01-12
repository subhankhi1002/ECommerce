import './App.css';
const Account = () => {
    return(

        <>
        <div class="account-page">
            <div class="continer">
                <div class="row">
                    <div class="col-2">
                        <img src={require("./resources/images/image1.png")} width="100%"/>
                    </div>
                    <div class="col-2">
                        <div class="form-container">
                            <div class="form-btn">
                                <span>Login</span>
                               
                            </div>
                            <form id="LoginForm">
                                <input type="text" placeholder="Username"/>
                                <input type="password" placeholder="Password"/>
                                <a href="index.html"><button type="submit" class="btn">Login</button></a>
                                <a href="">Forgot password</a>
                            </form>

                        
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
   
        </>
    )
}

export default Account;