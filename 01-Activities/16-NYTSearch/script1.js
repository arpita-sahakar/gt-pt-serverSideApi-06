var searchTerm = "elections";
console.log("search term =" + searchTerm);

//get all values from the form
var startDate = "20120101";


var queryUrl =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchTerm +'&api-key=UnxPG6nRZOq6VXe6hwE4yRcwYbGFY2A7&fq=source:("The New York Times")&begin_date='+ startDate + '&end_date=20121231';
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response){
    console.log(response.response.docs);
    console.log(response.response.abstract)
  });
