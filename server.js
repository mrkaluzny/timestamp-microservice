var express = require('express'),
    port = 8080,
    app = express();

app.get('/', function(req,res){
    res.send('<h1>Hello World!</h1>');
});

app.get('/:query', function(req, res){
    res.send("It's a query!");
})

app.listen(port, function(){
    console.log('Server running on port ' + port);
});
