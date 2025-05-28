// Load necessary modules
const express = require("express");
const router = express.Router();
const axios = require("axios"); // For HTTP requests (future use)
const fs = require("fs-extra"); // For file handling (future use)

router.get("/test-leave", async (req, res) => {
  const threadID = "9416183125167695"; // Replace with your thread ID

  try {
    const api = global.GoatBot?.api;

    if (!api) {
      return res.status(500).json({ success: false, error: "Bot API is not initialized." });
    }

    // Optional: Send a goodbye message
    await api.sendMessage("👋 Bot is leaving this group...", threadID);

    // Leave the group
    await api.removeUserFromGroup(api.getCurrentUserID(), threadID);

    return res.json({ success: true, message: "Bot left the group successfully." });
  } catch (err) {
    console.error("[Test LeaveGroup Error]", err);
    return res.status(500).json({ success: false, error: err.message || err });
  }
});

module.exports = router;
