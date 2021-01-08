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
router.get('/masterchasis', (req, res)=> {
  res.render('home/master/chasis');
});
router.get('/mastertrucks', (req, res)=> {
  res.render('home/master/trucks');
});
router.get('/masterworkers', (req, res)=> {
  res.render('home/master/workers');
});
/*MASTER*/
module.exports = router;
