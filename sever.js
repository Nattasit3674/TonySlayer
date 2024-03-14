// SQLite3 CRUD operations
// npm install sqlite3
// Create a Bood.sqlite file in Database folder
// Run this file with node CRUDBookSQLite.js
// Test with Postman

const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

// connect to database
const db = new sqlite3.Database('./Database/Books.sqlite');

// parse incoming requests
app.use(express.json());

// create books table if it doesn't exist
//table ที่ 1 ******
db.run(`CREATE TABLE IF NOT EXISTS books ( 
  id INTEGER PRIMARY KEY,
  title TEXT,
  author TEXT
)`);
//table ที่ 2 ******************************************************************************************************************
db.run(`CREATE TABLE IF NOT EXISTS auss ( 
  id_new INTEGER PRIMARY KEY,
  name TEXT,
  last TEXT
)`);
//table ที่ 3 ******************************************************************************************************************
db.run(`CREATE TABLE IF NOT EXISTS users ( 
  id_user INTEGER PRIMARY KEY,
  u_name TEXT,
  u_last TEXT,
  u_number TEXT,
  u_email TEXT
)`);

// route to get all books
app.get('/books', (req, res) => {
  db.all('SELECT * FROM books', (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

// route to get a book by id
app.get('/books/:id', (req, res) => {
  db.get('SELECT * FROM books WHERE id = ?', req.params.id, (err, row) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!row) {
        res.status(404).send('Book not found');
      } else {
        res.json(row);
      }
    }
  });
});

// route to create a new book
app.post('/books', (req, res) => {
  const book = req.body;
  db.run('INSERT INTO books (title, author) VALUES (?, ?)', book.title, book.author, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      book.id = this.lastID;
      res.send(book);
    }
  });
});

// route to update a book
app.put('/books/:id', (req, res) => {
  const book = req.body;
  db.run('UPDATE books SET title = ?, author = ? WHERE id = ?', book.title, book.author, req.params.id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(book);
    }
  });
});

// route to delete a book
app.delete('/books/:id', (req, res) => {
  db.run('DELETE FROM books WHERE id = ?', req.params.id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({});
    }
  });
});
// table ที่ 2 ******************************************************************************************
// route to get all books
app.get('/auss', (req, res) => {
  db.all('SELECT * FROM auss', (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

// route to get a book by id
app.get('/auss/:id_new', (req, res) => {
  db.get('SELECT * FROM auss WHERE id_new = ?', req.params.id_new, (err, row) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!row) {
        res.status(404).send('name not found');
      } else {
        res.json(row);
      }
    }
  });
});

// route to create a new book
app.post('/auss', (req, res) => {
  const aus = req.body;
  db.run('INSERT INTO auss (name, last) VALUES (?, ?)', aus.name, aus.last, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      aus.id_new = this.lastID;
      res.send(aus);
    }
  });
});

// route to update a book
app.put('/auss/:id_new', (req, res) => {
  const aus = req.body;
  db.run('UPDATE auss SET name = ?, last = ? WHERE id_new = ?', aus.name, aus.last, req.params.id_new, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(aus);
    }
  });
});

// route to delete a book
app.delete('/auss/:id_new', (req, res) => {
  db.run('DELETE FROM auss WHERE id_new = ?', req.params.id_new, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({});
    }
  });
});
// table ที่ 3 **************3***************3***********3****************3**************3********************
// route to get all books
app.get('/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

// route to get a book by id aus
app.get('/users/:id_user', (req, res) => {
  db.get('SELECT * FROM users WHERE id_user = ?', req.params.id_user, (err, row) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!row) {
        res.status(404).send('name not found');
      } else {
        res.json(row);
      }
    }
  });
});

// route to create a new book
app.post('/users', (req, res) => {
  const user = req.body;
  db.run('INSERT INTO users (u_name, u_last, u_number, u_email) VALUES (?, ?, ?, ?)', user.u_name, user.u_last, user.u_number, user.u_email,  function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      user.id_user = this.lastID;
      res.send(user);
    }
  });
});

// route to update a book  aus
app.put('/users/:id_user', (req, res) => {
  const user = req.body;
  db.run('UPDATE users SET u_name = ?, u_last = ?, u_number = ?, u_email = ? WHERE id_user = ?', user.u_name, user.u_last, user.u_number, user.u_email, req.params.id_user, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(user);
    }
  });
});

// route to delete a book
app.delete('/users/:id_user', (req, res) => {
  db.run('DELETE FROM users WHERE id_user = ?', req.params.id_user, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({});
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));