
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url,req.method);
   
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
      
     const body = [];   
     req.on('data',chunk => {
    console.log(chunk);
    body.push(chunk);
  });
   req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const params = new URLSearchParams(fullBody);
   // const bodyObject ={};
    //for (const [key,val]of params.entries()){
   //   bodyObject[key]= val;
   // }
   const bodyObject = Object.fromEntries(params.entries());
     console.log(bodyObject);
     fs.writeFile('user2.txt', JSON.stringify(bodyObject), error => {
      console.log("Data written to file");
     });
    });
   
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
    }
});

const PORT = 3002;
server.listen(PORT,  () => {
    console.log(`Server is running on address http://localhost:${PORT}`);
});