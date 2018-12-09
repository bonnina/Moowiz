const con = require('../services/database service');

const deleteAllMovies = function(callback) {
  const sql = "DELETE FROM Movie"
  con.query(sql, function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

module.exports = deleteAllMovies;