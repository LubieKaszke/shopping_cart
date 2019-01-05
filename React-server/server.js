const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
var cors = require('cors')
app.use(cors());

var Meals = [{
    "nazwa": "kot",
    "cena": 123,
    "opis": "do jedzenia"
  },
  {
    "nazwa": "pies",
    "cena": 12,
    "opis": "biega"
  },
  {
    "nazwa": "kebab",
    "cena": 1,
    "opis": "do jedzenia"
  }];

var Tables=[{
    "id": "1",
    "zajety": "tak"
  },
  {
    "id": "2",
    "zajety": "nie"
  },
  {
    "id": "3",
    "zajety": "tak"
  }]
;

var Orders=[

];

var sessionOrder={
  "imie": "",
  "nazwisko": "",
  "table":"",
  "meals":[]
};

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/meals', function (req, res) {
  res.send(Meals);
});

app.get('/tables', function (req, res) {
  res.send(Tables);
});

app.get('/orders', function (req, res) {
  res.send(Orders);
});

app.get('/sessionOrder', function (req, res) {
  res.send(sessionOrder);
});

app.post('/sessionOrder', function (req,res) {
  var order = req.body;
  //console.log(req);
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