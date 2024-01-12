const express = require('express')
var bodyParser = require('body-parser')
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());
const products = [[{prodName: "Men's running shoes", prodPrice: "250", imagePath: "https://assets.ajio.com/medias/sys_master/root/he6/h80/10235901870110/-473Wx593H-440774019-red-MODEL.jpg", productId: "1"},
                  {prodName: "Men's trainers", prodPrice: "1250", imagePath: "https://imgs7.luluandsky.com/catalog/product/8/9/8907884126050_1_1.jpg", productId: "2"},
                  {prodName: "Trendy shoes", prodPrice: "3150", imagePath: "https://www.jiomart.com/images/product/original/rvbhiv0fyt/tee-town-trending-color-block-lower-track-pants-joggers-pajama-for-mens-black-product-images-rvbhiv0fyt-0-202210190442.jpg?im=Resize=(500,630)", productId: "3"},
                  {prodName: "Awesome shoes", prodPrice: "1050", imagePath: "https://img0.junaroad.com/uiproducts/19409852/zoom_4-1677343223.jpg", productId: "4"},
                  
]];
app.get('/', (req, res) => {
  console.log("/ invoked");
  res.send('Hello World!')
})

app.get('/products', (req,res) => {
  console.log("/products invoked");
  res.send(JSON.stringify(products));
  // res.sendStatus(404);
})

app.post('/login', jsonParser, (req, res) => {
  console.log("Request body: " + req.body);
  const email = req.body.email;
  const password = req.body.password;
  
  const isEmailValid = (email) => {
    const validEmailRegex = /^[a-zA-Z]+[\w\d]*([\.-]?[\w\d])*@[a-zA-Z]+[a-zA-Z0-9]*\.([a-zA-Z0-9]+\.)*[a-zA-Z]{2,5}$/;
    const isValid = validEmailRegex.test(email);
    console.log("isEmailValid::isValid: " + isValid);
    return isValid;
  }
  const isPasswordValid = (password) => {
    const validPassRegex = /pass+/;
    return (password == null || password.length < 8)? false: validPassRegex.test(password);
  }
  if(isEmailValid(email) && isPasswordValid(password)) {
    console.log("Auth success");
    res.send(JSON.stringify({
      email: email,
      name: email.substring(0, email.indexOf('@')),
      token: Math.random().toString(36).substring(2)
    }))
  } else {
    res.sendStatus(400);
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})