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
        "data": "1998/07/18",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
       },
      {
        "titulo": "reuniao com o Luciano",
        "data": "2050/07/18",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      },
      {
        "titulo": "reuniao com o Roberto",
        "data": "2022/05/13",
        "location": "FAI",
        "hora": "19h",
        "email": "tibursio@gmail.com"
      }
    ]
  );
});

app.post('/insere-reuniao', function (req, res) {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log("escutando na porta 3000");
});

