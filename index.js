const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./routes"));
const port = 4200;


mongoose
  .connect("mongodb+srv://Isa:28092002@cluster0.fnkei.mongodb.net/news_team")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => { 
  console.log(`hello port http://localhost:${port}`)
});
