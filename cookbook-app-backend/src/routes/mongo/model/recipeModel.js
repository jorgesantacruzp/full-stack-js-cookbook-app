import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var recipeModel = Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String
    },
    category: String,
    chef: String,
    ingredients: [{
        amount: String,
        ingredient: String
    }],
    description: String,
}, {
    collection: 'recipes'
});

module.exports = mongoose.model('Recipe', recipeModel);
