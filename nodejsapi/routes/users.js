var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const {mongourl} = require('../config/keys')
const Wish = mongoose.model("wis" );

mongoose.connect(mongourl , {useNewUrlParser : true , useUnifiedTopology: true});


router.get('/', function(req, res, next) {

  Wish.find({}) .then(data=>{
    res.json(data)
  })

});

/* GET users listing. */
router.get('/:name', function(req, res, next) {
  // res.json('respond with a resource');
  Wish.find({wish:req.params.name}) .then(data=>{
    res.json(data)
  })

});

router.post('/', function(req, res, next) {
var name = req.body.name  ;
  console.log("Request",req.body);

  const data = new Wish ({
    wish : name 
  })

  data.save()
   .then(doc => {
     res.json(doc)
   })
   
  
});

router.delete('/:id', function(req, res, next) {
  // res.json('respond with a resource');
  Wish.findByIdAndDelete({_id:req.params.id}) .then(data=>{
    res.json(data)
  })

});


module.exports = router;
