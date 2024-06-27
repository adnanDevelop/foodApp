const formValidation = (validationSchema) => async (req, res, next) => {
  try {
    const validateData = await validationSchema.parseAsync(req.body);
    req.body = validateData;
    next();
  } catch (error) {
    return res.status(400).json({ error: error });
  }
};

export default formValidation;
