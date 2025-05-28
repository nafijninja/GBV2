const express = require("express");
const router = express.Router();

module.exports = (params) => {
  // Example test route
  router.get("/test", (req, res) => {
    res.json({ message: "Thread API route is working!" });
  });

  // Bot leave group route
  router.get("/test-leave", async (req, res) => {
    const threadID = "9416183125167695"; // Replace with your test thread ID

    try {
      const api = global.GoatBot.api;

      // Optional: Send a message before leaving
      await api.sendMessage("👋 Leaving this group...", threadID);

      // Leave the group
      await api.removeUserFromGroup(api.getCurrentUserID(), threadID);

      return res.json({ success: true, message: "Bot left the group successfully." });
    } catch (err) {
      console.error("[Test LeaveGroup Error]", err);
      return res.status(500).json({ success: false, error: err.message || err });
    }
  });

  return router;
};
