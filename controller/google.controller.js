const receiveToken = async (req, res) => {
  try {
    const data = {
      body: req.body,
      params: req.query
    };

    res.status(200).send(data);
    
  } catch (error) {
    res.status(error.status || 400);
    res.send(error);
  }
};

module.exports = {
  receiveToken,
}