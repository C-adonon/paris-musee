// import express
import express from "express";
import cors from "cors";
import admin from "./routes/admin.js";
import paintings from "./routes/paintings.js";
import painters from "./routes/painters.js";

// initialize app
export const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173/",
      "http://localhost:8080/",
      "http://localhost:8080",
    ],
  })
);

// For parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/admin", admin);
app.use("/paintings", paintings);
app.use("/painters", painters);

// Middleware d'erreurs
app.use((err, req, res, next) => {
  // Erreurs auth
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ msg: "Vous n'avez pas accès à cette page" });
  }
  if (err.name === "ErrorDocument") {
    return res.status(404).json({ msg: "Cette page n'existe pas" });
  }
  // autres erreurs à gérer
  if (err.status == undefined) {
    return res.status(500).json({ error: err.message });
  }
  return res.status(err.status).json({ error: err.message });
});
