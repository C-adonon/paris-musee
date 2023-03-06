import { app } from "./app.js";

// server.js
const port = 3000;

// run the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
