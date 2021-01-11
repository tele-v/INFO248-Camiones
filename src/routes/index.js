const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

/*LOGIN*/
router.get('/', (req, res)=> {
  res.render('login');
});

router.get('/home', (req, res)=> {
  res.render('home/home');
});

const User = require('../models/user.js');

/*USER LOGIN CHECK*/
router.post("/login", async(req, res) => {
  console.log('a');
  const user = await User.findOne({rut: req.body.rut}, (err) =>{
    if (err){
      res.status(500).send();
    }
  });

  console.log(user.password);
  console.log(req.body.password);

  try{
    var good_pass = await bcrypt.compareSync(req.body.password, user.password);
  }
  catch{
    
  }
  console.log(good_pass)
  if (good_pass){
    res.redirect('/home');
  }
  console.log('-----');
});
  

/*USER REGISTER*/
router.get('/register', (req, res)=> {
  res.render('register');
});
router.post('/registeruser', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({ 
      rut: req.body.rut,
      password: hashedPassword,
      oficio: req.body.oficio 
      });
    await user.save();
    //res.status(201).send()
    res.redirect('/');
  }
  catch {
    res.status(500).send()
  }
})

/*MASTER*/
router.get('/master', (req, res)=> {
  res.render('home/master/master');
});

/*CHASIS*/
const Chasis = require('../models/chasis.js');
router.get('/masterchasis', async (req, res)=> {
  const chasis = await Chasis.find();
  res.render('home/master/chasis',{chasis});
});
router.post('/addChasis', async (req,res) =>{
  const chasis = new Chasis(req.body);
  await chasis.save();
  res.redirect('masterchasis');
});

/*TRUCKS*/
const Truck = require('../models/trucks.js');
router.get('/mastertrucks', async (req, res)=> {
  const trucks = await Truck.find();
  res.render('home/master/trucks',{trucks});
});
router.post('/addTruck', async (req,res) =>{
  const trucks = new Truck(req.body);
  await trucks.save();
  res.redirect('mastertrucks');
});

/*WORKERS*/
const Workers = require('../models/workers.js');
router.get('/masterworkers', async(req, res)=> {
  const workers = await Workers.find();
  res.render('home/master/workers',{workers});
});
router.post('/addWorker', async (req,res) =>{
  const workers = new Workers(req.body);
  await workers.save();
  res.redirect('masterworkers');
});

/*CLIENTS*/
const Clients = require('../models/clients.js');
router.get('/masterclients', async(req, res)=> {
  const clients = await Clients.find();
  res.render('home/master/clients',{clients});
});
router.post('/addClient', async (req,res) =>{
  const clients = new Clients(req.body);
  await clients.save();
  res.redirect('masterclients');
});
/*MASTER*/

/*ORDERS*/
router.get('/orders', (req, res) => {
  res.render('home/orders');
});
/*ORDERS*/

module.exports = router;
