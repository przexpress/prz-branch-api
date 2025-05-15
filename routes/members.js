const express = require('express');
const router = express.Router();

const members = [
  {
    id: 'M001',
    name: 'Juan Dela Cruz',
    cardId: 'CARD001',
    points: 120,
    savings: 10000,
    wallet: 500,
    loanCount: 2
  }
];

// GET /members/:id
router.get('/:id', (req, res) => {
  const memberId = req.params.id;
  const member = members.find(m => m.id === memberId);
  if (!member) {
    return res.status(404).json({ message: 'Member not found' });
  }
  res.json(member);
});

module.exports = router;


