const express = require('express');
const app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
const port = process.env.PORT || 8081;
var cors = require('cors')

app.use(cors());
app.use(bodyParser());

// console.log that your server is up and running
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
      data.push({"id": data[data.length-1].id, "name": req.body.name, "description": req.body.description, "keywords": req.body.keywords, "image": req.body.image, "age": req.body.age, "price": req.body.price});
      fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
   });
})

app.delete('/deleteProduct/:id', function (req, res) {
  let idx = req.params.id;

   fs.readFile( __dirname + "/" + "products.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data.splice(idx,1);
      fs.writeFile( __dirname + "/" + "products.json", JSON.stringify(data), function(err) {
        if (err) throw err;
        console.log('Data updated');
      });
      res.send(data);
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

app.post('/sessionOrder', function (req,res) {
  var order = req.body;

  for (var i = 0; i < orders.length; i++) {
    if (orders[i].imie === order.imie) {
      if(orders[i].nazwisko===order.nazwisko){
        res.status(304).send({err:304});
        return;
      }
    }
  }

  orders.push(order);
  console.log("post");
  res.send(order);
});