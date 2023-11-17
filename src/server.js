// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

// Custom route for handling signup
server.post('/signup', (req, res) => {
  const userData = req.body;
  const db = router.db;
  const data = db.getState();
  data.users.push(userData);
  db.setState(data);
  db.write();
  res.json(userData);
});

// Custom route for handling login
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  const db = router.db;
  const data = db.getState();
  const user = data.users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

server.use(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
