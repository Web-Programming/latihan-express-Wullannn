var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/paketwisata', function(req, res, next) {
  res.render('paketwisata', { title: 'Paket Wisata' });
});

router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'Pemesanan Paket Wisata' });
});

router.get('/orderdetail', function(req, res, next) {
  res.render('orderdetail', { title: 'Detail Order' });
});

module.exports = router;
