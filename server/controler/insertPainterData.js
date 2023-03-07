export async function sendPainterData(prisma, painterData, painterId) {
  const painter = await prisma.painters.update({
    where: {
      id: painterId,
    },
    data: {
      date_of_birth: painterData.birthDate,
      date_of_death: painterData.deathDate,
      picture: painterData.painterPicture,
      picture_credits: painterData.painterPictureCredits,
      wiki_link: painterData.painterWikiLink,
    },
  });
  return painter;
}
