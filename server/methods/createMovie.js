const con = require('../services/database service');

const createMovie = function(title, year, format, stars, callback) {
    const sql = "INSERT INTO Movie (Title, Year, Format) VALUES (?, ?, ?)";
    con.query(sql, [title, year, format], function (err, result) {
      if (err) throw err;

      const movieId = result.insertId;

      stars.forEach(star => {
        const sql = "INSERT INTO MovieStar (MovieId, StarId) VALUES (?, ?)";
        con.query(sql, [movieId, star], function (err, result) {
          if (err) throw err;
        })
      });

      callback({movieId: movieId});
    });
}

module.exports = createMovie;