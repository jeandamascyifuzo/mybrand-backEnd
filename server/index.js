const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const blogRoute = require("./routes/blogs");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.Mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
})
    .then(console.log("connected to the Mongo_bd"))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/blogs", blogRoute)

app.listen("8000", () => {
    console.log("server is running");
})