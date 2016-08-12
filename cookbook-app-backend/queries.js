var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://jorgedbuser:jorgedbpwd@192.168.99.100:5432/cookbook_db';
var db = pgp(connectionString);

// add query functions
function getRecipeCategories(req, res, next) {
  db.any('select * from recipe_category')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved all categories'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
  getRecipeCategories: getRecipeCategories
//  getSinglePuppy: getSinglePuppy,
//  createPuppy: createPuppy,
// updatePuppy: updatePuppy,
//  removePuppy: removePuppy
};
