const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/error.handler");
const connectDb = require("./config/db.connection");

connectDb();
const app = express();
const port = process.env.PORT || 8000;

//express parser
app.use(express.json());
//routes
app.use("/api/contacts", require("./routes/contact.routes"));
app.use("/api/users", require("./routes/user.routes"));

//errorhandler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running at port ${port} `);
});
