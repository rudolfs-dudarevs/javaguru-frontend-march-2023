const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 8081;

app.use(bodyParser.json());
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
  })
);
app.use(express.static(`${__dirname}/static`));

app.get("/", (req, res) => {
  const filePath = `index.html`;
  res.sendFile(filePath);
});

app.post("/", (req, res) => {
  console.log(req.body);

  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    //Insert into database
    res.status(200).json({ message: "Message successfully received." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error." });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
