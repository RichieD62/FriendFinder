
var path = require("path");

var friendsData = require("../app/data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res){
        return res.json(friendsData)
    })

    app.post("/api/friends", function(req, res) {

        var matchName = "";
        var matchPhoto = "";
        var newFriend = req.body;

        var totalDifference;
        var bestDifference = 50;
        console.log(newFriend);
       
        friendsData.forEach(function(friends){
            totalDifference = 0
                
            for (var j=0; j<newFriend.scores.length; j++){
                totalDifference += Math.abs((parseInt(newFriend.scores[j])) - parseInt(friends.scores[j])) 
                
            }   

            if (totalDifference <= bestDifference) {
                matchName = friends.name;
                matchPhoto = friends.photo;
                bestDifference = totalDifference;
            }


            
        });


       

        res.json({
            name: matchName,
            photo: matchPhoto
        });
    
        friendsData.push(newFriend);
        
    });



}