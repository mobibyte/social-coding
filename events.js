const url = 'https://mavorgs.campuslabs.com/engage/organization/mobi/events';

// Define the headers to include in the request
const headers = new Headers();
headers.append('Content-Type', 'application/json');
// Add any other necessary headers here

// Create the fetch request with the appropriate headers
fetch(url, {
  method: 'GET', // or 'POST', 'PUT', etc. depending on the API
  headers: headers,
  // You can include credentials: 'include' if you need to send cookies or authentication headers
})
  .then(response => {
    // Check if the response status is OK (200)
    if (response.ok) {
      // If the response is OK, return the JSON data
      return response.json();
    } else {
      // If the response status is not OK, throw an error with the status text
      throw new Error('Network response was not ok: ' + response.statusText);
    }
  })
  .then(data => {
    // Do something with the JSON data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the fetch request
    console.error('There was a problem with the fetch operation:', error);
  });



