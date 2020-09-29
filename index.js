const express = require('express');
const postsRouter = require('./posts/posts-router');
//const Comments = require();
const server = express();
server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Testing, testing</h>
    <p>Juan, Too, Tree</p>
  `);
});

const port = 4000;
server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n')
});