const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.render('login');
});

router.get('/home', (req, res)=> {
  res.render('home');
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

module.exports = router;
