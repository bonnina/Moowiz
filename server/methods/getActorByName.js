const con = require('../services/database service');

const getActorByName =  function(name, callback) {
    var sql = "SELECT * FROM Star WHERE lower(Name) LIKE lower(?)";
    con.query(sql, [`${name.toLowerCase()}`], function (err, result) {
      if (err) throw err;
      callback( JSON.parse(JSON.stringify(result)) );
    });
}

module.exports = getActorByName;


