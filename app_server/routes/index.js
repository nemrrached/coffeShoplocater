var express = require('express');
var router = express.Router();
var controllerLocations = require('../controllers/locations')
var controllerOthers = require('../controllers/others')
//var controller = require('../controllers/main')

/* GET home page. */

//router.get('/', controller.index );
router.get('/', controllerLocations.homelist );
router.get('/location', controllerLocations.locationInfo );
router.get('/location/review/new', controllerLocations.addReview );
router.get('/about', controllerOthers.about );

module.exports = router;
