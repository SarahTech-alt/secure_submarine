const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  pool
    .query(`SELECT * FROM "log_entry"`)
    .then((results) => {
        console.log(results);
        res.send(results.rows)})
    .catch((error) => {
      console.log('Error making SELECT for secrets:', error);
      res.sendStatus(500);
    });
});


module.exports = router;