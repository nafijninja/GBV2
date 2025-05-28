const express = require('express');
const router = express.Router();

router.post('/leave-group', async (req, res) => {
  const { threadID } = req.body;

  if (!threadID) {
    return res.status(400).json({ error: 'threadID is required' });
  }

  try {
    // Optional: send a goodbye message before leaving
    await global.GoatBot.api.sendMessage('Leaving the group now 👋', threadID);

    // Use the proper API call to leave the group
    await global.GoatBot.api.leaveGroup(threadID);

    return res.json({ message: 'Bot left the group successfully' });

  } catch (err) {
    console.error('[LeaveGroup Error]', err);
    return res.status(500).json({ error: 'Failed to leave the group. Make sure the bot is an admin.' });
  }
});

module.exports = router;
