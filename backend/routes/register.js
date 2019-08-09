  var mongoose = require('mongoose');
var router = require('express').Router();
var User = mongoose.model('user');
const util = require('../utils/util');

//Register account
router.post('/', (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;
	let name = req.body.name;
	
    let objuser = {
      username: username,
      password: util.passwordHash(password),
	  name:name
    };
    let user = new User(objuser);
    user.save(function(err) {
      if (err !== null) {
        return res.status(403).send({error:err});
      } else {
        return res.status(200).send({});
      }
    });
  });



module.exports = router;