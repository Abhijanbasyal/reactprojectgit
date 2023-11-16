const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Your in-memory "database" (replace this with a real database in production)
let users = [];

app.post('/api/signup', (req, res) => {
  const newUser = req.body;

  // Validate the request
  if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.username || !newUser.password || !newUser.confirmPassword) {
    return res.status(400).json({ error: 'All fields are required' });
  } else if (!isValidEmail(newUser.email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  } else if (newUser.password !== newUser.confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  // Save the user to the "database"
  users.push(newUser);

  // For simplicity, we'll just log the user data
  console.log('Signup successful:', newUser);

  res.json({ success: true });
});

const isValidEmail = (email) => {
  // Basic email validation, you can enhance it with a regex pattern
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
