const server = require('./server.js');

const PORT = process.env.PORT || 4000;

server.listen(4000, () => {
  console.log(`\n*** Server Running on ${PORT}\n`);
});