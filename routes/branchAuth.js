import express from 'express';
import fs from 'fs';
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = JSON.parse(fs.readFileSync('./data/branchUsers.json', 'utf-8'));

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Invalid username or password' });
  }
});

export default router;

