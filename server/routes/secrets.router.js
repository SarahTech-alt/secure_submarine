const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
  // what is the value of req.user????
  console.log('req.user:', req.user);
  const userId = req.user.id;
  queryForClearance = `SELECT "id","clearance_level" FROM "user" WHERE "id"=$1;`
  pool
    .query(queryForClearance, [userId])

    .then((results) => 
    const clearanceLevel = (results.rows.clearance_level);
    console.log(clearanceLevel);
    
    
    
    pool.query(`SELECT "content" FROM "secret" WHERE "secret"."secrecy_level" < $1 `, [clearanceLevel]).then(results => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log('Error making SELECT for secrets:', error);
      res.sendStatus(500);
    });
});


module.exports = router;
