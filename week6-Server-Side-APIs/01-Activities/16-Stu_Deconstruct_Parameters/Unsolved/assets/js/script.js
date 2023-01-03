fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// per_page is setting the amount of whatever is being targeted 
// State is targeting all the issues of a repo that is in an open state (not solved)
// Sort decides how to organize the target - this one is sorting it by when it was created
// Direction determines the order of the sort -ascending/descending