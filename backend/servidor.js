var express = require('express');
var service = require('./service/mails_service');
var app = express();  //  O express retorna um aplicativo

app.use(express.json())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  res.header('Access-Control-Allow-Credentials', true);

  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");

  next();
});

// -----------------------------------------------------------------------------------------------

var reunioes = [];

app.get('/pega-reunioes', function (req, res) {
  res.send(
    reunioes   /// Ta sendo recebido aqui e ja enviando para o histórico
  );
});



// -----------------------------------------------------------------------------------------------

app.post('/insere-reuniao', function (req, res) {

  // api pega o corpo da request e converte para JSON
  let reuniao = JSON.stringify(req.body)

  // reuniao é um JSON > um objeto

  reunioes.push(reuniao);    ///    To pegando oque vem do from (via o service.js) e inserindo em uma lista
  
  console.log(reuniao);

  if(reuniao != "{}")
    service.main(reuniao);

  // envia um status e algo de resposta
  res.status(201).send("Chetelba")       /// retornando a reposta que deu certo (created -- 201)
});

app.listen(3000, () => {
  console.log("escutando na porta 3000");
});

