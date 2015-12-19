var http = require('http')
var fs = require('fs')

// Crappiest Server In History

http.createServer(function (req, res) {
  var p = req.url.split('/');
  console.log(p)

  if (p[1] === 'paper.js') {
    res.write(fs.readFileSync('node_modules/paper/dist/paper-full.js'))
  } else if (p[1] === 'game.paperscript') {
    res.write(fs.readFileSync('game.paperscript'))
  } else {
    res.write(fs.readFileSync('index.html'))
  }

  res.end()
}).listen(8080)