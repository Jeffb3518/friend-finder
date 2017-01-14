var friends = require('../friends.js');

module.exports = function(app){

//app to get users
app.get("/api/friends", function(req, res) {
    res.json(friends);
});

//create new user
app.post("/api/friends", function(req, res) {
 var newUser = req.body;
 friends.push(newUser);

 var scoreDifference = 0;
 var arrayDifference = [];

//for loop for matching new users
   for (var i = 0; i < friends.length[i]; i++){

       for(var h = 0; h < friends[i].scores.lenght; h++){
           scoreDifference += Math.abs(friends[i].scores[h] - newUser.scores[h]);
       }

       arrayDifference.push(scoreDifference);
       scoreDifference = 0;
   }

var match = friends[arrayDifference.indexOf(Math.min.apply(null, arrayDifference))];
res.sendFile(match);
});
}

