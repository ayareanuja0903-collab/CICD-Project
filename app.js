const express = require("express");
const healthRoute = require("./routes/health");

const app = express();

app.use("/health", healthRoute);

app.get("/", (req, res) => {
  res.json({ message: "CI/CD Demo App Running 🚀" });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
