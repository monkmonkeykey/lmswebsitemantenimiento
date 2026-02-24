const http = require('http');
const handler = require('./handler');

const port = process.env.PORT || 3000;

http.createServer(handler).listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
