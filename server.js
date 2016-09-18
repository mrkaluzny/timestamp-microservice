var express = require('express'),
    port = 8080,
    path = require('path'),
    moment = require('moment'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.get('/:query', function(req, res){
    var myDate;
    if(/^\d{8,}$/.test(req.params.query)) {
        myDate = moment(req.params.query, "X");
        
    } else {
        myDate = moment(req.params.query, "MMMM D, YYYY");
        
    }
    
    if(myDate.isValid()) {
        res.json({
            unix: myDate.format("X"),
            natural: myDate.format("MMMM D, YYYY")
            
        });
        
    } else {
        res.json({
            unix: null,
            natural: null
            
        });
    }
});

app.listen(port, function(){
    console.log('Server running on port ' + port);
});
