const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to our website");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is a berief for the content of the website");
    res.end();
  } else
    res.write(`
    <h1>OOPS!</h1>
    <p>the page you visit does not exist</p>
    <a href="/">go Home</a>
    `);
  res.end();
});

server.listen(5000);
