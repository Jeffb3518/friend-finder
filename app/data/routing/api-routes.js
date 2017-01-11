require("server.js");

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res) {
 var newfriend = req.body;

    if ( newfriend.length < 11) { 
 friends.push(newfriend);
 res.json(true)
    };

console.log(newfriend);
});

