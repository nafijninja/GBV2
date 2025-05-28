const express = require('express');
const router = express.Router();

// Dummy function for bot leaving a group
async function botLeaveGroup(threadID) {
  // Your logic here to make the bot leave the group using threadID
  // e.g., call Facebook API or your internal bot logic
  // Return true if success, throw or return false if fail
  return true;
}

router.post('/leave-group', async (req, res) => {
  const { threadID } = req.body;
  if (!threadID) {
    return res.status(400).json({ error: 'threadID is required' });
  }

  try {
    const success = await botLeaveGroup(threadID);
    if (success) {
      return res.json({ message: 'Bot left the group successfully' });
    } else {
      return res.status(500).json({ error: 'Failed to leave the group' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
