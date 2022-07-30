const getAuthor = (request, response) => {
  response.json({
    data: 'Getting a author information',
  });
};

module.exports = {
  getAuthor,
};
