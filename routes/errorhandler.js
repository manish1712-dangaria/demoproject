var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the About Page.');
});

router.post ('/users',(req,res)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).send('login details are required.');
    }

    res.send('User cretaed susccessfully.');
});

router.use((req,res)=>{
    res.status(404).send('Page not found');
})

router.use((err,req,res,next)=>{
console.error(err.stack);
res.status(500).send('Internal Server Error.');
});

module.exports = router;