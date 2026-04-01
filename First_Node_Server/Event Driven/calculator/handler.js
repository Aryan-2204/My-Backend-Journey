const { sumRequestHandler } = require('./sum');
const requestHandler = (req, res) => {
    console.log(req.url, req.method);
if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head><title>Calculator App</title></head>
    <body>
        <h1>Welcome to the Calculator App</h1>
        <a href="/calculator">Go to Calculator</a>
    </body>
    </html>
    `);
    return res.end();
}else if (req.url.toLowerCase() === '/calculator') {
    es.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head><title>Calculator App</title></head>
    <body>
        <h1>Calculator App</h1>
        <form action="/calculate" method="POST">
        <input type="text" id="num1" placeholder="Enter first number" name="num1">
        <input type="text" id="num2" placeholder="Enter second number "name="num2">
        <button onclick="calculate()">Calculate</button>
        <input type ="submit" value="Calculate">
        </form>
    </body>
    </html>
    `);

} else if (req.url.toLowerCase() === '/calculate' && req.method === 'POST') {
   return  sumRequestHandler(req, res);

    
}
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
        <head><title>Calculator App</title></head>
    <body>
        <h1>Page does not Exist</h1>
        <a href="/">Go to Home</a>
    </body>
    </html>
    `);
    return res.end();  
}

module.exports = { requestHandler };
