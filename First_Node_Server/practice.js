const http = require('http');

const server = http.createServer((req, res)=>{
   console.log(req.url,req.method);
  if (req.url === '/Home') {
    res.write('<h1>Welcome to Home Page</h1>');
    return res.end();
  } else if (req.url === '/Men') {
    res.write('<h1>Welcome to Men Page</h1>');
    return res.end();
  } else if (req.url === '/Women') {
    res.write('<h1>Welcome to Women Page</h1>');
    return res.end();
  } else if (req.url === '/Kids') {
    res.write('<h1>Welcome to Kids Page</h1>');
    return res.end();  
    } else if (req.url === '/Cart') {   
    res.write('<h1>Welcome to Cart Page</h1>');
    return res.end();
  }              




   res.write(`
<html lang="en">
<head>
    <title>Myntra</title>
    </head>
    <body>
        <head>
            <nav>
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Men">Men</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/kids">Kids</a></li>
                     <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </head>
    </body>
</html>
   `);
   res.end();





});
server.listen(3001,() => {
    console.log('Server is running on address http://localhost:3001');
});