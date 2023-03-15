import createError from "http-errors";

export const fetchAPI = async (query, auth_token) => {
  try {
    const result = await fetch(
      "https://apicollections.parismusees.paris.fr/graphql",
      {
        method: "POST",
        headers: {
          "auth-token": auth_token,
        },
        body: JSON.stringify({
          query,
        }),
      }
    );

    if (result.status == 403) throw createError(403);

    const data = await result.json();

    return data.data.nodeQuery.entities;
  } catch (error) {
    if (error.status == 403) throw createError(403, "Unauthorized");

    throw createError(
      500,
      "An error occured while fetching data from apicollections.parismusees.paris.fr"
    );
  }
};
