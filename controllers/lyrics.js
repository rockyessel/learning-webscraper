const cheerio = require('cheerio');
const axios = require('axios');

const getAuthor = (request, response) => {
  const url = `https://www.azlyrics.com/a.html`;

  const authors = [];

  axios.get(url).then((res) => {
    const { data: html } = res;
    // console.log(html);

    const $ = cheerio.load(html);
    $('a', html).each(function () {
      const name = $(this).text();
      const name_slug = $(this).attr('href');
      authors.push({
        name,
        name_slug,
      });
    });

    authors.map((name) => {
      if (name.name.length > 1) {
        if (name.name.indexOf(',') != -1) {
          return;
        } else {
          let author_name = name.name.split(',');

          console.log(author_name);
        }
      }
      //   console.log(name);
    });
    response.status(200).json(authors);
  });
};

module.exports = {
  getAuthor,
};
