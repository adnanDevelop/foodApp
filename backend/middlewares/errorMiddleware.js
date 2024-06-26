const errorMessage = (err, req, res, next) => {
  const status = err.status || 400;
  const message = err.message || "Something went wrong";
  // console.log(err);
  return res.status(status).json({
    message,
    status_code: 400,
  });
};

export default errorMessage;
