
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

            // ?? Tried it with the if statement on the outside of the for loop and that doesn't print anything to the console for an answer...
            // ?? How do I get the program to figure out which is closest? It jsut prints Tanya out every time...
            

            
        });

        // ?? How do I push my answer, whatever it is, to my modal?

       

        res.json({
            name: matchName,
            photo: matchPhoto
        });
    
        friendsData.push(newFriend);
        
    });

    // app.post("/api/friends", function(req, res) {

    //     var matchName = "";
    //     var matchPhoto = "";
    //     var newFriend = req.body;
    
    //     console.log(newFriend);
       
    //     friendsData.forEach(function(friends){
    //         var totalDifference = 0
                
    //         for (var j=0; j<newFriend.scores.length; j++){
    //             totalDifference = Math.abs((parseInt(newFriend.scores[j])) - parseInt(friends.scores[j])); 
    //         }   

    //         console.log(totalDifference, friends.name);

    //         if (totalDifference <= newFriend.scores) {
    //             matchName = friends.name;
    //             matchPhoto = friends.photo
    //         }
            
    //     });

    //     var a = res.json({
    //         name: matchName,
    //         photo: matchPhoto
    //     });

    //     console.log(a.name, a.photo);
    
    //     friendsData.push(newFriend);
        
    // });
    
// }


// var path = require("path");

// var friendsData = require("../app/data/friends");

// module.exports = function(app) {

//     app.get("/api/friends", function(req, res){
//         return res.json(friendsData)
//     })

//     app.post("/api/friends", function(req, res) {

//         //var difference = 40;
//         var matchName = "";
//         var matchPhoto = "";
//         var newFriend = req.body;
    
//         console.log(newFriend);
       
//         friendsData.forEach(function(friends){
//             var totalDifference = 0
                
//             for (var j=0; j<newFriend.scores.length; j++){
//                 var diff = Math.abs((parseInt(newFriend.scores[j])) - parseInt(friends.scores[j])); 
//                 totalDifference += diff;
//                 // console.log(friends.scores[j])
//             }
            
//             console.log(totalDifference, friends.name)

//             if (totalDifference <= friends.scores[j]) {
//                 matchName = friends.name;
//                 matchPhoto = friends.photo
//             }
            
//         });

//         res.json({
//             name: matchName,
//             photo: matchPhoto
//         });
    
//         friendsData.push(newFriend);
        
//     });
    
// }




// app.post("/api/friends", function(req, res) {

//     //var difference = 40;
//     var matchName = "";
//     var matchPhoto = "";
//     var newFriend = req.body;

//     console.log(newFriend);
   
//     friendsData.forEach(function(friends){
//         var totalDifference = 0
            
//         for (var j=0; j<newFriend.scores.length; j++){
//             var diff = Math.abs((parseInt(newFriend.scores[j])) - parseInt(friends.scores[j]));
//             totalDifference += diff;
//             if (totalDifference <= friends.scores[j]) {
//                 matchName = friends.name;
//                 matchPhoto = friends.photo
//             }
//         }   
//         console.log(totalDifference, friends.name);
//         console.log(diff, friends.name);

        
        
//     });

//     res.json({
//         name: matchName,
//         photo: matchPhoto
//     });

//     friendsData.push(newFriend);
    
// });

}