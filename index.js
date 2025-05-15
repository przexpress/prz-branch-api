const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Import routes
const deliveriesRoutes = require("./routes/deliveries");
const ridersRoutes = require("./routes/riders");

// Use routes
app.use("/deliveries", deliveriesRoutes);
app.use("/riders", ridersRoutes);

app.listen(port, () => {
  console.log(`✅ PRZ API server running on http://localhost:${port}`);
});





