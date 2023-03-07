import express from "express";
import createHttpError from "http-errors";
import { fetchAPI } from "../service/fetchAPI.js";
import { getPainting } from "../service/queries.js";
import { sendPaintingData } from "../controler/insertPaintingData.js";
import { AllPaintings } from "../controler/getAllPaintings.js";
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
      birthDate:
        painting[0].fieldOeuvreAuteurs[0].entity.fieldAuteurAuteur.entity
          .fieldPipDateNaissance.sort,
      deathDate:
        painting[0].fieldOeuvreAuteurs[0].entity.fieldAuteurAuteur.entity
          .fieldPipDateDeces.sort,
    };
    let paintingResult = await sendPaintingData(paintingData, uuid);
    res.json(paintingResult);
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
    let paintings = await AllPaintings();
    res.json(paintings);
  } catch (error) {
    return next(error);
  }
});

export default router;
