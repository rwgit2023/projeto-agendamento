var express = require('express');
var app = express();  //  O express retorna um aplicativo
app.use(express.json())

app.get('/pega-reunioes', function (req, res) {
  res.send(
    [
      {
        "titulo": "reuniao com a silvana",
        "data": "23/02/2024",
        "location": "FAI",
        "hora": "19h"
      },
      {
        "titulo": "reuniao com o mestre",
        "data": "23/02/2024",
        "location": "FAI",
        "hora": "21h"
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

