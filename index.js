const express = require("express");
const cors = require("cors");

const { authentication } = require("./Middleware/authentication");
const { UserRouter } = require("./Routes/User.routes");
const { connection } = require("./Connection/Connection");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Server");
});

app.use("/user", UserRouter);
app.use("/home", authentication, (req, res) => {
  res.send("Protected Route");
});

app.listen(process.env.PORT || 8080, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
  console.log(`Running on PORT ${process.env.PORT}`);
});
