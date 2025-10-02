const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`<h1>Minun ensimmäinen Node.js -palvelin</h1>`);
}).listen(8081);

console.log('Palvelin käynnissä: http://127.0.0.1:8081/');
