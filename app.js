import express from "express";
import questionRouter from "./routes/question.routes.js";
import optionRouter from "./routes/option.routes.js";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongoose.js";
connectDB();
const port = 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(cookieParser());

// all routes ralated options are redirect options router
server.use('/api/options', optionRouter);
// all routes ralated questions are redirect questions router
server.use('/api/questions', questionRouter)



server.listen(port, () => {

    console.log(`server is running on port: ${port}`);
})