import { PrismaClient } from "@prisma/client";
import { getPaintersPaintings } from "../service/DB/getPaintersPaintings.js";
import { getOneRandomPainting } from "../service/DB/getOneRandomPainting.js";

const prisma = new PrismaClient();

export async function getPaintingController(painterId) {
  let AllPaintings = await getPaintersPaintings(prisma, painterId);
  let AllPaintingsLength = AllPaintings.length;
  let randomPainting = await getOneRandomPainting(
    prisma,
    painterId,
    AllPaintingsLength
  );
  return randomPainting;
}
