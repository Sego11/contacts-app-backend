const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/error.handler");

const app = express();
const port = process.env.PORT || 8000;

//express parser
app.use(express.json());
//route
app.use("/api/contacts", require("./routes/contact.routes"));
//errorhandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running at port ${port} `);
});
