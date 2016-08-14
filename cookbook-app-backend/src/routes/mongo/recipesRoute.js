import express from 'express';
import Recipe from './model/recipeModel';
var router = express.Router();

import db from './mongoConfig';

/* GET home page. */
router.route('/recipes')
    .get((req, res) => {
        var query = {};

        if (req.query.category) {
            query.category = req.query.category;
        }

        Recipe.find(query, (err, recipes) => {
            if (err)
                res.status(500).send(err);
            else
                res.json(recipes);
        });
    });

router.route('/recipes/:recipeId')
    .get(function(req, res) {
        Recipe.findById(req.params.recipeId, (err, recipe) => {
            if (err)
                res.status(500).send(err);
            else
                res.json(recipe);
        });
    });

module.exports = router;
