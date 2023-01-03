var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call
// ajax means asynchronous javascript and xml

// ajax calling the url and storing the url
$.ajax({
  url: requestUrl,
  method: 'GET',
// logs the response after AJAX on a new line, which is "\n"
}).then(function (response) {
  console.log('AJAX Response \n-------------');
  console.log(response);
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
// fetch grabs the url link
fetch(requestUrl)
  .then(function (response) {
    // response is then made into a json object
    return response.json();
  })
  // takes the response and logs it to the console
  .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
// XMLHttpsRequest checks to see if the response is ready
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
