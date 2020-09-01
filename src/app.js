const path = require('path')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//connect db

mongoose.connect('mongodb://localhost/dbRutaChile')
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));

//importing routes

const indexRoutes = require('./routes/index');

//settings

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.static('src/assets/'));

//indexRoutes

app.use('/', indexRoutes);

//starting server

app.listen(app.get('port'),() =>{
  console.log(`Sever on port ${app.get('port')}`);
});
