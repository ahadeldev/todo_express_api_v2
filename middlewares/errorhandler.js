const appErrorhandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: err.message || "Internal Server Error",
    status: err.status || 500
  });
}

export default appErrorhandler;