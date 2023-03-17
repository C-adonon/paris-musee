import express from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { AdminValidator } from "../validators/AdminValidator.js";

const router = express.Router();
const prisma = new PrismaClient();

//
// REGISTER ROUTE
//

router.post("/register", async (req, res, next) => {
  // Validation zod + Récupère indentifiants + mdp du formulaire
  let credentials;
  try {
    credentials = AdminValidator.parse(req.body);
  } catch (error) {
    return res.status(400).json({ errors: error.issues });
  }

  // Vérifie s'il existe un admin avec le même email
  const admin = await prisma.admins.findFirst({
    where: {
      email: credentials.email,
    },
  });
  if (admin) return next(createHttpError(400, "This account already exists."));

  const hashedPassword = await bcrypt.hash(credentials.password, 10);

  const newAdmin = await prisma.admins.create({
    data: {
      email: credentials.email,
      password: hashedPassword,
    },
  });
  // console.log(newAdmin);
  res.json({ msg: "You have successfully created an account!" });
});


//
// LOGIN ROUTE
//

router.post("/login", async (req, res, next) => {
  // Validation zod + Récupère indentifiants + mdp du formulaire
  let credentials;
  try {
    credentials = AdminValidator.parse(req.body);
  } catch (error) {
    return res.status(400).json({ errors: error.issues });
  }

  // Vérifie s'il existe un admin avec le même email
  const admin = await prisma.admins.findFirst({
    where: {
      email: credentials.email,
    },
  });
  if (!admin) return next(createHttpError(403, "This account doesn't exist."));

  //   Compares the MD5 hash of the password with the hash stored in the database
  const validPassword = await bcrypt.compare(
    credentials.password,
    admin.password
  );

  if (!validPassword)
    return next(
      createHttpError(
        403,
        "Incorrect credentials : email/password is incorrect."
      )
    );

  // Création du token
  const token = jwt.sign({ id: admin.id }, process.env["JWT_KEY"], {
    expiresIn: "1h",
  });

  res.json({ token });
});



export default router;
