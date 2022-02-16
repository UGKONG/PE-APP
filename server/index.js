const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const cors = require('cors');
const port = 8888;
const axios = require('axios');
const dbUrl = 'http://localhost:8888';

// 미들웨어 허용
app.use(cors());
app.use(express.json());

// 공지사항
app.route('/notice')
  .get((req, res) => {
    let json = require('./Database.json');
    let id = req.query.id;
    res.send(id ? json.noticeList.find(x => x.id == id) : json.noticeList);
    console.log(dbUrl + req.url);
  })
  .post((req, res) => {
    
  })
  .put((req, res) => {

  })
  .patch((req, res) => {

  })
  .delete((req, res) => {

  });


// 서버 실행
app.listen(port, () => {
  console.log('Server Start!! Port: ' + port);
})