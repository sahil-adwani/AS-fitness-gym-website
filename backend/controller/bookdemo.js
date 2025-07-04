import ErrorHandler from "../middlewares/error.js";
import { demo_model } from "../models/bookdemo.model.js";


const book_demo = async (req, res, next) => {
  const { firstName, lastName, email, date, time, phone } = req.body;
  if (!firstName || !lastName || !email || !date || !time || !phone) {
    return next(new ErrorHandler("Please Fill All The Details!", 400));
  }

  try {
    await demo_model.create({ firstName, lastName, email, date, time, phone });
    res.status(201).json({
      success: true,
      message: "Demo Scheduled Successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(' , '), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default book_demo;