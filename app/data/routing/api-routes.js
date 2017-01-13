var friends = require('../data/friends.js');

module.exports = function(app){

app.get("/api/friends", function(req, res) {
    res.send(friends);
});

app.post("/api/friends", function(req, res) {
 var newfriend = req.body;
 friends.push(newfriend);

 var scoreDifference = 0;
 var arrayDifference = [];

   for (var i = 0; i < friends.length -1; i++){

       for(var h = 0; h < friends[i].scores.lenght; h++){
           scoreDifference += Math.abs(friends[i].scores[h] - newfriend.scores[h]);
       }

       arrayDifference.push(scoreDifference);
       scoreDifference = 0;
   }

var match = friends[arrayDifference.indexOf(Math.min.apply(null, arrayDifference))];
res.send(match);
});
}

