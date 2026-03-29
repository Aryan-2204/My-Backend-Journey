
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers);
   
    if (req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Node Server</title></head>');
    res.write('<form action="/submit" method="POST">');
    res.write('<body><h1>Enter your Detsils</h1></body>');
    res.write('<form>');
    res.write('<input type="text" name="name" placeholder="Enter your name">');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</html>');
    return res.end();
    }
    else if(req.url.toLowerCase() === '/submit' && req.method === 'POST'){
    fs.writeFileSync('user.txt', 'prashant ');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    }
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Aryan kadam</title></head>');
    res.write('<body><h1>Going to Conquer</h1></body>');
    res.write('</html>');
    res.end();
    //process.exit() is used to stop the server after the first request is received. This is just for demonstration purposes. In a real application, you would typically not want to stop the server after handling a request.
    
});

const PORT = 3001;
server.listen(PORT,  () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});

