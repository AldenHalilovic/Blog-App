export default function handler(req, res) {
  const { email, password } = req.body;

  const url = "https://example.com/api/login";
  const data = { email, password };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        res.status(200).json({ success: true });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
