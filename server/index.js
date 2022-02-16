const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const cors = require('cors');
const port = 8888;
const dbUrl = 'http://localhost:8888';
const fs = require('fs');
const { getDateTime } = require('./functions.js');
const { json } = require('express');
let Database = fs.readFileSync(__dirname + '/Database.json', 'utf-8', () => {});
Database = JSON.parse(Database);


// 미들웨어 허용
app.use(cors());
app.use(json());

// 공통
app.get('/', (req, res) => {
  res.send(getDateTime());
  console.log(dbUrl + req.url);
});

// 공지사항
app.route('/notice/')
  .get((req, res) => {
    let id = Number(req.query.id);
    res.send(id ? Database.noticeList.find(x => x.id === id) : Database.noticeList);
    console.log(dbUrl + req.url);
  })
  .post((req, res, next) => {
    Database.noticeList.push(req.body);
    let data = JSON.stringify(Database, null, 2);
    fs.writeFile(__dirname + '/Database.json', data, 'utf-8', err => {
      if (err) throw err;
      console.log('데이터 저장 완료!!');
    });
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
});