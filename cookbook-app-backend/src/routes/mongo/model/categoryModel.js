import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var categoryModel = Schema({
    _id: Schema.Types.ObjectId,
    id: Number,
    name: {
        type: String
    },
}, {
    collection: 'categories'
});

module.exports = mongoose.model('Category', categoryModel);
