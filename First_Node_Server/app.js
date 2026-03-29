//Simple Node server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers);
   
    if (req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Server</title></head>');
    res.write('<body><h1>Welcome to Home</h1></body>');
    res.write('</html>');
    return res.end();

    } else if (req.url === '/products'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Server</title></head>');
    res.write('<body><h1>Products</h1></body>');
    res.write('</html>');
    return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Server</title></head>');
    res.write('<body><h1>Hello, World!</h1></body>');
    res.write('</html>');
    res.end();
    //process.exit() is used to stop the server after the first request is received. This is just for demonstration purposes. In a real application, you would typically not want to stop the server after handling a request.
    
});

const PORT = 3001;
server.listen(PORT,  () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});

