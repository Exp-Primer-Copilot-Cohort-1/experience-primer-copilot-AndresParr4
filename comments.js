// Create web server using express
const express = require('express');
const app = express();

// Import comments.json
const comments = require('./comments.json');

// Path: /comments
// Response with JSON
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Path: /comments/:id
// Response with JSON
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

// Path: /
// Response with text
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: comments.js
// Create web server using express
const express = require('express');
const app = express();

// Import comments.json
const comments = require('./comments.json');

// Path: /comments
// Response with JSON
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Path: /comments/:id
// Response with JSON
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.find((comment) => comment.id === id);
  res.json(comment);
});

// Path: /
// Response with text
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: comments.json
// JSON data
[
  {
    "id": 1,
    "name": "Alice",
    "body": "Hello, World!"
  },
  {
    "id": 2,
    "name": "Bob",
    "body": "Hi, there!"
  }
]

// Path: comments.js
// Create web server using express
const express = require('express');
const app = express();

// Import comments.json
const comments = require('./comments.json');

// Path: /comments
// Response with JSON
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Path: /comments/:id
// for comments