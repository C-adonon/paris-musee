import express from "express";
import { PrismaClient } from "@prisma/client";
import { fetchAPI } from "../service/fetchAPI.js";
import { getPainting } from "../service/queries.js";
import { sendPaintingData } from "../controler/insertPaintingData.js";
import { sendPainterData } from "../controler/insertPainterData.js";
import { AllPaintings } from "../controler/getAllPaintings.js";

const prisma = new PrismaClient();
const router = express.Router();

//
// GET A SPECIFIED PAINTING
//

router.get("/:uuid", async (req, res, next) => {
  const uuid = req.params.uuid;
  try {
    let painting = await fetchAPI(
      getPainting(uuid),
      process.env.API_AUTH_TOKEN
    );
    let paintingData = {
      url: painting[0].fieldVisuels[0].entity.vignette,
    };
    let painterData = {
      name: painting[0].fieldOeuvreAuteurs[0].entity.fieldAuteurAuteur.entity
        .name,
      birthDate:
        painting[0].fieldOeuvreAuteurs[0].entity.fieldAuteurAuteur.entity
          .fieldPipDateNaissance.sort,
      deathDate:
        painting[0].fieldOeuvreAuteurs[0].entity.fieldAuteurAuteur.entity
          .fieldPipDateDeces.sort,
    };
    let paintingResult = await sendPaintingData(prisma, paintingData, uuid);
    let painterId = paintingResult.painter_id;
    console.log(painterId);
    let painterResult = await sendPainterData(prisma, painterData, painterId);
    res.json({ paintingResult, painterResult });
    // res.json(painting);
  } catch (error) {
    return next(error);
  }
});

//
// GET ALL PAINTINGS
//

router.get("/", async (req, res, next) => {
  try {
    let paintings = await AllPaintings(prisma);
    res.json(paintings);
  } catch (error) {
    return next(error);
  }
});

export default router;
