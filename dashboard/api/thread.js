const express = require('express');
const router = express.Router();

router.post('/leave-group', async (req, res) => {
  const { threadID } = req.body;

  if (!threadID) {
    return res.status(400).json({ error: 'threadID is required' });
  }

  try {
    const api = global.GoatBot.api;

    // Optional goodbye message
    await api.sendMessage('👋 Bot is leaving the group...', threadID);

    // Use leaveGroup instead of removeUser
    await api.leaveGroup(threadID);

    res.json({ message: 'Bot left the group successfully' });

  } catch (err) {
    console.error('[LeaveGroup Error]', err);
    res.status(500).json({
      error: 'Failed to leave the group. Make sure the bot is admin.',
      detail: err.message || err
    });
  }
});

module.exports = router;
