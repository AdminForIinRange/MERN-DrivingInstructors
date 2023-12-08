
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const serviceProviderRoutes = require("./routes/serviceProvider.js");
const clientProfileRoutes = require("./routes/clientProfile.js");
const cors = require("cors"); // Import the CORS package

const app = express();
app.use(cors());
// Middleware----------------------------------------------------------------

// The first line, app.use(express.json()), adds middleware to parse JSON request bodies.
// The second piece of code defines a middleware function that logs the request path and method to the console for debugging purposes.
// It also calls the next() function to pass control to the next middleware/route handler.

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes----------------------------------------------------------------

//It mounts the serviceProviderRoutes and clientProfileRoutes middleware handlers to the "/api/serviceProvider" and "/api/clientProfile" routes respectively
//so that requests to those paths will pass through those handlers.

app.use("/api/serviceProviders", serviceProviderRoutes);
app.use("/api/clientProfiles", clientProfileRoutes);

// Mongoose----------------------------------------------------------------

// This code is connecting the Express application to a MongoDB database using Mongoose,
// and starting the Express server to listen for requests.

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database', process.env.MONGO_URI)
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// It connects to the MongoDB URI in MONGO_URI, and if successful, starts the server listening on the port in PORT.
// If connection succeeds, it logs the listening message. If not, errors are logged.
