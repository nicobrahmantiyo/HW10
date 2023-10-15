const errorHandler = (err, req, res, next) => {
  console.log(err);

  if (err.message == 'paramsError') {
    res.status(400).json({
      message: 'need data params',
    });
  } else if (err.message == 'not found') {
    res.status(404).json({ message: 'data not found' });
  } else {
    res.status(500).json({
      message: 'internal server error',
    });
  }
};

module.exports = errorHandler;
