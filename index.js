const http = require('http');
 
const hostname = '0.0.0.0';
const port = 3000;
 
console.log("Starting the server")
//create a server object:
http.createServer(function (req, res) {
  res.write('Aai Zavli!! Aniket please present your screen.'); //write a response to the client
  res.end(); //end the response

  // Simulate CPU-intensive task by calculating Fibonacci sequence
  // const fibonacciResult = fibonacci(38); // Adjust the number for desired CPU load

  // res.setHeader('Content-Type', 'text/plain');
  // res.end(`Fibonacci result: ${fibonacciResult}`);

}).listen(port); //the server object listens on port 3000

// Function to calculate Fibonacci sequence (recursive and CPU-intensive)
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
