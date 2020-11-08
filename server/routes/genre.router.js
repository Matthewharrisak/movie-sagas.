const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// server get request that gets database infomation 
router.get('/:id', (req, res) => {
  // Add query to get all genres
  const queryText = ` SELECT * FROM "movies"
  JOIN "movie_genre" ON "movie_genre"."movie_id" = "movies"."id"
  JOIN "genres" ON "movie_genre"."genre_id" = "genres"."id"
  WHERE movies.id=${req.params.id};`;
  pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) =>{
      console.log(`Error with Query` , error);
      res.sendStatus(500);
    });
});



// selects all genres from database, which is used with out SAGA to send genres to reduxStore
router.get('/' , (req, res) => {
  const queryText = `SELECT * FROM genres;`;
  pool.query(queryText)
  .then((result) => {
      res.send(result.rows);
  }).catch((error) =>{
    console.log(`Error with Query` , error);
    res.sendStatus(500);
  });
});

module.exports = router;