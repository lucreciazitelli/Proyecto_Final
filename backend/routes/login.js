var mongoose = require("mongoose");
var router = require("express").Router();
var User = mongoose.model("user");
const util = require("../utils/util");

/** Middleware para verificar si el usuario NO esta logueado*/
const checkNotLoggedIn = (req, res, next) => {
  if (req.session.userId === undefined) {
    next();
  } else {
    res.status(403).send({ error: "Already logged in" });
  }
};

router.post("/", checkNotLoggedIn, (req, res, next) => {
  let user = req.body.username;
  let password = req.body.password;

  let logindata = {
    username: user,
    password: util.passwordHash(password)
  };

  User.findOne(logindata)
    .then(
      function(data) {
        if (!data) {
          return res.sendStatus(404);
        }
          return res.status(200).json(data);
      },
      function(err) {
        return res.status(500).send(err.message);
      }
    )
    .catch(rejected => {
      return res.status(403).send(rejected);
    });
});

/** Devuelve el estado del usuario loggedIn: true - false*/
router.get("/", (req, res, next) => {
  let isLoggedIn = req.session.userId ? true : false;
  res.status(200).send({ loggedIn: isLoggedIn });
});

module.exports = router;
