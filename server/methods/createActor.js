const con = require('../services/database service');

const createActor = function(name, callback) {
    const sql = "INSERT INTO Star (Name) VALUES (?)";
    con.query(sql, [name], function (err, result) {
      if (err) throw err;
      // console.log(result.insertId);
      callback({Id: result.insertId});
    });
}

module.exports = createActor;