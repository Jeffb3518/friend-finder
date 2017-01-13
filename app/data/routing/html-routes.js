var path = require('path');

module.exports = fucntion(app) {

app.get("/", function(req, res){
    res.sendFile(path.join(root + '/../public/home.html'));
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(root + '/../public/survey.html'));
})
};