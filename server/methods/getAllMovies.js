const con = require('../services/database service');

const getAllMovies = function(callback) {
    const sql = "SELECT * FROM Movie ORDER BY title"; 
  
    return new Promise( ( resolve, reject ) => {
      con.query(sql, function ( err, result) {
        if ( err ) return reject( err );
        resolve( JSON.parse(JSON.stringify(result)) );
      });
    })
    .then(resultMovies => {
      const getStars = function (movie) { 
        return new Promise((resolve, reject) => {
          const sql = "SELECT MovieStar.StarId, Star.Name as StarName FROM MovieStar JOIN Star ON MovieStar.StarId = Star.Id WHERE MovieStar.MovieId = ?";
          con.query(sql, [movie.Id], function (err, result) {
  
            if (err) reject(err);
            movie.Stars = JSON.parse(JSON.stringify(result));
            resolve(movie);
          });
        });
      };
  
      const actions = resultMovies.map(getStars);
      Promise.all(actions)
        .then(data => callback(data));
    })
    .catch(error => console.log(error.message));
}

module.exports = getAllMovies;