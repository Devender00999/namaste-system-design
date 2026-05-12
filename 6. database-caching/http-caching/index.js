const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
   //  res.setHeader("Cache-control", "max-age=86400");
   //  res.setHeader("Expires", "Tue, 12 May 2026 02:12:42 GMT");
   next();
});

app.use(
   express.static(path.join(__dirname, "public"), {
      etag: true,
      cacheControl: true,
      lastModified: true,
   }),
);

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
