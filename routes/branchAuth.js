 router.post("/login", (req, res) => {
  const { username, password } = req.body;

  console.log("🚀 Incoming login:", { username, password }); // ✅ Add this

  const filePath = path.join(process.cwd(), "data", "branchUsers.json");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read user data." });
    }

    const users = JSON.parse(data);
    console.log("📁 Loaded users:", users); // ✅ Add this

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});
