const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const MenuSchema = new mongoose.Schema({ name: String, price: Number });
const Menu = mongoose.model("Menu", MenuSchema);

app.get("/api/menu", async (req, res) => {
  const items = await Menu.find();
  res.json(items);
});

app.listen(5000, () => console.log("API running on http://localhost:5000"));