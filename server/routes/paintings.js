import express from "express";
import { fetchAPI } from "../service/fetchAPI.js";
import { getPainting } from "../service/queries.js";
const router = express.Router();

// 
// GET A SPECIFIED PAINTING ROUTE
// 

router.get("/:id", async (req, res, next) => {
  console.log(process.env.API_AUTH_TOKEN);
  let paintings;
  try {
    paintings = await fetchAPI(
      getPainting(req.params.id),
      process.env.API_AUTH_TOKEN
    );
    res.json(paintings);
  } catch (error) {
    return next(error);
  }
});

export default router;
