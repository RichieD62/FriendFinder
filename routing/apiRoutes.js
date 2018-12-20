
var path = require("path");

var friendsData = require("../app/data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        return res.json(friendsData)
    })

    app.post("/api/friends", function(req, res) {

        console.log(newFriend);

        var difference = 40;
        var matchName = "";
        var matchPhoto = "";
        var newFriend = req.body;
    
        console.log(newFriend);
       
        friendsData.forEach(function(friends){
            var matchedScoresArr = [];
            var totalDifference = 40

            for (var i=0; i<friends.scores.length; i++) {
                for (var j=0; j<newFriend.scores.length; j++){
                    matchedScoresArr.push(Math.abs(parseInt(newFriend.scores[j]))- parseInt(friends.scores[i])) 
                }
            }

            function getSum(total, num){
                return total + num;
            }

            totalDifference = matchedScoresArr.reduce(getSum());

            if (totalDifference < difference) {
                difference = totalDifference;
                matchName = friends.name;
                matchPhoto = friends.photo
            }
        });

        res.json({
            name: matchName,
            photo: matchPhoto
        });
    
        friendsData.push(newFriend);
        
    });
    
}

