const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

// TEMP USER (later DB se aayega)
const USER = {
  id: 1,
  email: "admin@routeai.com",
  password: "123456",
  role: "admin"
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== USER.email || password !== USER.password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: USER.id, role: USER.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    token,
    user: {
      id: USER.id,
      email: USER.email,
      role: USER.role
    }
  });
});

module.exports = router;
