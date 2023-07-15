const express = require("express");
const apiRoutes = require("./api");
const app = express();

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT} 🐱‍🏍`);
});
