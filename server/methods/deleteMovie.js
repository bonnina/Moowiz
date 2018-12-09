const con = require('../services/database service');

const deleteMovie = function(id, callback) {
  const sql = "DELETE FROM Movie WHERE id = ?";
  con.query(sql, [id], function (err, result) {
    if (err) throw err;
    callback(result);
  });
}

module.exports = deleteMovie;