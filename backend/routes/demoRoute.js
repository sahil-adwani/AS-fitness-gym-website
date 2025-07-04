import express from "express";
import book_demo from "../controller/bookdemo.js";

const demoRouter = express.Router();

demoRouter.post("/send", book_demo);

export default demoRouter;