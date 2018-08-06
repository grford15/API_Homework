const express = require('express');
const router = new express.Router();

router.use('/teams', require('./teams'));
router.use('/players', require('./players'));

router.get('/', function(req, res){
  res.json({data: "Welcome!"})
});

router.get('/about', function(req, res){
  res.json({data: "Here's what we're about"})
})

module.exports = router;
