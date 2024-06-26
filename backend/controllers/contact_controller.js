import ContactformData from "../model/contact_modal.js";

export const contactForm = async (req, res) => {
  try {
    const { first_name, last_name, number, email, message } = req.body;

    // If all fields are empty
    if (!first_name || !last_name || !number || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // If first name is empty
    if (!first_name) {
      return res.status(400).json({ message: "First name is required" });
    }

    // If last name is empty
    if (!last_name) {
      return res.status(400).json({ message: "Last name is required" });
    }

    // If number is empty
    if (!number) {
      return res.status(400).json({ message: "Number is required" });
    }

    // If email is invalid
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res
        .status(400)
        .json({ message: "Please add a valid email address" });
    }

    // If number is too short
    if (number.length < 11) {
      return res
        .status(400)
        .json({ message: "Number must be at least 10 characters long" });
    }

    // Save contact data to database
    const contact = await ContactformData.create({
      first_name,
      last_name,
      number,
      email,
      message,
    });

    res.status(200).json({
      message: "Form submited successfully",
      contact,
      status_code: 200,
    });
  } catch (error) {
    console.log("Error while sending contact data", error);
  }
};
