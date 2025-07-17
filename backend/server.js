const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const noteRoutes = require("./routes/noteRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

// ✅ Default route
app.get("/", (req, res) => {
  res.send(`🚀 Server is running in PORT ${PORT}...`);
});

// ✅ API Routes
app.use("/api/notes", noteRoutes);

// ✅ Connect to MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB Compass");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

startServer();
