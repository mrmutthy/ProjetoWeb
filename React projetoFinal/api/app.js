const express = require('express');
const routes = require('./routers/route');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./config/db_mongoose');

const secretKey = 'your_secret_key';
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes); // Prefixo para as rotas da API

mongoose.connect(db.connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.listen(8081, function(){
    console.log("Servidor no http://localhost:8081")
});