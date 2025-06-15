const express = require("express");
const cors = require("cors");
const analyzeSymptoms = require("./analyze");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { symptoms } = req.body;
  const result = analyzeSymptoms(symptoms);
  res.json({ message: result });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
