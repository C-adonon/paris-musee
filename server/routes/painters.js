import express from "express";
import { PrismaClient } from "@prisma/client";
import { AllPainters } from "../controler/getAllPainters.js";
import { getOnePainter } from "../controler/getOnePainter.js";
import { getPaintersPaintings } from "../controler/getPaintersPaintings.js";
import { GetRandomPainters } from "../controler/getRandomPainters.js";
import { getOneRandomPainting } from "../controler/getOneRandomPainting.js";

const prisma = new PrismaClient();
const router = express.Router();

//
// GETS A RANDOM SET OF FOUR PAINTERS
//

router.get("/random", async (req, res, next) => {
  try {
    let randomPainters = await GetRandomPainters(prisma);
    res.json(randomPainters);
  } catch (error) {
    return next(error);
  }
});

//
// GETS ALL PAINTERS
//

router.get("/", async (req, res, next) => {
  try {
    let painters = await AllPainters(prisma);
    res.json(painters);
  } catch (error) {
    return next(error);
  }
});

//
// GETS A SPECIFIED PAINTER
//

router.get("/:id", async (req, res, next) => {
  const painterId = parseInt(req.params.id);
  try {
    let painter = await getOnePainter(prisma, painterId);
    res.json(painter);
  } catch (error) {
    return next(error);
  }
});

//
// GETS ALL PAINTINGS OF A SPECIFIED PAINTER
//

router.get("/:id/paintings", async (req, res, next) => {
  const painterId = parseInt(req.params.id);
  try {
    let paintings = await getPaintersPaintings(prisma, painterId);
    res.json(paintings);
  } catch (error) {
    return next(error);
  }
});

//
// GETS A RANDOM PAINTING FROM A SPECIFIED PAINTER
//

router.get("/:id/random", async (req, res, next) => {
  const painterId = parseInt(req.params.id);
  try {
    let AllPaintings = await getPaintersPaintings(prisma, painterId);
    let AllPaintingsLength = AllPaintings.length;
    let randomPainting = await getOneRandomPainting(
      prisma,
      painterId,
      AllPaintingsLength
    );
    res.json(randomPainting);
  } catch (error) {
    return next(error);
  }
});

export default router;
