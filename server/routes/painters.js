import express from "express";
import { PrismaClient } from "@prisma/client";
import { AllPainters } from "../service/DB/getAllPainters.js";
import { getOnePainter } from "../service/DB/getOnePainter.js";
import { getPaintersPaintings } from "../service/DB/getPaintersPaintings.js";
import { GetRandomPainters } from "../service/DB/getRandomPainters.js";
import { getPaintingController } from "../controller/paintingsController.js";

const prisma = new PrismaClient();
const router = express.Router();

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

router.get("/search/:id", async (req, res, next) => {
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
// GETS A RANDOM PAINTING FROM A SPECIFIED PAINTER
//

router.get("/:id/random", async (req, res, next) => {
  const painterId = parseInt(req.params.id);
  try {
    // Controller test
    let randomPainting = await getPaintingController(painterId);
    if (!randomPainting) {
      return next(createHttpError(404, "No painting found"));
    }
    res.json(randomPainting);
  } catch (error) {
    return next(error);
  }
});

export default router;
