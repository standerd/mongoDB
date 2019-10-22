const express = require("express");
const path = require("path");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("client/build"));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(express.static(path.join(__dirname, "public")));




//routes setup

require("./routes/new.js")(app);
require("./routes/home.js")(app);
require("./routes/delete.js")(app);
require("./routes/update.js")(app);
require("./routes/findOld.js")(app);

// Database connection Setup

const uri =
  "mongodb+srv://dewalds:gromie@dewald-stander-kbmwp.mongodb.net/newtest?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;

mongoose.connect(uri, {
  useNewUrlParser: true
});

mongoose.connection.on("error", function() {
  console.log("Could not connect to the database. Exiting now...");
  process.exit();
});


// Server connection setup

const PORT = process.env.PORT || 3001;
mongoose.connection.once("open", function() {
  console.log("Successfully connected to the database");
  app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
  });
});




