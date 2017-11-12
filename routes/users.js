var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/aNewRoute', (req,res,next)=>{
	res.send('success')
})

router.post('/about', (req,res,next)=>{
	router.send('write up about this user.')
	// comeback to finish up
})

module.exports = router;
