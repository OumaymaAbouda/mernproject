// ==============================
// Import des dépendances
// ==============================
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes"); // <-- Import du router

const app = express();

// ==============================
// Middleware
// ==============================
app.use(cors());             
app.use(express.json());     

// ==============================
// Connexion à MongoDB avec Mongoose
// ==============================
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.log("❌ MongoDB connection error:", err));

// ==============================
// Utilisation des routes
// ==============================
app.use("/users", userRoutes); // toutes les routes utilisateurs commencent par /users

// ==============================
// Lancement du serveur
// ==============================
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("🚀 Server running on port 3001");
});
