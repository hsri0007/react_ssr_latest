import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/index";
import usersRouter from "./routes/users";
import adminRouter from "./routes/admin";
const bodyParser = require("body-parser");
const session = require("express-session");

var app = express();

// const cors = require("cors");

// app.use(cors());

const cors = require("cors");

app.use(cors({ origin: true }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "../public")));
// app.use(
//   session({
//     key: "userId",
//     secret: "Havetoset",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24,
//     },
//   })
// );
// app.use(function (req, res, next) {
//   // if (req.headers.origin) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,Content-Type,Authorization,x-access-token"
//   );
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
//   if (req.method === "OPTIONS") return res.sendStatus(200);
//   // }
//   next();
// });
app.use("/backend", indexRouter);
app.use("/backend/users", usersRouter);
app.use("/backend/admin", adminRouter);

export default app;
