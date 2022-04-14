const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  if (req.url === '/') {
    res.end("<h1>Home</h1>");
  } else if(req.url === "/about") {
    res.end("<h1>About</h1>");
  }
  else{res.end("<h1>oops!</h1>");}
});

server.listen(5000);