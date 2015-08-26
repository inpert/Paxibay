/*
* More details here http://mongoosejs.com/docs/guide.html
*/

var mongoose = require("mongoose");

//connect to database
var db = mongoose.connect('mongodb://127.0.0.1:27017/test');

//create schema for blog post
var blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

//compile schema to model
var Blog = db.model('blog', blogSchema)
console.log("Created model");


// Collection: paxivaluator 


