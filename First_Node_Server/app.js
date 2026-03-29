//Simple Node server
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method,req.headers);
    //process.exit() is used to stop the server after the first request is received. This is just for demonstration purposes. In a real application, you would typically not want to stop the server after handling a request.
    
});

const PORT = 3001;
server.listen(PORT,  () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});

