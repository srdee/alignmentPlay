function getData(){
  var http = require('http');
  var str = '';

  var options = {
        host: 'http://pelagios.dme.ait.ac.at/',
        path: '/api/search.json?query=pompeii'
  };

callback = function(response) {

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(req.data);
    console.log(str);
    // your code here if you want to use the results !
  });
}

var req = http.request(options, callback).end();

  // These just return undefined and empty
  console.log(req.data);
  console.log(str);
}