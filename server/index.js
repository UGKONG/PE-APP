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
let Database;

const getDatabase = (fn) => {
  fs.readFile(__dirname + '/Database.json', 'utf-8', (err, data) => {
    Database = JSON.parse(data);
    fn(data);
  })
}

// 미들웨어 허용
app.use(cors());
app.use(json());

// 공통
app.get('/', (req, res) => res.send(getDateTime()));

// 개인정보
app.route('/user')
  .get((req, res) => {
    getDatabase(() => res.send(Database.user));
  })
  .post((req, res) => {
    getDatabase(() => {
      Database.user.push(req.body);
      let data = JSON.stringify(Database, null, 2);
      fs.writeFile(__dirname + '/Database.json', data, 'utf-8', err => {
        if (err) throw err;
      });
      res.end();
    })
  })
  .delete((req, res) => {
    getDatabase(() => {
      Database.user.pop();
      let data = JSON.stringify(Database, null, 2);
      fs.writeFile(__dirname + '/Database.json', data, 'utf-8', err => {
        if (err) throw err;
      });
      res.end();
    })  
  });
app.route('/user/:id')
  .get((req, res) => {
    getDatabase(() => {
      let id = Number(req.params.id);
      let data = Database.user.find(x => x.id === id);
      res.send(data ?? 'null');
    });
  })
  .delete((req, res) => {
    getDatabase(() => {
      let id = Number(req.params.id);
      let user = Database.user.filter(x => x.id !== id);
      Database.user = user;
      let data = JSON.stringify(Database, null, 2);
      fs.writeFile(__dirname + '/Database.json', data, 'utf-8', err => {
        if (err) throw err;
      });
      res.send(Database ?? 'null');
    })
  });

// 테스트 항목
app.route('/testItem')
  .get((req, res) => {
    getDatabase(() => res.send(Database.testItem))
  })

// 공지사항
app.route('/notice')
  .get((req, res) => {
    getDatabase(() => res.send(Database.notice))
  })
  .post((req, res) => {
    getDatabase(() => {
      Database.notice.push(req.body);
      let data = JSON.stringify(Database, null, 2);
      fs.writeFile(__dirname + '/Database.json', data, 'utf-8', err => {
        if (err) throw err;
      });
    });
  });
app.route('/notice/:id')
  .get((req, res) => {
    getDatabase(() => {
      let id = Number(req.params.id);
      let data = Database.notice.find(x => x.id === id);
      res.send(data ?? 'null');
    })
  })
  .delete((req, res) => {
    getDatabase(() => {
      let id = Number(req.params.id);
      let notice = Database.notice.filter(x => x.id !== id);
      Database.notice = notice;
      let data = JSON.stringify(Database, null, 2);
      fs.writeFile(__dirname + '/Database.json', data, 'utf-8', err => {
        if (err) throw err;
      });
      res.send(Database ?? 'null');
    })
  });

// 서버 실행
app.listen(port, () => {
  console.log('Server Start!! Port: ' + port);
});