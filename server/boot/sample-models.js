module.exports = function(app) {
	var Q = require('q')
	, MongoObjectID = require('mongodb').ObjectID
	, User = app.models.user
	, Role = app.models.Role
	, RoleMapping = app.models.RoleMapping
	, Course = app.models.Course
	, CourseParticipant = app.models.CourseParticipant
	, Class = app.models.Class
	, ClassAttendee = app.models.ClassAttendee
	, ChatMessage = app.models.ChatMessage
	, SlideShow = app.models.SlideShow
	, SlideDeck = app.models.SlideDeck
	, Slide = app.models.Slide

	, users
	, courses
	, courseParticipants
	, classes
	, classAttendees
	, chatMessages
	, slideShows
	, slideDecks
	, slides
	;

	ObjectID = function(oid) {
		var placeholder = "000000000000000000000000";

		// console.log(placeholder.substring(oid.length));
		return placeholder.substring(oid.length) + oid;
	};
		// create sample instances

	(function startUser() {
		var deferred = Q.defer();
		User.find({}, function(err, df) {
			if (!df.length) {
			User.create([
				{id:ObjectID('199'),username: 'Husni', email: 'husni@ai3.net', password: 'ai3'},
				{id:ObjectID('101'),username: 'Alice', email: 'alice@soi.asia', password: 'soi'},
				{id:ObjectID('102'),username: 'Bob', email: 'bob@soi.asia', password: 'soi'},
				{id:ObjectID('103'),username: 'Charlie', email: 'charlie@soi.asia', password: 'soi'},
				{id:ObjectID('104'),username: 'Dave', email: 'dave@soi.asia', password: 'soi'},
				{id:ObjectID('105'),username: 'Erin', email: 'erin@soi.asia', password: 'soi'},
				{id:ObjectID('106'),username: 'Frank', email: 'frank@soi.asia', password: 'soi'},
				],
				function(err, dc) {
					if (err) {
						deferred.reject(new Error(err));
					}
					else {

						// default admin
						Role.create({
							name: 'admin'
						}, function(err, role) {
							if (err) {
								deferred.reject(new Error(err));
								return;
							}
							role.principals.create({
								principalType: RoleMapping.USER,
								principalId: users[0].id
							}, function(err, principal) {
								if (err) {
									deferred.reject(new Error(err));
									return;
								}
							});
						});

						users = dc;
						deferred.resolve();
					}
				});
			}
			else {
				console.log(df);
				users = df;
				deferred.resolve();
			}
		});
		return deferred.promise;
	})()

/* TEMPLATE
	.then(function() {
		var deferred = Q.defer();
		XXX.find({}, function(err, df) {
			if (!df.length) {
			XXX.create([
				{title:'Course 1', description: 'Course 1 Desc', start: new Date()},
				{title:'Course 2', description: 'Course 2 Desc', start: new Date()},
				],
				function(err, dc) {
					if (err) {
						deferred.reject(new Error(err));
					}
					else {
						YYY = dc;
						deferred.resolve();
					}
				});
			}
			else {
				console.log(df);
				YYY = df;
				deferred.resolve();
			}
		});
		return deferred.promise;
	})
*/

	.then(function() {
		var deferred = Q.defer();
		SlideDeck.find({}, function(err, df) {
			if (!df.length) {
			SlideDeck.create([
				{id:ObjectID('d01011'),title:'Slide Deck 1-1', filename: 'slidedeck-1-1.pdf'},
				{id:ObjectID('d01021'),title:'Slide Deck 1-2', filename: 'slidedeck-1-2.pdf'},
				{id:ObjectID('d01031'),title:'Slide Deck 1-3', filename: 'slidedeck-1-3.pdf'},
				{id:ObjectID('d02011'),title:'Slide Deck 2-1-1', filename: 'slidedeck-2-1-1.pdf'},
				{id:ObjectID('d02012'),title:'Slide Deck 2-1-2', filename: 'slidedeck-2-1-2.pdf'},
				{id:ObjectID('d02021'),title:'Slide Deck 2-1', filename: 'slidedeck-2-1.pdf'},
				],
				function(err, dc) {
					if (err) {
						deferred.reject(new Error(err));
					}
					else {
						// add slides to SlideDeck
						dc[0].slides.create({id:ObjectID('d01011f01'), filename: '1-1-1.jpg', order: 1});
						dc[0].slides.create({id:ObjectID('d01011f02'), filename: '1-1-2.jpg', order: 2});
						dc[0].slides.create({id:ObjectID('d01011f03'), filename: '1-1-3.jpg', order: 3});
						dc[0].slides.create({id:ObjectID('d01011f04'), filename: '1-1-4.jpg', order: 4});
						dc[0].slides.create({id:ObjectID('d01011f05'), filename: '1-1-5.jpg', order: 5});
						
						dc[3].slides.create({id:ObjectID('d02011f01'), filename: '2-1-1-1.jpg', order: 1});
						dc[3].slides.create({id:ObjectID('d02011f02'), filename: '2-1-1-2.jpg', order: 2});
						dc[3].slides.create({id:ObjectID('d02011f03'), filename: '2-1-1-3.jpg', order: 3});
						
						dc[4].slides.create({id:ObjectID('d02012f01'), filename: '2-1-2-1.jpg', order: 1});
						dc[4].slides.create({id:ObjectID('d02012f02'), filename: '2-1-2-2.jpg', order: 2});
						
						slideDecks = dc;
						deferred.resolve();
					}
				});
			}
			else {
				console.log(df);
				slideDecks = df;
				deferred.resolve();
			}
		});
		return deferred.promise;
	})

	.then(function() {
		var deferred = Q.defer();
		Course.find({}, function(err, df) {
			if (!df.length) {
			var thisTime = (new Date()).valueOf();
			var dayVal = 24*60*60*1000;
			var hourVal = 60*60*1000;
			Course.create([
				{id:ObjectID('c01'), title:'Course 1', description: 'Course 1 Desc', start: new Date(thisTime-1*30*dayVal), finish: new Date(thisTime+2*30*dayVal)},
				{id:ObjectID('c02'), title:'Course 2', description: 'Course 2 Desc', start: new Date(thisTime+5*dayVal), finish: new Date(thisTime+35*dayVal)},
				],
				function(err, dc) {
					if (err) {
						deferred.reject(new Error(err));
					}
					else {

						// add lecturers and attendees to Course
						dc[0].lecturers.add(users[1]);

						// dc[0].attendees.add(users[3]);
						users[3].attendCourses.add(dc[0]);
						dc[0].attendees.add(users[4]);
						dc[0].attendees.add(users[5]);

						// add classes to Course
						dc[0].classes.create({id:ObjectID('c01c01'), title:'Class 1-1', description: 'Class 1-1 Desc', start: new Date(thisTime-7*dayVal-1*hourVal), finish: new Date(thisTime-7*dayVal+1*hourVal)},
							function(err, thisClass) {
								// 1 slideDeck for this class
								thisClass.slideDecks.add(slideDecks[0]);
								thisClass.slideDecks.add(slideDecks[1]);

								thisClass.attendees.add(users[4]);
								thisClass.attendees.add(users[5]);
							});
						dc[0].classes.create({id:ObjectID('c01c02'), title:'Class 1-2', description: 'Class 1-2 Desc', start: new Date(thisTime-2*hourVal), finish: new Date(thisTime+70*hourVal)},
							function(err, thisClass) {
								// 1 slideDeck for this class
								thisClass.slideDecks.add(slideDecks[0]);

								thisClass.attendees.add(users[4]);
								thisClass.attendees.add(users[5]);
							});
						dc[0].classes.create({id:ObjectID('c01c03'), title:'Class 1-3', description: 'Class 1-3 Desc', start: new Date(thisTime+14*dayVal-1*hourVal), finish: new Date(thisTime+14*dayVal+1*hourVal)});
						
						dc[1].lecturers.add(users[1]);
						// dc[1].lecturers.add(users[2]); // non demo

						dc[1].attendees.add(users[2]); // for demo
						dc[1].attendees.add(users[3]); // for demo
						dc[1].attendees.add(users[4]);
						dc[1].attendees.add(users[5]);
						dc[1].attendees.add(users[6]);

						dc[1].classes.create({id:ObjectID('c02c01'), title:'Class 2-1', description: 'Class 2-1 Desc', start: new Date(thisTime+7*dayVal-3*hourVal), finish: new Date(thisTime+7*dayVal-1*hourVal)},
							function(err, thisClass) {
								// 2 slideDecks for this class
								thisClass.slideDecks.add(slideDecks[3]);
								thisClass.slideDecks.add(slideDecks[4]);

								thisClass.lecturers.add(users[2]);
							});
						dc[1].classes.create({id:ObjectID('c02c02'), title:'Class 2-2', description: 'Class 2-2 Desc', start: new Date(thisTime+14*dayVal-1*hourVal), finish: new Date(thisTime+14*dayVal+1*hourVal)});

						courses = dc;
						deferred.resolve();
					}
				});
			}
			else {
				console.log(df);
				courses = df;
				deferred.resolve();
			}
		});
		return deferred.promise;
	})

	.catch(function(error) {
		console.log('error',error);
	});


}