import express from "express";
import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const router = express.Router();
const prisma = new PrismaClient();

export async function sendPaintingData(paintingData, uuid) {
  const painting = await prisma.paintings.update({
    where: {
      painting_uuid: uuid,
    },
    data: {
      url: paintingData.url,
    },
  });
  return painting;
}
