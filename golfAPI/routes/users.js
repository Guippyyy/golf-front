var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let dataArray = [{
    FirstName: "Guillaume",
    LastName: "De Craene",
    Email: "guillaume@gmail.com",
    homeClub: "none",
    hcp: "12.3"
  }, {
    FirstName: "Guillaume",
    LastName: "De Craene",
    Email: "guillaume@gmail.com",
    homeClub: "none",
    hcp: "12.3"
  }, {
    FirstName: "Guillaume",
    LastName: "De Craene",
    Email: "guillaume@gmail.com",
    homeClub: "none",
    hcp: "12.3"
  }];

  res.json({
    data: dataArray
  });

});

module.exports = router;