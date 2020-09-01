const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.render('home');
});

router.get('/orders', async (req, res)=> {
  const orders = await Orden.find();
  res.render('orders', {
    orders
  });
});

router.get('/shipments', async (req, res) => {
  const shipments = await Viaje.find();
  res.render('shipments', {
    shipments
  });
});

router.get('/master', (req, res) => {
  res.render('master');
});

router.get('/master/trucks', async (req, res) => {
  const camiones = await Camion.find();
  res.render('master/trucks', {
    camiones
  });
});

router.get('/master/chasis', async (req, res) => {
    const ramplas = await Rampla.find();
  res.render('master/chasis', {
      ramplas
  });
});

router.get('/master/workers', async (req, res) => {
    const trabajadores = await Trabajador.find();
  res.render('master/workers', {
      trabajadores
  });
});

router.get('/charges', async (req, res) => {
  const cobros = await Cobro.find();
  res.render('charges',{
    cobros
  });
});
/*CAMIONES*/

const Camion = require('../models/camiones.js');

router.post('/addTruck', async (req,res) =>{
  const camiones = new Camion(req.body);
  await camiones.save();
  res.redirect('master/trucks');
});

router.get('/deleteTruck/:id', async (req, res) => {
  const { id } = req.params;
  await Camion.remove({ _id: id });
  res.redirect('/master/trucks');
});


router.get('/master/editTruck/:id', async (req,res)=>{
  const{ id } = req.params;
  const camiones = await Camion.findById(id);
  res.render('master/editTruck', {
    camiones
  });
});

router.post('/editTruck/:id', async (req, res) => {
  const { id } = req.params;
  await Camion.update({ _id: id }, req.body);
  res.redirect('/master/trucks')
});

/*RAMPLAS*/

const Rampla = require('../models/ramplas.js');

router.post('/addChasis', async (req,res) =>{
  const ramplas = new Rampla(req.body);
  await ramplas.save();
  res.redirect('master/chasis');
});

router.get('/deleteChasis/:id', async (req, res) => {
  const { id } = req.params;
  await Rampla.remove({ _id: id });
  res.redirect('/master/chasis');
});


router.get('/master/editChasis/:id', async (req,res)=>{
  const{ id } = req.params;
  const ramplas = await Rampla.findById(id);
  res.render('master/editChasis', {
    ramplas
  });
});

router.post('/editChasis/:id', async (req, res) => {
  const { id } = req.params;
  await Rampla.update({ _id: id }, req.body);
  res.redirect('/master/chasis')
});

/*TRABAJADORES*/

const Trabajador = require('../models/trabajadores.js');

router.post('/addWorker', async (req,res) =>{
  const trabajadores = new Trabajador(req.body);
  await trabajadores.save();
  res.redirect('master/workers');
});

router.get('/deleteWorker/:id', async (req, res) => {
  const { id } = req.params;
  await Trabajador.remove({ _id: id });
  res.redirect('/master/workers');
});


router.get('/master/editWorker/:id', async (req,res)=>{
  const{ id } = req.params;
  const trabajadores = await Trabajador.findById(id);
  res.render('master/editWorker', {
    trabajadores
  });
});

router.post('/editWorker/:id', async (req, res) => {
  const { id } = req.params;
  await Trabajador.update({ _id: id }, req.body);
  res.redirect('/master/workers')
});

/*COBROS*/
const Cobro = require('../models/cobros.js');

router.post('/addcharge', async (req, res) => {
  const cobros = new Cobro(req.body);
  await cobros.save();
  res.redirect('/charges');
});

/*VIAJES*/
const Viaje = require('../models/cobros.js');

router.post('/addShipment', async (req, res) => {
  const viajes = new Viaje(req.body);
  await viajes.save();
  res.redirect('/shipments');
});

/*ORDENES DE TRANSPORTE*/
const Orden = require('../models/orders.js');

router.post('/addOrder', async (req, res) => {
  const orders = new Orden(req.body);
  await orders.save();
  res.redirect('/orders');
});

module.exports = router;
