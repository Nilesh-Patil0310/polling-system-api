import express from "express";

import { connectMongoose } from "./config/mongoose.js";

const server = express();

server.listen(8080, () => {

    console.log("server is running on port 8080");
    // connectToMongoDb();
    connectMongoose();
})