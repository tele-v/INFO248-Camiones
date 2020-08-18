const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
  res.render('home');
});

router.get('/orders', (req, res)=> {
  res.render('orders');
});

router.get('/shipments', (req, res) => {
  res.render('shipments');
});

router.get('/master', (req, res) => {
  res.render('master');
});

router.get('/master/enterprises', async (req, res) => {
    const empresas = await Empresa.find();
  res.render('master/enterprises', {
      empresas
  });
});

router.get('/master/clients', async (req, res) => {
    const clientes = await Cliente.find();
  res.render('master/clients', {
      clientes
  });
});

router.get('/master/providers', async (req, res) => {
    const proveedores = await Proveedor.find();
  res.render('master/providers', {
      proveedores
  });
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

router.get('/master/banks', async (req, res) => {
    const bancos = await Banco.find();
  res.render('master/banks', {
      bancos
  });
});

router.get('/master/ensurance', async (req, res) => {
    const seguros = await Seguro.find();
  res.render('master/ensurance', {
      seguros
  });
});

router.get('/payments', async (req, res) => {
  const bancos = await Banco.find();
  res.render('payments', {
    bancos
  });
});

router.get('/payments/paymentsEnterprises', (req, res) => {
  res.render('payments/paymentsEnterprises');
});

router.get('/payments/paymentsProviders', (req, res) => {
  res.render('payments/paymentsProviders');
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

/*CLIENTES*/

const Cliente = require('../models/clientes.js');

router.post('/addClient', async (req,res) =>{
  const clientes = new Cliente(req.body);
  await clientes.save();
  res.redirect('master/clients');
});

router.get('/deleteClient/:id', async (req, res) => {
  const { id } = req.params;
  await Cliente.remove({ _id: id });
  res.redirect('/master/clients');
});


router.get('/master/editClient/:id', async (req,res)=>{
  const{ id } = req.params;
  const clientes = await Cliente.findById(id);
  res.render('master/editClient', {
    clientes
  });
});

router.post('/editClient/:id', async (req, res) => {
  const { id } = req.params;
  await Cliente.update({ _id: id }, req.body);
  res.redirect('/master/clients')
});

/*PROVEEDORES*/

const Proveedor = require('../models/proveedores.js');

router.post('/addProvider', async (req,res) =>{
  const proveedores = new Proveedor(req.body);
  await proveedores.save();
  res.redirect('master/providers');
});

router.get('/deleteProvider/:id', async (req, res) => {
  const { id } = req.params;
  await Proveedor.remove({ _id: id });
  res.redirect('/master/providers');
});


router.get('/master/editProvider/:id', async (req,res)=>{
  const{ id } = req.params;
  const proveedores = await Proveedor.findById(id);
  res.render('master/editProvider', {
    proveedores
  });
});

router.post('/editProvider/:id', async (req, res) => {
  const { id } = req.params;
  await Proveedor.update({ _id: id }, req.body);
  res.redirect('/master/providers')
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

/*EMPRESAS*/

const Empresa = require('../models/empresas.js');

router.post('/addEnterprise', async (req,res) =>{
  const empresas = new Empresa(req.body);
  await empresas.save();
  res.redirect('master/enterprises');
});

router.get('/deleteEnterprise/:id', async (req, res) => {
  const { id } = req.params;
  await Empresa.remove({ _id: id });
  res.redirect('/master/enterprises');
});


router.get('/master/editEnterprise/:id', async (req,res)=>{
  const{ id } = req.params;
  const empresas = await Empresa.findById(id);
  res.render('master/editEnterprise', {
    empresas
  });
});

router.post('/editEnterprise/:id', async (req, res) => {
  const { id } = req.params;
  await Empresa.update({ _id: id }, req.body);
  res.redirect('/master/enterprises')
});

/*BANCOS*/

const Banco = require('../models/bancos.js');

router.post('/addBank', async (req,res) =>{
  const bancos = new Banco(req.body);
  await bancos.save();
  res.redirect('master/banks');
});

router.get('/deleteBank/:id', async (req, res) => {
  const { id } = req.params;
  await Banco.remove({ _id: id });
  res.redirect('/master/banks');
});


router.get('/master/editBank/:id', async (req,res)=>{
  const{ id } = req.params;
  const bancos = await Banco.findById(id);
  res.render('master/editBank', {
    bancos
  });
});

router.post('/editBank/:id', async (req, res) => {
  const { id } = req.params;
  await Banco.update({ _id: id }, req.body);
  res.redirect('/master/banks')
});

/*SEGUROS*/

const Seguro = require('../models/seguros.js');

router.post('/addEnsurance', async (req,res) =>{
  const seguros = new Seguro(req.body);
  await seguros.save();
  res.redirect('master/ensurance');
});

router.get('/deleteEnsurance/:id', async (req, res) => {
  const { id } = req.params;
  await Seguro.remove({ _id: id });
  res.redirect('/master/ensurance');
});


router.get('/master/editEnsurance/:id', async (req,res)=>{
  const{ id } = req.params;
  const seguros = await Seguro.findById(id);
  res.render('master/editEnsurance', {
    seguros
  });
});

router.post('/editEnsurance/:id', async (req, res) => {
  const { id } = req.params;
  await Seguro.update({ _id: id }, req.body);
  res.redirect('/master/ensurance')
});

/*COBROS*/
const Cobro = require('../models/cobros.js');


module.exports = router;
