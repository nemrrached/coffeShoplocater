var mongoose = require('mongoose'),
openingtimeSchema = mongoose.Schema({
		days: {type: String, required: true},
		opening: {type: String},
		closing: {type: String } , 
		closed:  {type: Boolean, required : true} }),
reviewSchema = mongoose.Schema({
		author: {type: String, required: true},
		rating: {type: Number, required: true, min: 0 , max: 5},
		reviewText: {type: String } , 
		createdOn: {type: Date, "default": Date.now } }),
	locationSchema = mongoose.Schema({
		name: {type: String, required: true},
		address: {type: String, required: true},
		rating: {type: Number, "default": 0, min: 0 , max: 5} ,
		facilities: [String] , 
		coords:  {type: [Number], index : '2dsphere'},
		openingTimes: [openingtimeSchema], 
		reviews: [reviewSchema] });