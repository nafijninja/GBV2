const express = require("express");
const router = express.Router();

router.get("/test-leave", async (req, res) => {
  const threadID = "9416183125167695"; // Replace with real thread ID

  try {
    const api = global.GoatBot?.api;

    if (!api)
      return res.status(500).json({ success: false, error: "Bot API is not initialized." });

    await api.sendMessage("👋 Bot is leaving this group...", threadID);
    await api.removeUserFromGroup(api.getCurrentUserID(), threadID);

    return res.json({ success: true, message: "Bot left the group successfully." });
  } catch (err) {
    console.error("[LeaveGroup Error]", err);
    return res.status(500).json({ success: false, error: err.message || err });
  }
});

module.exports = router;
