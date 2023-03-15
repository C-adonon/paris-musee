import express from "express";
import { PrismaClient } from "@prisma/client";
import { fetchAPI } from "../service/API/fetchAPI.js";
import { getPainting } from "../service/API/queries.js";
import { sendPaintingData } from "../service/DB/insertPaintingData.js";
import { sendPainterData } from "../service/DB/insertPainterData.js";
import { AllPaintings } from "../service/DB/getAllPaintings.js";
import { auth } from "../authentification/auth_middleware.js";

const prisma = new PrismaClient();
const router = express.Router();

//
// POST ROUTE TO ADD PAINTINGS UUID TO THE DATABASE
//
const Courbet = {
  painterId: 1,
  paintings: [
    "3ed35487-0e9b-4068-a10a-2a533cc25b82",
    "fea98ea1-2e1b-4c1e-9d55-aa52629619c6",
    "bbd92851-7714-41ac-b541-a29b440af61d",
    "7cc7e2c5-7ff8-4280-8c33-5e31415af60a",
    "445e2c90-c5f4-42a2-abff-c936e2fa9a4e",
    "e9573d7a-2b60-4eb7-b9e7-601a706e7bb7",
    "95ae6d3a-a7ac-4004-afe3-826badda0c0a",
  ],
};

const Vigée_Le_Brun = {
  painterId: 2,
  paintings: [
    "9dbd6daf-e763-4df0-832a-c06c9ab525ab",
    "b6cdca9f-f549-4561-a456-2fce0d850ab9",
    "78a53d20-657f-4e95-b4e2-cfd0cc60d8cb",
    "8621cfe3-287e-4e48-a3f4-3a8152c7cab0",
  ],
};

const Cézanne = {
  painterId: 3,
  paintings: [
    "63ef19bb-33d2-4dc5-b00f-213b9983c014",
    "7acf7dd5-9c51-4836-8b56-36c643241e7e",
    "5e47c316-4357-4a93-beb9-0f809f242686",
    "b6cceae7-4399-4f39-87af-9580ac305b46",
    "38955ff8-98fe-41da-adfe-616730d824f7",
    "0177cb88-79c4-42c4-ac08-101a868b6826",
    "9141320d-1959-44d9-9d9b-1d532bea44cf",
  ],
};

const Cassat = {
  painterId: 4,
  paintings: [
    "c0646fe8-4feb-458b-91f9-561f38f5dcba",
    "abc00ff4-1449-4952-b778-b6f2aac19df3",
    "75c6c920-a3b1-4c30-9af5-96e324ce436b",
    "6ac31138-ba35-473b-a594-e86f1188af10",
  ],
};

const Rembrandt = {
  painterId: 5,
  paintings: [
    "be7c291e-d1b7-4050-9db0-584f6e7c364e",
    "5f83d5df-b018-4464-9a3f-8c816c7f5443",
    "4c88b58a-df5d-4379-ac94-4a4caf1e0f3d",
    "4cde562e-aa57-444f-bd6a-3484a17649ef",
  ],
};

const Renoir = {
  painterId: 6,
  paintings: [
    "e12191f0-29d4-4959-b1a2-9c3144b29d15",
    "47021061-2873-4863-b2ac-d7b54d62b6e3",
    "04f3bb58-3e9f-4ba8-9686-399b0e0b5bb2",
    "fd62e962-0e81-41e8-be72-2b36c84a47df",
  ],
};

const Boucher = {
  painterId: 7,
  paintings: [
    "3e2bf978-c15c-4f59-ae5c-8e211a802bd2",
    "94713e84-0613-41b4-9869-cd34ba3e6d71",
    "19d2347d-0dfd-402c-8d51-82a1c59fc2e4",
    "cbdbed57-4f7e-4b99-a395-60e04c2b4219",
  ],
};

router.post("/addPaintings", async (req, res, next) => {
  const paintings = [
    Courbet,
    Vigée_Le_Brun,
    Cézanne,
    Cassat,
    Rembrandt,
    Renoir,
    Boucher,
  ];
  try {
    for (let i = 0; i < paintings.length; i++) {
      for (let j = 0; j < paintings[i].paintings.length; j++) {
        await prisma.paintings.create({
          data: {
            painting_uuid: paintings[i].paintings[j],
            painter: { connect: { id: paintings[i].painterId } },
          },
        });
      }
    }
    res.status(200).json({ message: "Paintings added" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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

router.get("/", auth, async (req, res, next) => {
  try {
    let paintings = await AllPaintings(prisma);
    res.json(paintings);
  } catch (error) {
    return next(error);
  }
});

export default router;
