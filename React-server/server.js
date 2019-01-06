const express = require('express');
const app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
const port = process.env.PORT || 8081;
var cors = require('cors')

app.use(cors());
app.use(bodyParser());

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

app.get('/products', function (req, res) {
  fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      res.send( JSON.parse( data ) );
   });
});

app.post('/addProduct', function (req, res) {
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      newProduct = {"id": data.products[data.products.length-1].id+1, "name": req.body.product.name, "description": req.body.product.description, "keywords": req.body.product.keywords, "image": "asdwe", "age": req.body.product.age, "price": req.body.product.price}
      data.products.push(newProduct);
      fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(newProduct);
   });
})

app.delete('/deleteProduct/:id', function (req, res) {
  let productIndex = req.params.id;
   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data.products = data.products.filter(product => (product.id != productIndex))
      fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(productIndex);
   });
})

app.put('/editProduct/:id', function(req, res) {
  let idx = req.params.id;
  let productTo = req.body;
  fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
    data = JSON.parse( data );
    productTo.map((element,index) => {
      data[idx][element] = productTo[element];
    })
    fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
  });
})