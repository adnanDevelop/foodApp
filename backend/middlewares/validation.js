const validation = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    // console.log(error.errors[0].message);
    const message = error.errors[0].message;
    // next(message);

    res.status(400).json({ message, status: 400 });
  }
};

export default validation;
