const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

// TEMP PROFILE DATA (later DB se aayega)
const PROFILE = {
  id: 1,
  name: "Alex Murphy",
  role: "Head of Operations",
  region: "North America",
  company: "RouteAI",
  fleetSize: 128
};

// GET PROFILE
router.get("/", auth, (req, res) => {
  res.json(PROFILE);
});

// UPDATE PROFILE
router.put("/update", auth, (req, res) => {
  const { name, role, region } = req.body;

  if (name) PROFILE.name = name;
  if (role) PROFILE.role = role;
  if (region) PROFILE.region = region;

  res.json({
    message: "Profile updated successfully",
    profile: PROFILE
  });
});

module.exports = router;
