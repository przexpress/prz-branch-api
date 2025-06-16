 import path from "path";

// Serve frontend files from /public
app.use(express.static(path.join(process.cwd(), "public")));

// Catch-all for frontend routes like /branch/login
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});
