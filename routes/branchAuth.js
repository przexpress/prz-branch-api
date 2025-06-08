 import express from 'express';
const router = express.Router();

// Dummy login credentials
const dummyUsers = [
  {
    username: 'branchadmin',
    password: '123456',
    name: 'Santa Rosa Branch',
  },
  {
    username: 'batangas01',
    password: '123456',
    name: 'Batangas Branch',
  },
];

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = dummyUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res
      .status(401)
      .json({ success: false, message: 'Invalid username or password' });
  }

  res.json({
    success: true,
    message: 'Login successful',
    user: {
      username: user.username,
      name: user.name,
    },
  });
});

export default router;
