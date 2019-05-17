const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  "/",
  express.static(__dirname + "/www", {
    etag: false
  })
);

app.listen(3000, () => {
  console.log("Server is running at:", PORT);
});
