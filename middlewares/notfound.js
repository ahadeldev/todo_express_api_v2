const routeNotFound = (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} Not Found`
  });
}

export default routeNotFound;