// import express
import express from "express";
import cors from "cors";
// import index from "./routes/index.js";
import admin from "./routes/admin.js";

// initialize app
export const app = express();

// CORS
app.use(cors({}));

// For parsing application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Router
// app.use("/", index);
app.use("/admin", admin);

// Middleware d'erreurs
app.use((err, req, res, next) => {
  // Erreurs auth
  //   if (err.name === "UnauthorizedError") {
  //     return res.status(401).json({ msg: "Vous n'avez pas accès à cette page" });
  //   }
  if (err.name === "ErrorDocument") {
    return res.status(404).json({ msg: "Cette page n'existe pas" });
  }
  // autres erreurs à gérer
  return res.status(err.status).json({ error: err.message });
});
