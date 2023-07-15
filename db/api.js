const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/canais", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM canais");
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao buscar seus canais", error);
    res.status(500).json({ error: "Ocorreu um erro ao buscar os canais" });
  }
});

module.exports = router;
