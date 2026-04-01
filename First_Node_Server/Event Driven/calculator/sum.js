const sumRequestHandler = (req, res) => {
    console.log("Inside sumRequestHandler",req.url);
    const body = [];
    let result;
    req.on('data',chunk => {
        body.push(chunk);
        req.on('end', () => {
            const bodyStr = Buffer.concat(body).toString();
            const params = new URLSearchParams(bodyStr);
            const bodyObj= Object.fromEntries(params);
            const result = Number(bodyObj.first) + Number(bodyObj.second);
            console.log(result);
            res.setHeader('Content-Type', 'text/html');
            res.write(`<html>
                <head><title>Calculator App</title></head>
            <body>
                <h1>Your Sum is ${result}</h1>
                <a href="/">Go to Home</a>
            </body>
            </html>
            `);
            res.end();
        });
        return res.end();
    });
};



exports.sumRequestHandler = sumRequestHandler;


// 1.sum req hangler
// sending response
//chunk came
//end event