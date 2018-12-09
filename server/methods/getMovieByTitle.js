const con = require('../services/database service');

const getMovieByTitle = function(title, callback) {
    const sql = "SELECT * FROM Movie WHERE lower(Title) LIKE lower(?)";
    con.query(sql, [`${title.toLowerCase()}`], function (err, result) {
      if (err) throw err;

      callback(result);
    });
}

module.exports = getMovieByTitle;

