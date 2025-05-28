router.get('/test-leave', async (req, res) => {
  const threadID = "9416183125167695"; // Replace with any TID you want to test

  try {
    const api = global.GoatBot.api;

    // Optional: Send a goodbye message
    await api.sendMessage("👋 Leaving this group...", threadID);

    // Leave the group
    await api.leaveGroup(threadID);

    return res.json({ success: true, message: "Bot left the group successfully." });
  } catch (err) {
    console.error("[Test LeaveGroup Error]", err);
    return res.status(500).json({ success: false, error: err.message || err });
  }
});
