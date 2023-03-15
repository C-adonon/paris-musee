export async function sendPaintingData(prisma, paintingData, uuid) {
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
