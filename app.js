const routes = require('./routers/route');
const handlebars = require('express-handlebars');
const express = require('express');
//var cookieParser = require('cookie-parser');
var session = require('express-session');
const middlewares = require('./middlewares/middlewares');
const app = express();
const animalRoute = require('./routers/animalRoute');
const usuarioRoute = require('./routers/usuarioRoute');
const abrigoRoute = require('./routers/abrigoRoute');


app.use(session({secret:'textosecreto$asdfasdfaswwww',
        cookie:{maxAge: 30*60*1000}}));
//app.use(cookieParser());


app.engine('handlebars', handlebars.engine({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/abrigos', abrigoRoute);
app.use('/api/usuarios', usuarioRoute);
app.use('/api/animais', animalRoute);

app.use(middlewares.logRegister,middlewares.sessionControl)
app.use(routes);

app.use(
    express.urlencoded({
      extended: true
    })
)



app.listen(8081, function(){
        console.log("Servidor no http://localhost:8081")
});