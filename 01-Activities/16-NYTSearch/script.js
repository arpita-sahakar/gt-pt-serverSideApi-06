$(document).ready(function () {
  console.log("hello world");

  // on click of search btn this function will be evoked
  $(".search-btn").on("click", function () {
    console.log("hello");
    var baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+ searchTerm +'&api-key=UnxPG6nRZOq6VXe6hwE4yRcwYbGFY2A7&fq=source:("The New York Times")';


    // get value from the "search Term"
    var searchTerm = $("#search-term").val();
    console.log("search term =" + searchTerm);

    //get all values from the form
    var startYear = $("#startYear").val();
    var endYear = $("#endYear").val();
    if(startYear != ""){
        baseUrl= baseUrl + "&begin_date="+ startYear + "0101";
    }
    if(endYear != ""){
        baseUrl= baseUrl + "&end_date="+ endYear + "1231";
    }


      $.ajax({
        url: baseUrl,
        method: "GET"
      }).then(function(response){
        console.log(response.response.docs);
        console.log(response.response.docs[0].abstract);
      });


    //based on the input values create the query parameters & url
    //invoke/call the url using ajax and get response
    //show the response under top articles.
  });
});
