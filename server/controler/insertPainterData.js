import express from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const router = express.Router();
const prisma = new PrismaClient();

export async function getPainterId(painterData) {
  const painter = await prisma.painters.update({
    where: {
      name: paintingData.painterName,
    },
    data: {
      date_of_birth: paintingData.painterDateOfBirth,
      date_of_death: paintingData.painterDateOfDeath,
      picture: paintingData.painterPicture,
      picture_credits: paintingData.painterPictureCredits,
      wiki_link: paintingData.painterWikiLink,
    },
  });
  return painter;
}
