var mongoose = require('mongoose'),
// your local database
	dbURI = 'mongodb://localhost:27017/locater';
	if(process.env.NODE_ENV	 ==='production')
		{
			console.log('production mode ....');
			// remote database mongolab for i.e
			dbURI = 'mongodb://yourusername:yourpassword@yourhostname:port/locater';
			}
	/*readline = require('readline');
	if(process.plateform === "win32")
		var rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
	rl.on('SIGINT', function  () {
		process.emit('SIGINT');
	})*/
	mongoose.connect(dbURI)

mongoose.connection.on('connected', function  () {
	console.log('Mongoose connected to : ' + dbURI);
});
mongoose.connection.on('disconnected', function  () {
	console.log('Mongoose disconnected to : ' + dbURI);
});
mongoose.connection.on('error', function  (err) {
	console.log('Mongoose connected error : ' + err );
});
var gracefulShutdown = function  (msg, callback) {
	mongoose.connection.close(function  () {
		console.log('mongoose disconnected through ' + msg);
		callback();
	} )
}
process.once('SIGUSER2', function  () {
	gracefulShutdown('nodemon restart', function  () {
		process.kill(process.pid, 'SIGUSER2')
	} )
});
process.once('SIGTERM', function  () {
	gracefulShutdown('Heroku app down ', function  () {
		process.exit(0);
	} )
});


process.on('SIGINT', function  () {
	gracefulShutdown('app termination', function  () {
		process.exit(0);
	} )
})
require('./locations')