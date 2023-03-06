import { expressjwt } from "express-jwt";
// Middlewear d'authentification
export const auth = expressjwt({
  secret: process.env["JWT_KEY"],
  algorithms: ["HS256"],
});
