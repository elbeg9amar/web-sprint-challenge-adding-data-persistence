const server = require('./API/server')

const PORT = process.env.PORT || 999;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});