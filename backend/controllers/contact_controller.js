import contactFormModel from "../model/contact_model.js";

const contactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return res
        .status(400)
        .json({ message: "Please add a valid email address" });
    }

    const storeFormData = await contactFormModel.create({
      name,
      email,
      message,
    });

    return res.status(200).json({
      message: "Thank you for contacting us. We will get back to you soon.",
      data: storeFormData,
      status_code: 200,
    });
  } catch (error) {
    console.log("Error while sending contact form", error);
  }
};

export default contactForm;
