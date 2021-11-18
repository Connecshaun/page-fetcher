const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);

request(args[0], (error, response, body) => { // 
  
  if (error) {
    console.log('error:', error)
  }; // Print the error if one occurred

  response && response.statusCode; // Can print the response status code if a response was received

  //body callback
  fs.writeFile(args[1], body, err => { //will write to file specified in arguemnts eg "./writehere.html"
    
    if (err) {
      console.error(err) // another way to console / test for error
      return;
    }

    console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
  });
});

