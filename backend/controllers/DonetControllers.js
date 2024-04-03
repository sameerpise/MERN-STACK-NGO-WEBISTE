import { MessageDonation} from "../models/Donet.js";

export const postDonationMessage = async (req, res, next) => {
  const { name, email,phone,amount, message } = req.body;
  if (!name || !email || !phone || !amount || !message) {
    return res.status(400).json({
      success: false,
      message: "Please Fill Full Form!",
    });
  }
  try {
    await MessageDonation.create({ name, email,phone,amount, message });
    return res.status(201).json({
      success: true,
      message: "Messsage Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      const errorMessage = validationErrors.join(", ");
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
