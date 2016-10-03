/**
 * Created by Eduardo on 9/26/2016.
 */
var request = require('request');
var express = require('express');
var router = express.Router();

router.get('/', function(request, response){
    response.sendFile('/Public/index.html', {"root": __dirname});
});

router.get('/getFuck', function(clientRequest, clientResponse){

    request(
        'https://www.foaas.com/version',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
                clientResponse.send({data:body});
            }
        }
    );
});


module.exports = router;

