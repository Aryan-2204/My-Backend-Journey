const http = require('http');
const userRequestHandler = require('./user3');



const server = http.createServer(userRequestHandler);


const PORT = 3001;
server.listen(PORT,  () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});

