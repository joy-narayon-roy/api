require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const useRoutes = require("./routers");
const { reqLog, globalErrorHandler } = require("./middleware");
const cors = require("cors");
const app = express();

const middlewares = [
  express.static("public"),
  reqLog,
  cors({ origin: "*" }),
  express.json(),
  express.urlencoded({
    extended: true,
  }),
  globalErrorHandler,
];

app.use(middlewares);
useRoutes(app);

app.set("view engine", "ejs");

const DB_REMOTE_URL = `mongodb+srv://Joy:${process.env.DB_PASSWORD}@cluster0.xbov4.mongodb.net/api`;
const PORT = process.env.PORT || 8080;
mongoose
  .connect(DB_REMOTE_URL)
  .then(() => {
    console.log("DB Connected.");
    app.listen(PORT, (err) => {
      if (err) {
        console.log("Faild to run server");
      } else {
        console.log(`Server Run at http://localhost:${PORT}`);
      }
    });
  })
  .catch((error) => {
    console.log("Faild To connect DB");
  });
