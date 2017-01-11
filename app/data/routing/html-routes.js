require("server.js");

app.get("/", function(req, res){
    res.sendFile(path.join(root, "home.html" ));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(root, "survey.html"));
});