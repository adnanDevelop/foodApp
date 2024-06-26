import ContactformData from "../model/contact_modal.js";

export const contactForm = async (req, res, next) => {
  try {
    const { first_name, last_name, number, email, message } = req.body;

    // Save contact data to database
    const saveData = await ContactformData.create({
      first_name,
      last_name,
      number,
      email,
      message,
    });

    res.status(200).json({
      message: "Form submited successfully",
      data: saveData,
      status_code: 200,
    });
  } catch (error) {
    console.log(error);
    // res.status(401).json({
    //   message: "Error while submitting form",
    // });
    // next(error);
  }
};
