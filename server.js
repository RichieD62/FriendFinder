var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require ("./routing/apiRoutes")(app);
require ("./routing/htmlRoutes")(app);




app.listen(PORT, function(){
    console.log("Listening on PORT" + PORT);
})
