const dotenv = require("dotenv").config();
const cors = require("cors");

const { sendResponse } = require("./utils/response");
const HTTP_STATUS = require("./constants/http_status");

//Database connection
const databaseConnection = require("./config/database");

//Express Modules
const express = require("express");
const app = express();
// const corsOptions = {
//   origin: "http://localhost:5173",
//   credentials: true,
// };

//app.use(cors(corsOptions));
app.use(cors({ origin: "*" }));
app.use(express.json()); // Parses data as JSON
app.use(express.text()); // Parses data as text
app.use(express.urlencoded({ extended: true })); // Parses data as urlencoded

//Exporting all the routes
// const usersRouter = require("./routes/users");

//main routers
//Error Handler
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return sendResponse(res, HTTP_STATUS.BAD_REQUEST, "Invalid JSON Format!");
  }
  next();
});

app.use("*", (req, res) => {
  return sendResponse(
    res,
    HTTP_STATUS.NOT_FOUND,
    "Wrong URL, Please re-check your URL."
  );
});




databaseConnection(() => {
  app.listen(8000, () => {
    console.log("Server is running on port 8000");
  });
});