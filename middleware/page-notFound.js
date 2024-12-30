const notFound = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Page Not Found</h1>");
};

module.exports = notFound;
