var express = require('express');
var app = express();  //  O express retorna um aplicativo

app.use(function (req, res, next) {
  //res.header("Access-Control-Allow-Origin", "https://barbeariadomatheus.vercel.app"); // update to match the 

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  res.header('Access-Control-Allow-Credentials', true);

  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");

  next();
});

app.use(express.json())

app.get('/pega-reunioes', function (req, res) {
  res.send(
    [
      {
        "titulo": "reuniao com a silvana",
        "data": "23/02/2024",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      },
      {
        "titulo": "reuniao com a silvana",
        "data": "18/12/1998",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      },
      {
        "titulo": "reuniao com a silvana",
        "data": "2023/05/20",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      }, {
        "titulo": "reuniao com a silvana",
        "data": "2023/02/15",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      }, {
        "titulo": "reuniao com a silvana",
        "data": "2023/04/18",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      }, {
        "titulo": "reuniao com a silvana",
        "data": "2023/05/30",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      },
    ]
  );
});

app.post('/insere-reuniao', function (req, res) {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log("escutando na porta 3000");
});

