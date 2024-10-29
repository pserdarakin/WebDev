import http, { request } from 'http';
const PORT = 8000;

const server = http.createServer((req, res) => {
    // res.write('Hello World!'); // Some text to the client in this case its browser
    // res.end(); // Ending response

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    res.writeHead(500, { 'Content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Server Error' }));
});

// Just above will not do anything by itself, so we have to listen on port
server.listen(PORT, () => {
    // pass on some function so that it can do smt it connects
    console.log(`Server running on port; ${PORT}`);
});