const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

const app = express();
const port = 8000;

dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
  console.log("MongoDB connected!");
}).catch(err => {
  console.error("Error connecting to MongoDB:", err);
});

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

app.listen(port, () => {
  console.log("Backend server is running!");
});
