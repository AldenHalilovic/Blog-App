const users = require('./users');

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({
      email: user.email,
      username: user.username,
      image: "https://example.com/image.png",
      token: "sampletoken",
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

export default Nest