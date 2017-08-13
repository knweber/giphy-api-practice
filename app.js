var express = require('express');
var app = express();
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/yay-gif', function(req, res){
  res.send('Yay gifs!');
});

app.listen(3000,function(){
  console.log("listening on port 3000");
});
