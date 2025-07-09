
const assignAuthor = (req, res, next) => {
  req.body.author = req.user;  // autometing the author
  next();
};

module.exports = assignAuthor;
