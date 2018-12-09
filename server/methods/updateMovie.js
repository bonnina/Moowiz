const con = require('../services/database service');

const updateMovie = function(title, year, format, id, stars, callback) {
    const sql = "UPDATE Movie SET Title = ?, Year = ?, Format = ? WHERE id = ?";
    con.query(sql, [title, year, format, id], function (err, result) {
      
      if (err) throw err;
      
      const sql = "DELETE FROM MovieStar WHERE MovieId = ?";
      con.query(sql, [id], function (err, result) {
        if (err) throw err;
      });
  
      stars.forEach(star => {
        const sql = "INSERT INTO MovieStar (MovieId, StarId) VALUES (?, ?)";
        con.query(sql, [id, star], function (err, result) {
          if (err) throw err;
        })
      });
      
      callback(result);  // {movieId: movieId}
    });
}

module.exports = updateMovie;