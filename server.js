const createError = require("http-errors");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const passport = require("passport");
const authenticate = require("./authenticate");

const indexRouter = require("./routes/index");
const users = require("./routes/users");
const homeRouter = require("./routes/homeRouter");
const portfolioRouter = require("./routes/portfolioRouter");
const servicesRouter = require("./routes/servicesRouter");
const contactRouter = require("./routes/contactRouter");

const url = config.mongoUrl;

const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(
  () => console.log("Connected correctly to server!"),
  (err) => console.log(err)
);

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/users", usersRouter);
app.use("/home", homeRouter);
app.use("/portfolio", portfolioRouter);
app.use("/services", servicesRouter);
app.use("/contact", contactRouter);

app.get("/contact", (req, res) => {
  res.end("Loading /contact page");
});

app.post("/contact", (req, res) => {
  res.end(`Will send message: ${req.body.name} ${req.body.description}`);
});

app.put("/contact", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /contact");
});

app.delete("/contact", (req, res) => {
  res.end("Deleting /contact message");
});

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(
    "<html><body><h1>Northwest Restaurant Consultant Express Server</h1></body></html>"
  );
});
app.get("/services", (req, res) => {
  res.statusCode = 200;
  res.end("Loading /services to you right now!");
});

app.post("/services", (req, res) => {
  res.statusCode = 403;
  res.end("POST operation not supported for /services");
});

app.put("/services", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported for /services");
});

app.delete("/services", (req, res) => {
  res.statusCode = 403;
  res.end("DELETE operation not supported for /services");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
