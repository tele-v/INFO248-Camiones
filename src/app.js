const path = require('path')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req,file,cb) => {
        cb(null, file.originalname);
    }
})
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
/*app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/uploads')
}).single('image'));*/


//Routes multer
/*app.get('/', (req, res) => {
    res.render('/master/trucks');
})*/

/*app.post('/upload', (req, res) =>{
    console.log(req.file);
    res.send('uploaded');
})*/



//indexRoutes

app.use('/', indexRoutes);

//starting server

app.listen(app.get('port'),() =>{
  console.log(`Sever on port ${app.get('port')}`);
});
