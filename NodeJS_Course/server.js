import http from 'http';
const PORT = process.env.PORT;

/* 
23:13 - ES Modules
27:20 - HTTP Module & Create Server
35:06 - NPM Scripts
36:15 - NPM Modules & Nodemon
38:45 - .gitignore File
41:06 - Environment Variables & .env
44:00 - Req Object
46:10 - Marking Requests From Postman

const server = http.createServer((req, res) => {
    // res.write('Hello World!'); // Some text to the client in this case its browser
    // res.end(); // Ending response

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    console.log(req.url);
    console.log(req.method);

    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end('<h1>Hello World!</h1>');
});

// Just above will not do anything by itself, so we have to listen on port
server.listen(PORT, () => {
    // pass on some function so that it can do smt it connects
    console.log(`Server running on port; ${PORT}`);
});

*/

// Simple Routing

const server = http.createServer((req, res) => {
    try {
        // Check if GET request
        if(req.method === 'GET') {
        
            if (req.url === '/') {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end('<h1>Homepage!</h1>');
            } else if(req.url === '/about') {
                res.writeHead(200, { 'Content-type': 'text/html' });
                res.end('<h1>About!</h1>');
            } else {
                res.writeHead(404, { 'Content-type': 'text/html' });
                res.end('<h1>Not Found!</h1>');
            }

        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end('Server Error');
    }

    }
);

// Just above will not do anything by itself, so we have to listen on port
server.listen(PORT, () => {
    // pass on some function so that it can do smt it connects
    console.log(`Server running on port; ${PORT}`);
});