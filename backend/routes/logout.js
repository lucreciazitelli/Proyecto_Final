var mongoose = require("mongoose");
var router = require("express").Router();

router.get("/", (req, res) => {
  try {
    req.session.destroy(err => {
      if (err) {
        res.status(500).send({ error: "Couldn't log out" });
      } else {
        res.status(200).send({});
      }
    });
  } catch (e) {
    res.status(500).send({error:e});
  }
});

module.exports = router;
