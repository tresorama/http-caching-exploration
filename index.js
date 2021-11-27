const express = require("express");
const serveStatic = require("serve-static");

const port = process.env.PORT || 3000;
const app = express();

app.use(
  serveStatic("dist", {
    setHeaders(res, path) {
      res.setHeader("Cache-Control", "no-store");
    },
  })
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  console.log(`home: http://localhost:${port}`);
});
