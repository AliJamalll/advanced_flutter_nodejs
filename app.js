const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config({ path: "./.env" });
const app = express();

const port = process.env.PORT;

// app.use((req, res, next) => {
//   console.log("a request made for your server");
//   next();
// });

// const authorization = (req, res, next) => {
//   const authorization = false;
//   if (authorization) {
//     console.log("autherized");
//     next();
//   } else {
//     res.status(401).send("unAutherized");
//   }
// };

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
app.options(/.*/, cors());

app.get("/", (req, res) => {
  return res.status(200).send("<h1>hi ali server</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
