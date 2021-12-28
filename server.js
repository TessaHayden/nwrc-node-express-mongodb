const express = require("express");
const morgan = require("morgan");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.all("/home", (req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next();
});

app.get("/home", (req, res) => {
  res.end("Loading Home Page for you");
});

app.post("/home", (req, res) => {
  res.statusCode = 403;
  res.end("POST operation not supported on /home");
});

app.put("/home", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /home");
});

app.delete("/home", (req, res) => {
  res.statusCode = 403;
  res.end("DELTE operation not supported");
});

app.get("/portfolio", (req, res) => {
  res.statusCode = 200;
  res.end("Will send requested /portfolio");
});

app.post("/portfolio", (req, res) => {
  res.statusCode = 403;
  res.end("POST operation not supported for /portfolio");
});

app.put("/portfolio", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported for /portfolio");
});

app.delete("/portfolio", (req, res) => {
  res.statusCode = 403;
  res.end("DELETE operation not supported for /portfolio");
});

app.get("/portfolio/:portfolioId", (req, res) => {
  res.statusCode = 200;
  res.end("Sending /portfolio/:portfolioId item to you");
});
app.put("/portfolio/:portfolioId", (req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported for /portfolio/:portfolioId");
});
app.post("/portfolio/:portfolioId", (req, res) => {
  res.statusCode = 403;
  res.end("POST operation not supported for /portfolio/:portfolioId");
});
app.delete("/portfolio/:portfolioId", (req, res) => {
  res.statusCode = 403;
  res.end("DELETE operation not supported for /portfolio/:portfolioId");
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

app.get("/services/:serviceId", (req, res) => {
  res.statusCode = 200;
  res.end("Loading /services/:serviceId to you right now!");
});

app.post("/services/:serviceId", (req, res) => {
  res.write(`Posting /services request ${req.params.serviceId}\n`);
  res.end(
    `Will update /services calendar: ${req.body.name} with ${req.body.description}`
  );
});

app.put("/services/:serviceId", (req, res) => {
  res.write(`Updating the services request: ${req.params.serviceId}\n`);
  res.end(
    `Will update the services request : ${req.body.name} with description: ${req.body.description}`
  );
});

app.delete("/services/:serviceId", (req, res) => {
  res.end(`Deleting services request: ${req.params.serviceId}`);
});

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
