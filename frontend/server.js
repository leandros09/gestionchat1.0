const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = 3001; // Você pode manter a porta que estava usando
app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});