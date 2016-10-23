import promise from 'bluebird';

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://jorgedbuser:jorgedbpwd@192.168.99.100:5432/cookbook_db';
var db = pgp(connectionString);

// add query functions
const getRecipeCategories = (req, res, next) => {
    db.any('select * from recipe_category')
        .then(data => {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved all categories'
                });
        })
        .catch(err => {
            return next(err);
        });
}

const getRecipes = (req, res, next) => {
    console.log(req);
    db.any('select * from recipe where idCategory = ' + req.params.idCategory)
        .then(data => {
          console.log(data);
            res.status(200)
                .json(data);
        })
        .catch(err => {
            return next(err);
        });
}

module.exports = {
    getRecipeCategories: getRecipeCategories,
    getRecipes: getRecipes,
    //  createPuppy: createPuppy,
    // updatePuppy: updatePuppy,
    //  removePuppy: removePuppy
};
