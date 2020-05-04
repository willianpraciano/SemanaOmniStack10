const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// MongoDB (Banco não relacional)
mongoose.connect('mongodb+srv://willian:praciano@cluster0-dwzsh.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology:true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

