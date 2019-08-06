var colyseus = require('colyseus')
  , ChatRoom = require('./server/chat_room')
  , http = require('http')
  , express = require('express')
  , port = process.env.PORT || 2657
  , app = express();

var server = http.createServer(app)
  , gameServer = new colyseus.Server({server: server})

gameServer.register('private', ChatRoom, { pwd: "woods" })

app.use(express.static(__dirname));
app.use(express.static('dist'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

server.listen(port);

console.log(`Listening on http://localhost:${ port }`)