var query_params = { word:"pompeii"
                   };
var endpoint = 'http://pelagios.dme.ait.ac.at/api/search.json';
 
var options = {
  data: query_params,
  type: 'GET',
  dataType: 'jsonp'      
};

var request = jQuery.ajax(endpoint, options)
                    .done(showResponse);


var json = get({
    url: 'http://search.twitter.com/search.json',
    params: {
        q: "webshell_"
    },
    format: 'json'
});
render(json.results);