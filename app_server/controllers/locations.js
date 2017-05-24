module.exports.homelist = function(req, res, next) {
  res.render('locations-list', { title: 'Locater - find place to work with wifi', pageHeader:{
  	title: 'locater', strapline: 'Find places to work with wifi near you !'},
  	locations:     [
  		{name: 'Starups',
  		address: '125 high street, reading, rg6, 1ps',
  		rating: 3,
  		facilities: ['hot drings', 'food', 'premium wifi'],
  		distance: '10m'},
  		{name: 'cofe hero',
  		address: '300 high street, cool, rg6, 1ps',
  		rating: 4,
  		facilities: ['hot drings', 'food', 'premium wifi'],
  		distance: '250m'},
  		{name: 'Starups',
  		address: '400 high street, reading, rg6, 1ps',
  		rating: 5,
  		facilities: ['hot drings', 'foodgf', 'premium wifi'],
  		distance: '30m'},
  		{name: 'burguer queen',
  		address: '200 high street, readinghgjgh, rg6, 1ps',
  		rating: 2,
  		facilities: ['hot drings', 'good', 'premium wifi'],
  		distance: '10m'}

  	] });
}
module.exports.locationInfo = function(req, res, next) {
  res.render('location-info', { title: 'Location info' });
}
module.exports.addReview = function(req, res, next) {
  res.render('location-review-form', { title: 'Add review' });
}


