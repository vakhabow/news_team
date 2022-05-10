const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./routes"));
const port = 4200;


mongoose.connect("mongodb+srv://bootcamp:bootcamp@cluster0.qvq9t.mongodb.net/newsS_backs?retryWrites=true&w=majority", {
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
.catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, () => {
  console.log(`hello port http://localhost:${port}`)
});
