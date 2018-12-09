const con = require('../services/database service');

const getAllActors = function(callback) {
  const sql = "SELECT * FROM Star ORDER BY name";  
  con.query(sql, function ( err, result) {   
    if ( err ) return reject( err );
    callback( JSON.parse(JSON.stringify(result)) );
  });
}
 
module.exports = getAllActors;