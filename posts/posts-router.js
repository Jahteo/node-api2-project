const express = require('express');
const Posts = require("../data/db");
const router = express.Router();

router.get('/', (req, res) => {
  Posts.find(req.query)
    .then(posts => {
      res.status(200).json(posts)
    })
    //Does this automatically "cancel the request" or do I need to do something else?
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: "The posts information could not be retrieved."
      })
    })
})

module.exports = router;