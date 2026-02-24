const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'public', 'index.html');

function handler(req, res) {
  fs.readFile(indexPath, 'utf8', (err, html) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Internal Server Error');
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
  });
}

module.exports = handler;
