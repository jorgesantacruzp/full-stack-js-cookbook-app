import express from 'express';
var router = express.Router();

import db from './postgreConfig';

/* GET home page. */
router.route('/title').get((req, res, next) => {
    res.send('Some title here');
});
router.get('/categories', db.getRecipeCategories);

module.exports = router;
