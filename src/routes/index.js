const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.render('login');
});

router.get('/home', (req, res)=> {
  res.render('home/home');
});

/*TEMP. USER REGISTRATION */
router.get('/register', (req, res)=> {
  res.render('register');
});

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = { rut: req.body.rut, password: hashedPassword }
    await user.save();
    res.status(201).send()
    res.redirect('login');
  }
  catch {
    res.status(500).send()
  }
})
/*TEMP. USER REGISTRATION*/

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

router.get('/masterworkers', (req, res)=> {
  res.render('home/master/workers');
});

/*MASTER*/
module.exports = router;
