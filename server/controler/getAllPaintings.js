import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function AllPaintings() {
  const paintings = await prisma.paintings.findMany();
  return paintings;
}
