var express = require('express');
router = express.Router();

router.get('/', function(req, res){
    res.send('API is working in Dev from VS Code!');
  });

module.exports = router;
