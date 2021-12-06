const receiveToken = async (req, res) => {
  try {
    const data = {
      body: req.body,
      params: req.query
    };

    var string = encodeURIComponent(data);
    // console.log(string);
    // res.status(200).send(data);
    res.redirect(`http://localhost:8080/profile?type=linkingZalo&code=${req.query.code}`);
    
  } catch (error) {
    // res.status(error.status || 400);
    res.redirect(`http://localhost:8080/profile?type=linkingZalo&error=error`);
  }
};

module.exports = {
  receiveToken,
}